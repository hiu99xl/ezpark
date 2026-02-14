export const locales = ["vi", "en", "kr", "zh"] as const;
export const defaultLocale = "vi";

export const localeLabels: Record<string,string> = {
  vi: "VI",
  en: "EN",
  kr: "KR",
  zh: "ZH"
};

export const localeDisplayNames: Record<string, string> = {
  vi: "Việt",
  en: "Anh",
  kr: "Hàn",
  zh: "Trung"
};

export const localeFlags: Record<string, string> = {
  vi: "/images/flags/flag_vietnam.png",
  en: "/images/flags/flag_united_kingdom.png",
  kr: "/images/flags/flag_south_korea.png",
  zh: "/images/flags/flag_china.png"
};
