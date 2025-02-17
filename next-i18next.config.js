
const languagesConfig = [
  {
    label: "English",
    value: "en-US",
  },
  {
    label: "中文",
    value: "zh-CN",
  },
]

const i18n = {
  defaultLocale: "en-US",
  locales: languagesConfig.map((language) => language.value),
}

module.exports = {
  i18n,
  languagesConfig,
}
