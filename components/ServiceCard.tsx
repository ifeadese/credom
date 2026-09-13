import { type Service, serviceThemeClasses } from "@/lib/services";
import ServiceIcon from "./ServiceIcon";

/**
 * Home services-preview card: line icon top-left, title and one-line
 * description at the bottom (at least 24px below the icon), and the service
 * number as an oversized faint watermark cropped by the top and right edges.
 */
export default function ServiceCard({ service }: { service: Service }) {
  const t = serviceThemeClasses[service.theme];

  return (
    <div
      className={`relative flex min-h-[220px] flex-col justify-between gap-6 overflow-hidden rounded-card px-6 py-8 sm:px-[34px] sm:py-[38px] ${t.card}`}
    >
      {/* Number watermark: decorative, the list order already carries it */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-6 -top-9 select-none font-display text-[160px] font-extrabold leading-none tracking-[-0.04em] opacity-[0.1]"
      >
        {service.number}
      </span>
      <ServiceIcon
        name={service.icon}
        className={`relative h-8 w-8 ${t.number}`}
      />
      <div className="relative">
        <h3 className="mb-[10px] font-display text-[26px] font-bold leading-tight">
          {service.previewTitle}
        </h3>
        <p className={`m-0 text-[15px] leading-[1.6] ${t.previewBody}`}>
          {service.shortDescription}
        </p>
      </div>
    </div>
  );
}
