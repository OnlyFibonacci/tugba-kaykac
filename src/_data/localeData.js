const fs = require("fs");
const path = require("path");

/**
 * Yerel çeviri dosyalarını okur (Eleventy global veri).
 * @returns {{ locales: Record<string, Record<string, unknown>> }}
 */
function loadLocale(name) {
  const filePath = path.join(__dirname, "..", "locales", `${name}.json`);
  return JSON.parse(fs.readFileSync(filePath, "utf8"));
}

module.exports = {
  locales: {
    en: loadLocale("en"),
    tr: loadLocale("tr"),
  },
};
