export interface PriceCalculationResult {
  readonly residenceId: "concept-1" | "concept-2";
  readonly checkIn: Date;
  readonly checkOut: Date;
  readonly guestCount: number;
  readonly nightsCount: number;
  readonly minStayNights: number;
  readonly isValidMinStay: boolean;
  readonly weekdayNights: number;
  readonly weekendNights: number;
  readonly totalPrice: number;
  readonly averagePricePerNight: number;
  readonly breakdown: readonly {
    date: string;
    dayName: string;
    isWeekend: boolean;
    price: number;
  }[];
}

/** Pricing for KCR I (Per Guest Tier & Day Type) */
const KCR1_RATES = {
  minStay: 2,
  maxGuests: 6,
  weekday: {
    2: 60,
    3: 75,
    4: 90,
    5: 105,
    6: 120,
  } as Record<number, number>,
  weekend: {
    2: 70,
    3: 80,
    4: 95,
    5: 110,
    6: 130,
  } as Record<number, number>,
};

/** Pricing for KCR II (Flat Standard Rate & Day Type) */
const KCR2_RATES = {
  minStay: 3,
  maxGuests: 7,
  weekday: 170,
  weekend: 180,
};

export function getResidenceSpecs(residenceId: "concept-1" | "concept-2") {
  if (residenceId === "concept-1") {
    return {
      id: "concept-1" as const,
      name: "Kagiampakis Concept Residence I",
      shortName: "KCR I",
      maxGuests: 6,
      minStayNights: 2,
      pricingType: "tiered" as const,
    };
  }
  return {
    id: "concept-2" as const,
    name: "Kagiampakis Concept Residence II",
    shortName: "KCR II",
    maxGuests: 7,
    minStayNights: 3,
    pricingType: "flat" as const,
  };
}

export function calculateStayPrice(
  residenceId: "concept-1" | "concept-2",
  checkIn: Date | null,
  checkOut: Date | null,
  guestCount: number,
): PriceCalculationResult | null {
  if (!checkIn || !checkOut || checkOut <= checkIn) {
    return null;
  }

  const start = new Date(checkIn);
  start.setHours(0, 0, 0, 0);
  const end = new Date(checkOut);
  end.setHours(0, 0, 0, 0);

  const diffTime = Math.abs(end.getTime() - start.getTime());
  const nightsCount = Math.round(diffTime / (1000 * 60 * 60 * 24));

  if (nightsCount <= 0) {
    return null;
  }

  const specs = getResidenceSpecs(residenceId);
  const minStayNights = specs.minStayNights;
  const isValidMinStay = nightsCount >= minStayNights;

  // Clamp guest count to max allowed
  const safeGuests = Math.max(1, Math.min(guestCount, specs.maxGuests));

  let totalPrice = 0;
  let weekdayNights = 0;
  let weekendNights = 0;
  const breakdown: { date: string; dayName: string; isWeekend: boolean; price: number }[] = [];

  const current = new Date(start);
  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  while (current < end) {
    const dayOfWeek = current.getDay();
    // Friday (5) and Saturday (6) are weekend nights
    const isWeekend = dayOfWeek === 5 || dayOfWeek === 6;

    let nightPrice = 0;
    if (residenceId === "concept-1") {
      const tierGuests = Math.max(2, Math.min(safeGuests, 6));
      nightPrice = isWeekend ? KCR1_RATES.weekend[tierGuests] : KCR1_RATES.weekday[tierGuests];
    } else {
      nightPrice = isWeekend ? KCR2_RATES.weekend : KCR2_RATES.weekday;
    }

    if (isWeekend) {
      weekendNights++;
    } else {
      weekdayNights++;
    }

    totalPrice += nightPrice;
    breakdown.push({
      date: current.toISOString().split("T")[0],
      dayName: daysOfWeek[dayOfWeek],
      isWeekend,
      price: nightPrice,
    });

    current.setDate(current.getDate() + 1);
  }

  const averagePricePerNight = Math.round(totalPrice / nightsCount);

  return {
    residenceId,
    checkIn: start,
    checkOut: end,
    guestCount: safeGuests,
    nightsCount,
    minStayNights,
    isValidMinStay,
    weekdayNights,
    weekendNights,
    totalPrice,
    averagePricePerNight,
    breakdown,
  };
}
