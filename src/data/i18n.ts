import * as en from "./site";
import * as es from "./site-es";

export type Lang = "en" | "es";

export function getData(lang: Lang = "en") {
  return lang === "es" ? es : en;
}

export function getLangUrl(lang: Lang) {
  return lang === "es" ? "/" : "/es";
}

export function getLangLabel(lang: Lang) {
  return lang === "es" ? "EN" : "ES";
}
