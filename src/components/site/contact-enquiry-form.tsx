"use client";

import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
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
  residenceChoice: "Concept I (6 guests max)",
  travelDates: "",
  message: "",
};

export function ContactEnquiryForm() {
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
        <Label htmlFor="residenceChoice">Select Residence</Label>
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
            Kagiampakis Concept Residence I (6 guests max · min 2 nights)
          </option>
          <option value="Concept Residence II (7 guests max)">
            Kagiampakis Concept Residence II (7 guests max · min 3 nights)
          </option>
          <option value="Both Residences (Group stay)">
            Both Residences (Group Stay up to 13 guests)
          </option>
        </select>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-1.5">
          <Label htmlFor="guestName">Your Name</Label>
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
          <Label htmlFor="guestEmail">Email Address</Label>
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
        <Label htmlFor="travelDates">Preferred Travel Dates &amp; Guest Count</Label>
        <Input
          id="travelDates"
          name="travelDates"
          placeholder="e.g. 15–20 August 2026, 4 Guests"
          className="h-11"
          value={state.travelDates}
          onChange={(event) =>
            setState((previous) => ({ ...previous, travelDates: event.target.value }))
          }
        />
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="message">Message &amp; Special Requests</Label>
        <Textarea
          id="message"
          name="message"
          required
          rows={4}
          placeholder="Tell us about your trip, preferred arrival times, or any questions."
          value={state.message}
          onChange={(event) =>
            setState((previous) => ({ ...previous, message: event.target.value }))
          }
        />
      </div>

      <div className="flex flex-col gap-3 border-t border-border pt-5 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-muted-foreground">
          Opens your email app addressed to <strong>{EMAIL}</strong>.
        </p>
        <Button type="submit" className="inline-flex items-center gap-2 sm:w-auto">
          <EmailIcon className="h-4 w-4" />
          Send Email Enquiry
        </Button>
      </div>
    </form>
  );
}
