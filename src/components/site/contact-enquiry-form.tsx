"use client";

import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { EMAIL } from "@/lib/site-constants";

interface ContactEnquiryFormState {
  readonly guestName: string;
  readonly guestEmail: string;
  readonly travelDates: string;
  readonly message: string;
}

const initialState: ContactEnquiryFormState = {
  guestName: "",
  guestEmail: "",
  travelDates: "",
  message: "",
};

export function ContactEnquiryForm() {
  const [state, setState] = useState<ContactEnquiryFormState>(initialState);
  function executeSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const lines: string[] = [`Name: ${state.guestName}`, `Email: ${state.guestEmail}`];
    if (state.travelDates.trim()) {
      lines.push(`Dates: ${state.travelDates.trim()}`);
    }
    lines.push("", state.message.trim());
    const body = lines.join("\n");
    const subject = encodeURIComponent("Booking enquiry — Kagiampakis Residences");
    const mailtoUrl = `mailto:${EMAIL}?subject=${subject}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;
  }
  return (
    <form
      onSubmit={executeSubmit}
      className="space-y-6 rounded-sm border border-border bg-card p-8 shadow-soft"
    >
      <div className="space-y-2">
        <Label htmlFor="guestName">Name</Label>
        <Input
          id="guestName"
          name="guestName"
          autoComplete="name"
          required
          value={state.guestName}
          onChange={(event) =>
            setState((previous) => ({ ...previous, guestName: event.target.value }))
          }
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="guestEmail">Email</Label>
        <Input
          id="guestEmail"
          name="guestEmail"
          type="email"
          autoComplete="email"
          required
          value={state.guestEmail}
          onChange={(event) =>
            setState((previous) => ({ ...previous, guestEmail: event.target.value }))
          }
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="travelDates">Preferred dates (optional)</Label>
        <Input
          id="travelDates"
          name="travelDates"
          placeholder="e.g. 12–19 June 2026"
          value={state.travelDates}
          onChange={(event) =>
            setState((previous) => ({ ...previous, travelDates: event.target.value }))
          }
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Tell us about your trip and any questions."
          value={state.message}
          onChange={(event) =>
            setState((previous) => ({ ...previous, message: event.target.value }))
          }
        />
      </div>
      <p className="text-xs text-muted-foreground">
        Submitting opens your email app with this message addressed to {EMAIL}. You can also reach
        us on WhatsApp for a quicker reply.
      </p>
      <Button type="submit" className="w-full sm:w-auto">
        Open email with enquiry
      </Button>
    </form>
  );
}
