"use client";

import { useId, useState } from "react";
import {
  EMAIL,
  PHONE_1_DISPLAY,
  PHONE_1_RAW,
  PHONE_2_DISPLAY,
  PHONE_2_RAW,
  VIBER_1_URL,
  VIBER_2_URL,
} from "@/lib/site-constants";
import { calculateStayPrice, getResidenceSpecs } from "@/lib/price-calculator";
import { WhatsAppIcon, ViberIcon, EmailIcon } from "@/components/icons";

interface AvailabilityCalculatorProps {
  readonly initialResidenceId?: "concept-1" | "concept-2";
  readonly className?: string;
}

export function AvailabilityCalculator({
  initialResidenceId = "concept-1",
  className = "",
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
      ? date.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })
      : "";

  const bookingSummaryText = result
    ? `Booking Enquiry for ${residenceName}\n` +
      `Check-in: ${formatDateDisplay(result.checkIn)}\n` +
      `Check-out: ${formatDateDisplay(result.checkOut)} (${result.nightsCount} nights)\n` +
      `Guests: ${result.guestCount}\n` +
      `Estimated Total: €${result.totalPrice}`
    : `Enquiry for ${residenceName}`;

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
            Instant Price &amp; Availability Quote
          </span>
          <h3 className="font-display text-2xl text-stone-deep sm:text-3xl">
            Select Your Stay Dates
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
            Concept I (6 Guests)
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
            Concept II (7 Guests)
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
            Check-In Date
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
            Check-Out Date
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
            Guests Count
          </label>
          <select
            id={`${idPrefix}-guests`}
            value={guestCount}
            onChange={(e) => setGuestCount(Number(e.target.value))}
            className="h-11 w-full rounded-sm border border-input bg-background px-3.5 py-2.5 text-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            {Array.from({ length: specs.maxGuests }, (_, i) => i + 1).map((num) => (
              <option key={num} value={num}>
                {num} {num === 1 ? "Guest" : "Guests"}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Validation Warning */}
      {result && !result.isValidMinStay && (
        <div className="mt-6 rounded-sm border border-amber-300 bg-amber-50 px-4 py-3 text-sm text-amber-900">
          ⚠️ <strong>Minimum Stay Notice:</strong> {specs.shortName} requires a minimum stay of{" "}
          <strong>{specs.minStayNights} nights</strong>. Please select at least{" "}
          {specs.minStayNights} nights to reserve.
        </div>
      )}

      {/* Calculation Summary Box */}
      {result && (
        <div className="mt-6 rounded-sm bg-secondary/60 p-5">
          <div className="flex flex-wrap items-baseline justify-between gap-4 border-b border-border/80 pb-4">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Total for {result.nightsCount} {result.nightsCount === 1 ? "night" : "nights"} (
                {result.guestCount} {result.guestCount === 1 ? "guest" : "guests"})
              </span>
              <div className="mt-1 font-display text-3xl text-stone-deep sm:text-4xl">
                €{result.totalPrice}{" "}
                <span className="text-sm font-normal text-muted-foreground">
                  (avg €{result.averagePricePerNight}/night)
                </span>
              </div>
            </div>
            <div className="text-xs text-muted-foreground">
              {residenceId === "concept-1" ? (
                <span className="inline-block rounded-xs bg-cream px-3 py-1 font-medium text-stone-deep border border-border">
                  Tiered Rates · Min 2 Nights
                </span>
              ) : (
                <span className="inline-block rounded-xs bg-cream px-3 py-1 font-medium text-stone-deep border border-border">
                  Flat Rate €170 (Sun–Thu) / €180 (Fri–Sat) · Min 3 Nights
                </span>
              )}
            </div>
          </div>

          {/* Breakdown List */}
          <div className="mt-4 grid grid-cols-2 gap-3 text-xs text-foreground/80 sm:grid-cols-4">
            <div>
              <span className="text-muted-foreground">Sun–Thu Nights:</span>{" "}
              <strong>{result.weekdayNights}</strong>
            </div>
            <div>
              <span className="text-muted-foreground">Fri–Sat Nights:</span>{" "}
              <strong>{result.weekendNights}</strong>
            </div>
            <div>
              <span className="text-muted-foreground">Check-in:</span>{" "}
              <strong>{formatDateDisplay(result.checkIn)}</strong>
            </div>
            <div>
              <span className="text-muted-foreground">Check-out:</span>{" "}
              <strong>{formatDateDisplay(result.checkOut)}</strong>
            </div>
          </div>
        </div>
      )}

      {/* Booking Actions */}
      <div className="mt-8 border-t border-border pt-6">
        <p className="mb-4 text-xs font-semibold uppercase tracking-display text-primary">
          Send Direct Reservation Request
        </p>
        <div className="grid gap-3 sm:grid-cols-2">
          <a
            href={whatsapp1Url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between gap-3 rounded-xl bg-[#25D366] px-4 py-3.5 text-xs font-semibold text-white shadow-soft transition-all hover:bg-[#20bd5a] hover:shadow-warm sm:px-5"
          >
            <span className="flex items-center gap-2.5">
              <WhatsAppIcon className="h-5 w-5 shrink-0" />
              <span>WhatsApp Primary</span>
            </span>
            <span className="text-[11px] opacity-90">{PHONE_1_DISPLAY}</span>
          </a>

          <a
            href={whatsapp2Url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between gap-3 rounded-xl bg-stone-deep px-4 py-3.5 text-xs font-semibold text-cream shadow-soft transition-all hover:bg-stone-deep/90 hover:shadow-warm sm:px-5"
          >
            <span className="flex items-center gap-2.5">
              <WhatsAppIcon className="h-5 w-5 shrink-0 text-[#25D366]" />
              <span>WhatsApp Secondary</span>
            </span>
            <span className="text-[11px] opacity-80">{PHONE_2_DISPLAY}</span>
          </a>

          <a
            href={VIBER_1_URL}
            className="group flex items-center justify-between gap-3 rounded-xl bg-[#7360F2] px-4 py-3.5 text-xs font-semibold text-white shadow-soft transition-all hover:bg-[#6351e3] hover:shadow-warm sm:px-5"
          >
            <span className="flex items-center gap-2.5">
              <ViberIcon className="h-5 w-5 shrink-0" />
              <span>Viber Message</span>
            </span>
            <span className="text-[11px] opacity-90">{PHONE_1_DISPLAY}</span>
          </a>

          <a
            href={mailtoUrl}
            className="group flex items-center justify-between gap-3 rounded-xl border border-primary/30 bg-primary/10 px-4 py-3.5 text-xs font-semibold text-primary transition-all hover:bg-primary hover:text-primary-foreground sm:px-5"
          >
            <span className="flex items-center gap-2.5">
              <EmailIcon className="h-5 w-5 shrink-0" />
              <span>Email Enquiry</span>
            </span>
            <span className="text-[11px] opacity-80">Send →</span>
          </a>
        </div>
      </div>
    </div>
  );
}
