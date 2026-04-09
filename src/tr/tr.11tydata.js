/**
 * /tr altındaki sayfalar için çeviri nesnesi (t) üretir.
 */
module.exports = {
  eleventyComputed: {
    t: (data) => data.localeData.locales[data.locale],
  },
};
