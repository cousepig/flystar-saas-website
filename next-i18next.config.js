
const languagesConfig = [
  {
    label: "English",
    value: "en",
  },
  {
    label: "中文",
    value: "zh",
  },
]

const i18n = {
  defaultLocale: "en",
  locales: languagesConfig.map((language) => language.value),
}

module.exports = {
  i18n,
  languagesConfig,
}
