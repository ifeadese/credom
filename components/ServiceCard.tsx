import { type Service, serviceThemeClasses } from "@/lib/services";

/** Home services-preview card: number, title, one-line description. */
export default function ServiceCard({ service }: { service: Service }) {
  const t = serviceThemeClasses[service.theme];

  return (
    <div
      className={`flex min-h-[220px] flex-col justify-between rounded-card px-[34px] py-[38px] ${t.card}`}
    >
      <span className={`font-display text-[22px] font-bold ${t.number}`}>
        {service.number}
      </span>
      <div>
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
