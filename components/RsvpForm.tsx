"use client";

import Button from "./Button";
import { useFormSubmission } from "@/hooks/useFormSubmission";

const inputClass =
  "w-full rounded-btn border border-line-form bg-white px-4 py-[14px] text-[15px] text-ink placeholder:text-body-muted";

const labelTextClass =
  "mb-[9px] block text-[13px] font-bold tracking-[0.05em] text-ink";

const initialData = { fullName: "", email: "", phone: "", website: "" };

const successMessage =
  "We've received your RSVP. Check your inbox for a confirmation, then watch for a second email with your pass.";

/**
 * Guest RSVP: name, email, phone. Posts to this site's /api/rsvp, which
 * forwards to the events app server-side; the events app validates again,
 * de-duplicates and sends the confirmation email.
 */
export default function RsvpForm({ eventSlug }: { eventSlug: string }) {
  const { formData, isSubmitting, submitStatus, handleChange, handleSubmit } =
    useFormSubmission(initialData, {
      submitEndpoint: "/api/rsvp",
      successMessage,
      buildPayload: (data) => ({ ...data, eventSlug }),
    });

  if (submitStatus.type === "success") {
    return (
      <div
        role="status"
        className="rounded-card border-l-4 border-teal bg-paper-2 px-7 py-6"
      >
        <p className="m-0 text-[16px] leading-[1.6] text-ink">
          <strong>You&apos;re on the list.</strong> {submitStatus.message}
        </p>
        <p className="mb-0 mt-3 text-[14px] text-body-muted">
          Nothing after a few minutes? Check your spam or promotions folder.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-[22px]">
      {submitStatus.type === "error" && (
        <div
          role="alert"
          className="rounded-card border-l-4 border-magenta bg-paper-2 px-7 py-5 text-[15px] leading-[1.6] text-ink"
        >
          {submitStatus.message}
        </div>
      )}

      <div>
        <label htmlFor="rsvp-name" className={labelTextClass}>
          Full name
        </label>
        <input
          id="rsvp-name"
          name="fullName"
          type="text"
          autoComplete="name"
          required
          minLength={2}
          maxLength={120}
          value={formData.fullName}
          onChange={handleChange}
          className={inputClass}
          placeholder="Your full name"
        />
      </div>

      <div>
        <label htmlFor="rsvp-email" className={labelTextClass}>
          Email address
        </label>
        <input
          id="rsvp-email"
          name="email"
          type="email"
          autoComplete="email"
          inputMode="email"
          required
          maxLength={254}
          value={formData.email}
          onChange={handleChange}
          className={inputClass}
          placeholder="you@example.com"
        />
      </div>

      <div>
        <label htmlFor="rsvp-phone" className={labelTextClass}>
          Phone number
        </label>
        <input
          id="rsvp-phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          inputMode="tel"
          required
          minLength={7}
          maxLength={32}
          value={formData.phone}
          onChange={handleChange}
          className={inputClass}
          placeholder="+234 800 000 0000"
        />
      </div>

      {/* Honeypot: hidden from people, filled by bots */}
      <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
        <label htmlFor="rsvp-website">Website</label>
        <input
          id="rsvp-website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={formData.website}
          onChange={handleChange}
        />
      </div>

      <Button
        type="submit"
        size="lg"
        className={`w-full ${isSubmitting ? "pointer-events-none opacity-60" : ""}`}
      >
        {isSubmitting ? "Sending…" : "RSVP"}
      </Button>
    </form>
  );
}
