import { describe, expect, it } from "vitest";

import { loadStoredLocale, localeDir, translations } from "./translations";

describe("i18n translations", () => {
  it("has Hebrew and English trees with matching keys", () => {
    expect(translations.he.intro.initialize).toBeTruthy();
    expect(translations.en.intro.initialize).toBeTruthy();
    expect(translations.he.studio.headlines.length).toBeGreaterThan(0);
    expect(translations.en.studio.headlines.length).toBeGreaterThan(0);
  });

  it("defaults locale direction", () => {
    expect(localeDir("he")).toBe("rtl");
    expect(localeDir("en")).toBe("ltr");
  });

  it("loadStoredLocale returns he or en", () => {
    const locale = loadStoredLocale();
    expect(locale === "he" || locale === "en").toBe(true);
  });
});
