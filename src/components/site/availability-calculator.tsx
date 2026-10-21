"use client";

import { useId, useState } from "react";
import { ContactChannelRow } from "@/components/site/contact-channels";
import {
  EMAIL,
  PHONE_1_DISPLAY,
  PHONE_1_RAW,
  PHONE_2_DISPLAY,
  PHONE_2_RAW,
  VIBER_1_URL,
} from "@/lib/site-constants";
import { pick, type Locale } from "@/lib/i18n/locale";
import { calculateStayPrice, getResidenceSpecs } from "@/lib/price-calculator";

interface AvailabilityCalculatorProps {
  readonly initialResidenceId?: "concept-1" | "concept-2";
  readonly className?: string;
  readonly locale?: Locale;
}

export function AvailabilityCalculator({
  initialResidenceId = "concept-1",
  className = "",
  locale = "en",
}: AvailabilityCalculatorProps) {
  const idPrefix = useId();
  const [residenceId, setResidenceId] = useState<"concept-1" | "concept-2">(initialResidenceId);

  // Default dates: tomorrow to 3 days later
  const today = new Date();
  const defaultCheckIn = new Date(today);
  defaultCheckIn.setDate(today.getDate() + 7);
  const defaultCheckOut = new Date(defaultCheckIn);
  defaultCheckOut.setDate(defaultCheckIn.getDate() + (residenceId === "concept-1" ? 2 : 3));

  const [checkInStr, setCheckInStr] = useState<string>(defaultCheckIn.toISOString().split("T")[0]);
  const [checkOutStr, setCheckOutStr] = useState<string>(
    defaultCheckOut.toISOString().split("T")[0],
  );
  const [guestCount, setGuestCount] = useState<number>(2);

  const specs = getResidenceSpecs(residenceId);

  const checkInDate = checkInStr ? new Date(checkInStr) : null;
  const checkOutDate = checkOutStr ? new Date(checkOutStr) : null;

  const result = calculateStayPrice(residenceId, checkInDate, checkOutDate, guestCount);

  // Handle residence switch
  const handleResidenceChange = (newId: "concept-1" | "concept-2") => {
    setResidenceId(newId);
    const newSpecs = getResidenceSpecs(newId);
    if (guestCount > newSpecs.maxGuests) {
      setGuestCount(newSpecs.maxGuests);
    }
    // Adjust checkout date if current nights < minStay
    if (checkInDate && checkOutDate) {
      const diffDays = Math.round(
        Math.abs(checkOutDate.getTime() - checkInDate.getTime()) / (1000 * 60 * 60 * 24),
      );
      if (diffDays < newSpecs.minStayNights) {
        const adjustedCheckOut = new Date(checkInDate);
        adjustedCheckOut.setDate(checkInDate.getDate() + newSpecs.minStayNights);
        setCheckOutStr(adjustedCheckOut.toISOString().split("T")[0]);
      }
    }
  };

  // Generate booking text
  const residenceName = specs.name;
  const formatDateDisplay = (date: Date | null) =>
    date
      ? date.toLocaleDateString(locale === "el" ? "el-GR" : "en-GB", {
          day: "numeric",
          month: "short",
          year: "numeric",
        })
      : "";

  const bookingSummaryText = result
    ? pick(
        locale,
        `Booking Enquiry for ${residenceName}\n` +
          `Check-in: ${formatDateDisplay(result.checkIn)}\n` +
          `Check-out: ${formatDateDisplay(result.checkOut)} (${result.nightsCount} nights)\n` +
          `Guests: ${result.guestCount}\n` +
          `Estimated Total: €${result.totalPrice}`,
        `Αίτημα κράτησης για ${residenceName}\n` +
          `Άφιξη: ${formatDateDisplay(result.checkIn)}\n` +
          `Αναχώρηση: ${formatDateDisplay(result.checkOut)} (${result.nightsCount} διανυκτερεύσεις)\n` +
          `Άτομα: ${result.guestCount}\n` +
          `Εκτιμώμενο σύνολο: €${result.totalPrice}`,
      )
    : pick(locale, `Enquiry for ${residenceName}`, `Αίτημα για ${residenceName}`);

  const whatsapp1Url = `https://wa.me/30${PHONE_1_RAW}?text=${encodeURIComponent(bookingSummaryText)}`;
  const whatsapp2Url = `https://wa.me/30${PHONE_2_RAW}?text=${encodeURIComponent(bookingSummaryText)}`;
  const mailtoUrl = `mailto:${EMAIL}?subject=${encodeURIComponent(
    `Booking Request — ${specs.shortName}`,
  )}&body=${encodeURIComponent(bookingSummaryText)}`;

  return (
    <div
      className={`rounded-sm border border-border bg-card p-6 shadow-soft sm:p-8 ${className}`}
      id="calculator"
    >
      <div className="mb-6 flex flex-col justify-between gap-4 border-b border-border pb-6 sm:flex-row sm:items-center">
        <div>
          <span className="text-xs font-semibold uppercase tracking-display text-primary">
            {pick(locale, "Instant Price & Availability Quote", "Άμεση τιμή και διαθεσιμότητα")}
          </span>
          <h3 className="font-display text-2xl text-stone-deep sm:text-3xl">
            {pick(locale, "Select Your Stay Dates", "Διαλέξτε ημερομηνίες")}
          </h3>
        </div>

        {/* Residence Toggle */}
        <div className="inline-flex rounded-sm bg-secondary p-1">
          <button
            type="button"
            onClick={() => handleResidenceChange("concept-1")}
            className={`rounded-xs px-4 py-2 text-xs font-semibold transition-all ${
              residenceId === "concept-1"
                ? "bg-primary text-primary-foreground shadow-xs"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {pick(locale, "Concept I (6 Guests)", "Κατοικία I (6 άτομα)")}
          </button>
          <button
            type="button"
            onClick={() => handleResidenceChange("concept-2")}
            className={`rounded-xs px-4 py-2 text-xs font-semibold transition-all ${
              residenceId === "concept-2"
                ? "bg-primary text-primary-foreground shadow-xs"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {pick(locale, "Concept II (7 Guests)", "Κατοικία II (7 άτομα)")}
          </button>
        </div>
      </div>

      {/* Inputs Form */}
      <div className="grid gap-5 sm:grid-cols-3">
        <div>
          <label
            htmlFor={`${idPrefix}-checkin`}
            className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-muted-foreground"
          >
            {pick(locale, "Check-In Date", "Άφιξη")}
          </label>
          <input
            id={`${idPrefix}-checkin`}
            type="date"
            min={today.toISOString().split("T")[0]}
            value={checkInStr}
            onChange={(e) => setCheckInStr(e.target.value)}
            className="h-11 w-full rounded-sm border border-input bg-background px-3.5 py-2.5 text-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          />
        </div>

        <div>
          <label
            htmlFor={`${idPrefix}-checkout`}
            className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-muted-foreground"
          >
            {pick(locale, "Check-Out Date", "Αναχώρηση")}
          </label>
          <input
            id={`${idPrefix}-checkout`}
            type="date"
            min={checkInStr || today.toISOString().split("T")[0]}
            value={checkOutStr}
            onChange={(e) => setCheckOutStr(e.target.value)}
            className="h-11 w-full rounded-sm border border-input bg-background px-3.5 py-2.5 text-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          />
        </div>

        <div>
          <label
            htmlFor={`${idPrefix}-guests`}
            className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-muted-foreground"
          >
            {pick(locale, "Guests Count", "Άτομα")}
          </label>
          <select
            id={`${idPrefix}-guests`}
            value={guestCount}
            onChange={(e) => setGuestCount(Number(e.target.value))}
            className="h-11 w-full rounded-sm border border-input bg-background px-3.5 py-2.5 text-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            {Array.from({ length: specs.maxGuests }, (_, i) => i + 1).map((num) => (
              <option key={num} value={num}>
                {num} {pick(locale, num === 1 ? "Guest" : "Guests", num === 1 ? "άτομο" : "άτομα")}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Validation Warning */}
      {result && !result.isValidMinStay && (
        <div className="mt-6 rounded-sm border border-amber-300 bg-amber-50 px-4 py-3 text-sm text-amber-900">
          <strong>{pick(locale, "Minimum stay:", "Ελάχιστη διαμονή:")}</strong>{" "}
          {pick(
            locale,
            `${specs.shortName} requires ${specs.minStayNights} nights. Please choose at least ${specs.minStayNights} nights to reserve.`,
            `Η ${specs.shortName} απαιτεί ${specs.minStayNights} διανυκτερεύσεις. Διαλέξτε τουλάχιστον ${specs.minStayNights} διανυκτερεύσεις.`,
          )}
        </div>
      )}

      {/* Calculation Summary Box */}
      {result && (
        <div className="mt-6 rounded-sm bg-secondary/60 p-5">
          <div className="flex flex-wrap items-baseline justify-between gap-4 border-b border-border/80 pb-4">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                {pick(
                  locale,
                  `Total for ${result.nightsCount} ${result.nightsCount === 1 ? "night" : "nights"} (${result.guestCount} ${result.guestCount === 1 ? "guest" : "guests"})`,
                  `Σύνολο για ${result.nightsCount} ${result.nightsCount === 1 ? "διανυκτέρευση" : "διανυκτερεύσεις"} (${result.guestCount} ${result.guestCount === 1 ? "άτομο" : "άτομα"})`,
                )}
              </span>
              <div className="mt-1 font-display text-3xl text-stone-deep sm:text-4xl">
                €{result.totalPrice}{" "}
                <span className="text-sm font-normal text-muted-foreground">
                  {pick(
                    locale,
                    `(avg €${result.averagePricePerNight}/night)`,
                    `(μέσος όρος ${result.averagePricePerNight}€/διανυκτέρευση)`,
                  )}
                </span>
              </div>
            </div>
            <div className="text-xs text-muted-foreground">
              {residenceId === "concept-1" ? (
                <span className="inline-block rounded-xs bg-cream px-3 py-1 font-medium text-stone-deep border border-border">
                  {pick(
                    locale,
                    "Tiered Rates · Min 2 Nights",
                    "Κλιμακωτή τιμή · Ελάχιστο 2 διανυκτερεύσεις",
                  )}
                </span>
              ) : (
                <span className="inline-block rounded-xs bg-cream px-3 py-1 font-medium text-stone-deep border border-border">
                  {pick(
                    locale,
                    "Flat Rate €170 (Sun–Thu) / €180 (Fri–Sat) · Min 3 Nights",
                    "Ενιαία τιμή 170€ (Κυρ–Πέμ) / 180€ (Παρ–Σάβ) · Ελάχιστο 3 διανυκτερεύσεις",
                  )}
                </span>
              )}
            </div>
          </div>

          {/* Breakdown List */}
          <div className="mt-4 grid grid-cols-2 gap-3 text-xs text-foreground/80 sm:grid-cols-4">
            <div>
              <span className="text-muted-foreground">
                {pick(locale, "Sun–Thu Nights:", "Διανυκτερεύσεις Κυρ–Πέμ:")}
              </span>{" "}
              <strong>{result.weekdayNights}</strong>
            </div>
            <div>
              <span className="text-muted-foreground">
                {pick(locale, "Fri–Sat Nights:", "Διανυκτερεύσεις Παρ–Σάβ:")}
              </span>{" "}
              <strong>{result.weekendNights}</strong>
            </div>
            <div>
              <span className="text-muted-foreground">{pick(locale, "Check-in:", "Άφιξη:")}</span>{" "}
              <strong>{formatDateDisplay(result.checkIn)}</strong>
            </div>
            <div>
              <span className="text-muted-foreground">
                {pick(locale, "Check-out:", "Αναχώρηση:")}
              </span>{" "}
              <strong>{formatDateDisplay(result.checkOut)}</strong>
            </div>
          </div>
        </div>
      )}

      {/* Booking Actions */}
      <div className="mt-8 border-t border-border pt-6">
        <p className="mb-4 text-xs font-semibold uppercase tracking-display text-primary">
          {pick(locale, "Send Direct Reservation Request", "Στείλτε αίτημα κράτησης")}
        </p>
        <div className="flex flex-col gap-2.5">
          <ContactChannelRow
            href={whatsapp1Url}
            variant="whatsapp"
            label={pick(locale, "WhatsApp primary", "WhatsApp (κύριο)")}
            detail={PHONE_1_DISPLAY}
          />
          <ContactChannelRow
            href={whatsapp2Url}
            variant="whatsapp-alt"
            label={pick(locale, "WhatsApp secondary", "WhatsApp (δεύτερο)")}
            detail={PHONE_2_DISPLAY}
          />
          <ContactChannelRow
            href={VIBER_1_URL}
            variant="viber"
            label={pick(locale, "Viber message", "Μήνυμα στο Viber")}
            detail={PHONE_1_DISPLAY}
            external={false}
          />
          <a
            href={mailtoUrl}
            className="flex h-12 w-full items-center justify-between rounded-lg border border-primary/30 bg-primary/10 px-4 text-xs font-semibold text-primary transition-all hover:bg-primary hover:text-primary-foreground"
          >
            <span>{pick(locale, "Email enquiry", "Αίτημα με email")}</span>
            <span className="text-[11px] font-medium opacity-80">
              {pick(locale, "Send", "Αποστολή")}
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
