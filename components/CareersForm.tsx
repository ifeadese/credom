"use client";

import { useFormSubmission } from "@/hooks/useFormSubmission";
import { DEFAULT_FORMBOLD_SUBMIT_URL } from "@/lib/formbold";
import {
  careersRoles,
  careersInitialData,
  careersFieldNames,
  careersFormType,
  careersSuccessMessage,
  type CareersFormData,
} from "@/lib/content";

const inputClass =
  "w-full rounded-btn border border-line-form bg-white px-4 py-[14px] text-[15px] text-ink placeholder:text-body-muted";

const labelTextClass =
  "mb-[9px] block text-[13px] font-bold tracking-[0.05em] text-ink";

/**
 * Remap internal keys to the FormBold field names, tagging the submission as
 * a team application so it's distinguishable from contact enquiries in the
 * shared FormBold inbox.
 */
function buildFormBoldPayload(
  data: CareersFormData
): Record<string, unknown> {
  const payload: Record<string, unknown> = { formType: careersFormType };
  for (const key of Object.keys(careersFieldNames) as Array<
    keyof CareersFormData
  >) {
    payload[careersFieldNames[key]] = data[key] ?? "";
  }
  return payload;
}

export default function CareersForm() {
  const { formData, isSubmitting, submitStatus, handleChange, handleSubmit } =
    useFormSubmission<CareersFormData>(careersInitialData, {
      submitEndpoint:
        process.env.NEXT_PUBLIC_FORMBOLD_ENDPOINT?.trim() ||
        DEFAULT_FORMBOLD_SUBMIT_URL,
      successMessage: careersSuccessMessage,
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
            <label htmlFor="careers-name" className={labelTextClass}>
              Full Name
            </label>
            <input
              id="careers-name"
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
            <label htmlFor="careers-age" className={labelTextClass}>
              Age
            </label>
            <input
              id="careers-age"
              name="age"
              type="number"
              required
              min={16}
              max={99}
              value={formData.age}
              onChange={handleChange}
              placeholder="18+"
              aria-required="true"
              className={inputClass}
            />
          </div>
        </div>

        <div className="mb-[22px] grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-[22px]">
          <div>
            <label htmlFor="careers-phone" className={labelTextClass}>
              Phone / WhatsApp
            </label>
            <input
              id="careers-phone"
              name="phone"
              type="tel"
              required
              value={formData.phone}
              onChange={handleChange}
              placeholder="+234..."
              aria-required="true"
              className={inputClass}
            />
          </div>
          <div>
            <label htmlFor="careers-email" className={labelTextClass}>
              Email
            </label>
            <input
              id="careers-email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="you@email.com"
              aria-required="true"
              className={inputClass}
            />
          </div>
        </div>

        <div className="mb-[22px] grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-[22px]">
          <div>
            <label htmlFor="careers-location" className={labelTextClass}>
              Location (City / Area)
            </label>
            <input
              id="careers-location"
              name="location"
              type="text"
              required
              value={formData.location}
              onChange={handleChange}
              placeholder="e.g. Lekki, Lagos"
              aria-required="true"
              className={inputClass}
            />
          </div>
          <div>
            <label htmlFor="careers-role" className={labelTextClass}>
              Role
            </label>
            <select
              id="careers-role"
              name="role"
              value={formData.role}
              onChange={handleChange}
              className={inputClass}
            >
              {careersRoles.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="mb-7">
          <label htmlFor="careers-experience" className={labelTextClass}>
            Experience (optional)
          </label>
          <textarea
            id="careers-experience"
            name="experience"
            rows={3}
            value={formData.experience}
            onChange={handleChange}
            placeholder="Tell us about any events or activations you've worked on"
            className={`${inputClass} resize-y leading-[1.6]`}
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="cursor-pointer rounded-btn border-none bg-gold px-[38px] py-4 text-base font-bold text-ink transition-opacity hover:opacity-90 disabled:opacity-60"
        >
          {isSubmitting ? "Sending…" : "Apply to Join"}
        </button>
      </form>
    </div>
  );
}
