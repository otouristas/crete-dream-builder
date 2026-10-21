"use client";

import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { localizedHref, pick, type Locale } from "@/lib/i18n/locale";
import { EMAIL } from "@/lib/site-constants";
import { EmailIcon } from "@/components/icons";

interface ContactEnquiryFormState {
  readonly guestName: string;
  readonly guestEmail: string;
  readonly residenceChoice: string;
  readonly travelDates: string;
  readonly message: string;
}

const initialState: ContactEnquiryFormState = {
  guestName: "",
  guestEmail: "",
  residenceChoice: "Concept Residence I (6 guests max)",
  travelDates: "",
  message: "",
};

export function ContactEnquiryForm({ locale = "en" }: { readonly locale?: Locale }) {
  const [state, setState] = useState<ContactEnquiryFormState>(initialState);

  function executeSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const lines: string[] = [
      `Residence: ${state.residenceChoice}`,
      `Name: ${state.guestName}`,
      `Email: ${state.guestEmail}`,
    ];
    if (state.travelDates.trim()) {
      lines.push(`Dates: ${state.travelDates.trim()}`);
    }
    lines.push("", state.message.trim());
    const body = lines.join("\n");
    const subject = encodeURIComponent(`Booking enquiry — ${state.residenceChoice}`);
    const mailtoUrl = `mailto:${EMAIL}?subject=${subject}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;
  }

  return (
    <form
      onSubmit={executeSubmit}
      className="space-y-5 rounded-sm border border-border bg-card p-6 shadow-soft sm:p-8"
    >
      <div className="space-y-1.5">
        <Label htmlFor="residenceChoice">
          {pick(locale, "Select Residence", "Επιλογή κατοικίας")}
        </Label>
        <select
          id="residenceChoice"
          name="residenceChoice"
          className="h-11 w-full rounded-sm border border-input bg-background px-3.5 py-2 text-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          value={state.residenceChoice}
          onChange={(e) =>
            setState((previous) => ({ ...previous, residenceChoice: e.target.value }))
          }
        >
          <option value="Concept Residence I (6 guests max)">
            {pick(
              locale,
              "Kagiampakis Concept Residence I (6 guests max · min 2 nights)",
              "Κατοικία I (έως 6 άτομα · ελάχιστο 2 διανυκτερεύσεις)",
            )}
          </option>
          <option value="Concept Residence II (7 guests max)">
            {pick(
              locale,
              "Kagiampakis Concept Residence II (7 guests max · min 3 nights)",
              "Κατοικία II (έως 7 άτομα · ελάχιστο 3 διανυκτερεύσεις)",
            )}
          </option>
          <option value="Both Residences (Group stay)">
            {pick(
              locale,
              "Both residences in Avdou (up to 13 guests)",
              "Και οι δύο κατοικίες στην Αβδού (έως 13 άτομα)",
            )}
          </option>
        </select>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-1.5">
          <Label htmlFor="guestName">{pick(locale, "Your Name", "Το όνομά σας")}</Label>
          <Input
            id="guestName"
            name="guestName"
            autoComplete="name"
            required
            className="h-11"
            value={state.guestName}
            onChange={(event) =>
              setState((previous) => ({ ...previous, guestName: event.target.value }))
            }
          />
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="guestEmail">{pick(locale, "Email Address", "Email")}</Label>
          <Input
            id="guestEmail"
            name="guestEmail"
            type="email"
            autoComplete="email"
            required
            className="h-11"
            value={state.guestEmail}
            onChange={(event) =>
              setState((previous) => ({ ...previous, guestEmail: event.target.value }))
            }
          />
        </div>
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="travelDates">
          {pick(locale, "Preferred Travel Dates & Guest Count", "Ημερομηνίες και αριθμός ατόμων")}
        </Label>
        <Input
          id="travelDates"
          name="travelDates"
          placeholder={pick(locale, "e.g. 15–20 August, 4 guests", "π.χ. 15–20 Αυγούστου, 4 άτομα")}
          className="h-11"
          value={state.travelDates}
          onChange={(event) =>
            setState((previous) => ({ ...previous, travelDates: event.target.value }))
          }
        />
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="message">{pick(locale, "Message & Special Requests", "Μήνυμα")}</Label>
        <Textarea
          id="message"
          name="message"
          required
          rows={4}
          placeholder={pick(
            locale,
            "Tell us about your trip, preferred arrival times, or any questions.",
            "Πείτε μας για το ταξίδι, την ώρα άφιξης ή ό,τι θέλετε να ρωτήσετε.",
          )}
          value={state.message}
          onChange={(event) =>
            setState((previous) => ({ ...previous, message: event.target.value }))
          }
        />
      </div>

      <div className="flex flex-col gap-3 border-t border-border pt-5 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-muted-foreground">
          {pick(locale, "Opens your email app addressed to", "Ανοίγει την εφαρμογή email προς")}{" "}
          <strong>{EMAIL}</strong>.{" "}
          {pick(
            locale,
            "We only use this to reply about your stay. See our",
            "Το χρησιμοποιούμε μόνο για να απαντήσουμε για τη διαμονή. Δείτε την",
          )}{" "}
          <a
            href={localizedHref(locale, "/privacy")}
            className="text-primary underline-offset-4 hover:underline"
          >
            {pick(locale, "privacy notice", "ενημέρωση απορρήτου")}
          </a>
          .
        </p>
        <Button type="submit" className="inline-flex items-center gap-2 sm:w-auto">
          <EmailIcon className="h-4 w-4" />
          {pick(locale, "Send Email Enquiry", "Αποστολή email")}
        </Button>
      </div>
    </form>
  );
}
