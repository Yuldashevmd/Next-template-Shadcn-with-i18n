import { useLang } from "@/shared/hooks/useLang";

export default function NotFoundPage() {
  const { t } = useLang();

  return (
    <div className="flex items-center justify-center h-screen">
      <h1 className="lg:text-3xl md:text-2xl sm:text-xl">{t("notFound")}</h1>
    </div>
  );
}
