"use client";

import { useFormSubmission } from "@/hooks/useFormSubmission";
import { DEFAULT_FORMBOLD_SUBMIT_URL } from "@/lib/formbold";
import {
  contactInterests,
  contactInitialData,
  contactSuccessMessage,
  formBoldFieldNames,
  type ContactFormData,
} from "@/lib/content";

const inputClass =
  "w-full rounded-btn border border-line-form bg-white px-4 py-[14px] text-[15px] text-ink placeholder:text-body-muted";

const labelTextClass =
  "mb-[9px] block text-[13px] font-bold tracking-[0.05em] text-ink";

/** Remap internal keys to the FormBold dashboard field names before submit. */
function buildFormBoldPayload(
  data: ContactFormData
): Record<string, unknown> {
  const payload: Record<string, unknown> = {};
  for (const key of Object.keys(formBoldFieldNames) as Array<
    keyof ContactFormData
  >) {
    payload[formBoldFieldNames[key]] = data[key] ?? "";
  }
  return payload;
}

export default function ContactForm() {
  const { formData, isSubmitting, submitStatus, handleChange, handleSubmit } =
    useFormSubmission<ContactFormData>(contactInitialData, {
      submitEndpoint:
        process.env.NEXT_PUBLIC_FORMBOLD_ENDPOINT?.trim() ||
        DEFAULT_FORMBOLD_SUBMIT_URL,
      successMessage: contactSuccessMessage,
      buildPayload: buildFormBoldPayload,
    });

  const error = submitStatus.type === "error" ? submitStatus.message : null;

  return (
    <div>
      {submitStatus.type === "success" && (
        <div
          role="status"
          className="mb-7 rounded-card border-l-4 border-teal bg-paper-2 px-7 py-6"
        >
          <p className="m-0 text-[16px] leading-[1.6] text-ink">
            <strong>Thank you.</strong> {submitStatus.message}
          </p>
        </div>
      )}

      {error && (
        <div
          role="alert"
          className="mb-7 rounded-card border-l-4 border-magenta bg-paper-2 px-7 py-6"
        >
          <p className="m-0 text-[16px] leading-[1.6] text-ink">
            <strong>Something went wrong.</strong> {error} You can also email us
            directly at{" "}
            <a
              href="mailto:hello@credomlimited.com"
              className="font-semibold underline"
            >
              hello@credomlimited.com
            </a>
            .
          </p>
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="mb-[22px] grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-[22px]">
          <div>
            <label htmlFor="contact-name" className={labelTextClass}>
              Full Name
            </label>
            <input
              id="contact-name"
              name="name"
              type="text"
              required
              minLength={2}
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              aria-required="true"
              className={inputClass}
            />
          </div>
          <div>
            <label htmlFor="contact-email" className={labelTextClass}>
              Email
            </label>
            <input
              id="contact-email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="you@company.com"
              aria-required="true"
              className={inputClass}
            />
          </div>
        </div>

        <div className="mb-[22px]">
          <label htmlFor="contact-company" className={labelTextClass}>
            Company / Organization
          </label>
          <input
            id="contact-company"
            name="company"
            type="text"
            value={formData.company}
            onChange={handleChange}
            placeholder="Optional"
            className={inputClass}
          />
        </div>

        <div className="mb-[22px]">
          <label htmlFor="contact-service" className={labelTextClass}>
            What are you interested in?
          </label>
          <select
            id="contact-service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            className={inputClass}
          >
            {contactInterests.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-7">
          <label htmlFor="contact-message" className={labelTextClass}>
            Tell us about your project
          </label>
          <textarea
            id="contact-message"
            name="message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            placeholder="What moment do you want to create?"
            className={`${inputClass} resize-y leading-[1.6]`}
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="cursor-pointer rounded-btn border-none bg-gold px-[38px] py-4 text-base font-bold text-ink transition-opacity hover:opacity-90 disabled:opacity-60"
        >
          {isSubmitting ? "Sending…" : "Schedule a Chat"}
        </button>
      </form>
    </div>
  );
}
