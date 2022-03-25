import locale77427e78 from '../../locales/en.js'
import locale77526775 from '../../locales/fr.js'

export const Constants = {
  COMPONENT_OPTIONS_KEY: "nuxtI18n",
  STRATEGIES: {"PREFIX":"prefix","PREFIX_EXCEPT_DEFAULT":"prefix_except_default","PREFIX_AND_DEFAULT":"prefix_and_default","NO_PREFIX":"no_prefix"},
  REDIRECT_ON_OPTIONS: {"ALL":"all","ROOT":"root","NO_PREFIX":"no prefix"},
}
export const nuxtOptions = {
  isUniversalMode: true,
  trailingSlash: undefined,
}
export const options = {
  vueI18n: {"fallbackLocale":"en","silentFallbackWarn":true},
  vueI18nLoader: true,
  locales: [{"code":"en","name":"English","file":"en.js"},{"code":"fr","name":"Français","file":"fr.js"}],
  defaultLocale: "en",
  defaultDirection: "ltr",
  routesNameSeparator: "___",
  defaultLocaleRouteNameSuffix: "default",
  sortRoutes: true,
  strategy: "no_prefix",
  lazy: false,
  langDir: "/baserow/web-frontend/locales",
  rootRedirect: null,
  detectBrowserLanguage: {"alwaysRedirect":false,"cookieCrossOrigin":false,"cookieDomain":null,"cookieKey":"i18n-language","cookieSecure":false,"fallbackLocale":"","redirectOn":"root","useCookie":true},
  differentDomains: false,
  baseUrl: "",
  vuex: {"moduleName":"i18n","syncRouteParams":true},
  parsePages: true,
  pages: {},
  skipSettingLocaleOnNavigate: false,
  onBeforeLanguageSwitch: () => {},
  onLanguageSwitched: () => null,
  normalizedLocales: [{"code":"en","name":"English","file":"en.js"},{"code":"fr","name":"Français","file":"fr.js"}],
  localeCodes: ["en","fr"],
  additionalMessages: [{"en":{"premium":{"user":{"isStaff":"Is staff","isGroupAdmin":"Is group admin","active":"Active","deactivated":"Deactivated"},"adminType":{"dashboard":"Dashboard","users":"Users","groups":"Groups","licenses":"Licenses"},"viewType":{"kanban":"Kanban"},"exporterType":{"json":"Export to JSON","xml":"Export to XML"}}},"fr":{"premium":{"user":{"isStaff":"Est collaborateur","isGroupAdmin":"Est l'administrateur du groupe","active":"Actif","deactivated":"Inactif"},"adminType":{"dashboard":"Statistiques","users":"Utilisateurs","groups":"Groupes","licenses":"Licences"},"viewType":{"kanban":"Kanban"},"exporterType":{"json":"Exporter vers JSON","xml":"Exporter vers XML"}}}}],
}

export const localeMessages = {
  'en.js': () => Promise.resolve(locale77427e78),
  'fr.js': () => Promise.resolve(locale77526775),
}
