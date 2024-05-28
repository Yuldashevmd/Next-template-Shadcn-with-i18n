import { useLocale, useTranslations } from "next-intl";

export const useLang = () => {
  const locale = useLocale();
  const t = useTranslations("Index");

  return {
    t,
    locale,
  };
};
