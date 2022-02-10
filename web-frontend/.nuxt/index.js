import Vue from 'vue'
import Vuex from 'vuex'
import Meta from 'vue-meta'
import ClientOnly from 'vue-client-only'
import NoSsr from 'vue-no-ssr'
import { createRouter } from './router.js'
import NuxtChild from './components/nuxt-child.js'
import NuxtError from '~/.nuxt/layouts.error.6668f097.vue'
import Nuxt from './components/nuxt.js'
import App from './App.js'
import { setContext, getLocation, getRouteData, normalizeError } from './utils'
import { createStore } from './store.js'

/* Plugins */

import nuxt_plugin_databasemiddlewarea05f2004_6d802609 from 'nuxt_plugin_databasemiddlewarea05f2004_6d802609' // Source: ./database.middleware.a05f2004.js (mode: 'all')
import nuxt_plugin_coremiddleware560ebda2_1b7e7efe from 'nuxt_plugin_coremiddleware560ebda2_1b7e7efe' // Source: ./core.middleware.560ebda2.js (mode: 'all')
import nuxt_plugin_pluginsvueDatepicker62cb7a72_7fc0a90c from 'nuxt_plugin_pluginsvueDatepicker62cb7a72_7fc0a90c' // Source: ./plugins.vueDatepicker.62cb7a72.js (mode: 'client')
import nuxt_plugin_pluginsvuelidate37f2b598_4a5b82b2 from 'nuxt_plugin_pluginsvuelidate37f2b598_4a5b82b2' // Source: ./plugins.vuelidate.37f2b598.js (mode: 'all')
import nuxt_plugin_pluginsglobale993087c_4d84c99b from 'nuxt_plugin_pluginsglobale993087c_4d84c99b' // Source: ./plugins.global.e993087c.js (mode: 'all')
import nuxt_plugin_pluginutils_2d764ff7 from 'nuxt_plugin_pluginutils_2d764ff7' // Source: ./nuxt-i18n/plugin.utils.js (mode: 'all')
import nuxt_plugin_pluginrouting_5f22bb82 from 'nuxt_plugin_pluginrouting_5f22bb82' // Source: ./nuxt-i18n/plugin.routing.js (mode: 'all')
import nuxt_plugin_pluginmain_5ae1af2d from 'nuxt_plugin_pluginmain_5ae1af2d' // Source: ./nuxt-i18n/plugin.main.js (mode: 'all')
import nuxt_plugin_nuxtenv_20856fde from 'nuxt_plugin_nuxtenv_20856fde' // Source: ./nuxt-env.js (mode: 'all')
import nuxt_plugin_cookieuniversalnuxt_0128966c from 'nuxt_plugin_cookieuniversalnuxt_0128966c' // Source: ./cookie-universal-nuxt.js (mode: 'all')
import nuxt_plugin_axios_77dcfec4 from 'nuxt_plugin_axios_77dcfec4' // Source: ./axios.js (mode: 'all')
import nuxt_plugin_coreplugin1596bee1_3faba158 from 'nuxt_plugin_coreplugin1596bee1_3faba158' // Source: ./core.plugin.1596bee1.js (mode: 'all')
import nuxt_plugin_pluginsi18n92442a32_59e9b471 from 'nuxt_plugin_pluginsi18n92442a32_59e9b471' // Source: ./plugins.i18n.92442a32.js (mode: 'all')
import nuxt_plugin_pluginsclientHandler741d148a_03f9631b from 'nuxt_plugin_pluginsclientHandler741d148a_03f9631b' // Source: ./plugins.clientHandler.741d148a.js (mode: 'all')
import nuxt_plugin_pluginsrealTimeHandler6d8eddca_34b14cfe from 'nuxt_plugin_pluginsrealTimeHandler6d8eddca_34b14cfe' // Source: ./plugins.realTimeHandler.6d8eddca.js (mode: 'all')
import nuxt_plugin_pluginsauthf1ff39c6_21cdbcc4 from 'nuxt_plugin_pluginsauthf1ff39c6_21cdbcc4' // Source: ./plugins.auth.f1ff39c6.js (mode: 'all')
import nuxt_plugin_databaseplugin16300186_64da9e8b from 'nuxt_plugin_databaseplugin16300186_64da9e8b' // Source: ./database.plugin.16300186.js (mode: 'all')
import nuxt_plugin_baserowpremiumplugina83aa5fe_4257fb94 from 'nuxt_plugin_baserowpremiumplugina83aa5fe_4257fb94' // Source: ./baserow_premium.plugin.a83aa5fe.js (mode: 'all')

// Component: <ClientOnly>
Vue.component(ClientOnly.name, ClientOnly)

// TODO: Remove in Nuxt 3: <NoSsr>
Vue.component(NoSsr.name, {
  ...NoSsr,
  render (h, ctx) {
    if (process.client && !NoSsr._warned) {
      NoSsr._warned = true

      console.warn('<no-ssr> has been deprecated and will be removed in Nuxt 3, please use <client-only> instead')
    }
    return NoSsr.render(h, ctx)
  }
})

// Component: <NuxtChild>
Vue.component(NuxtChild.name, NuxtChild)
Vue.component('NChild', NuxtChild)

// Component NuxtLink is imported in server.js or client.js

// Component: <Nuxt>
Vue.component(Nuxt.name, Nuxt)

Object.defineProperty(Vue.prototype, '$nuxt', {
  get() {
    const globalNuxt = this.$root.$options.$nuxt
    if (process.client && !globalNuxt && typeof window !== 'undefined') {
      return window.$nuxt
    }
    return globalNuxt
  },
  configurable: true
})

Vue.use(Meta, {"keyName":"head","attribute":"data-n-head","ssrAttribute":"data-n-head-ssr","tagIDKeyName":"hid"})

const defaultTransition = {"name":"page","mode":"out-in","appear":false,"appearClass":"appear","appearActiveClass":"appear-active","appearToClass":"appear-to"}

const originalRegisterModule = Vuex.Store.prototype.registerModule

function registerModule (path, rawModule, options = {}) {
  const preserveState = process.client && (
    Array.isArray(path)
      ? !!path.reduce((namespacedState, path) => namespacedState && namespacedState[path], this.state)
      : path in this.state
  )
  return originalRegisterModule.call(this, path, rawModule, { preserveState, ...options })
}

async function createApp(ssrContext, config = {}) {
  const router = await createRouter(ssrContext, config)

  const store = createStore(ssrContext)
  // Add this.$router into store actions/mutations
  store.$router = router

  // Fix SSR caveat https://github.com/nuxt/nuxt.js/issues/3757#issuecomment-414689141
  store.registerModule = registerModule

  // Create Root instance

  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.
  const app = {
    head: {"title":"Baserow","titleTemplate":"%s \u002F\u002F Baserow","meta":[{"charset":"utf-8"},{"name":"viewport","content":"width=device-width, initial-scale=1"}],"link":[{"rel":"icon","type":"image\u002Fpng","href":"\u002Fimg\u002Ffavicon_16.png","sizes":"16x16"},{"rel":"icon","type":"image\u002Fpng","href":"\u002Fimg\u002Ffavicon_32.png","sizes":"32x32"},{"rel":"icon","type":"image\u002Fpng","href":"\u002Fimg\u002Ffavicon_48.png","sizes":"64x64"},{"rel":"icon","type":"image\u002Fpng","href":"\u002Fimg\u002Ffavicon_192.png","sizes":"192x192"}],"style":[],"script":[]},

    store,
    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],
      setTransitions (transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions]
        }
        transitions = transitions.map((transition) => {
          if (!transition) {
            transition = defaultTransition
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, { name: transition })
          } else {
            transition = Object.assign({}, defaultTransition, transition)
          }
          return transition
        })
        this.$options.nuxt.transitions = transitions
        return transitions
      },

      err: null,
      dateErr: null,
      error (err) {
        err = err || null
        app.context._errored = Boolean(err)
        err = err ? normalizeError(err) : null
        let nuxt = app.nuxt // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207
        if (this) {
          nuxt = this.nuxt || this.$options.nuxt
        }
        nuxt.dateErr = Date.now()
        nuxt.err = err
        // Used in src/server.js
        if (ssrContext) {
          ssrContext.nuxt.error = err
        }
        return err
      }
    },
    ...App
  }

  // Make app available into store via this.app
  store.app = app

  const next = ssrContext ? ssrContext.next : location => app.router.push(location)
  // Resolve route
  let route
  if (ssrContext) {
    route = router.resolve(ssrContext.url).route
  } else {
    const path = getLocation(router.options.base, router.options.mode)
    route = router.resolve(path).route
  }

  // Set context to app.context
  await setContext(app, {
    store,
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
    ssrContext
  })

  function inject(key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided')
    }
    if (value === undefined) {
      throw new Error(`inject('${key}', value) has no value provided`)
    }

    key = '$' + key
    // Add into app
    app[key] = value
    // Add into context
    if (!app.context[key]) {
      app.context[key] = value
    }

    // Add into store
    store[key] = app[key]

    // Check if plugin not already installed
    const installKey = '__nuxt_' + key + '_installed__'
    if (Vue[installKey]) {
      return
    }
    Vue[installKey] = true
    // Call Vue.use() to install the plugin into vm
    Vue.use(() => {
      if (!Object.prototype.hasOwnProperty.call(Vue.prototype, key)) {
        Object.defineProperty(Vue.prototype, key, {
          get () {
            return this.$root.$options[key]
          }
        })
      }
    })
  }

  // Inject runtime config as $config
  inject('config', config)

  if (process.client) {
    // Replace store state before plugins execution
    if (window.__NUXT__ && window.__NUXT__.state) {
      store.replaceState(window.__NUXT__.state)
    }
  }

  // Add enablePreview(previewData = {}) in context for plugins
  if (process.static && process.client) {
    app.context.enablePreview = function (previewData = {}) {
      app.previewData = Object.assign({}, previewData)
      inject('preview', previewData)
    }
  }
  // Plugin execution

  if (typeof nuxt_plugin_databasemiddlewarea05f2004_6d802609 === 'function') {
    await nuxt_plugin_databasemiddlewarea05f2004_6d802609(app.context, inject)
  }

  if (typeof nuxt_plugin_coremiddleware560ebda2_1b7e7efe === 'function') {
    await nuxt_plugin_coremiddleware560ebda2_1b7e7efe(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_pluginsvueDatepicker62cb7a72_7fc0a90c === 'function') {
    await nuxt_plugin_pluginsvueDatepicker62cb7a72_7fc0a90c(app.context, inject)
  }

  if (typeof nuxt_plugin_pluginsvuelidate37f2b598_4a5b82b2 === 'function') {
    await nuxt_plugin_pluginsvuelidate37f2b598_4a5b82b2(app.context, inject)
  }

  if (typeof nuxt_plugin_pluginsglobale993087c_4d84c99b === 'function') {
    await nuxt_plugin_pluginsglobale993087c_4d84c99b(app.context, inject)
  }

  if (typeof nuxt_plugin_pluginutils_2d764ff7 === 'function') {
    await nuxt_plugin_pluginutils_2d764ff7(app.context, inject)
  }

  if (typeof nuxt_plugin_pluginrouting_5f22bb82 === 'function') {
    await nuxt_plugin_pluginrouting_5f22bb82(app.context, inject)
  }

  if (typeof nuxt_plugin_pluginmain_5ae1af2d === 'function') {
    await nuxt_plugin_pluginmain_5ae1af2d(app.context, inject)
  }

  if (typeof nuxt_plugin_nuxtenv_20856fde === 'function') {
    await nuxt_plugin_nuxtenv_20856fde(app.context, inject)
  }

  if (typeof nuxt_plugin_cookieuniversalnuxt_0128966c === 'function') {
    await nuxt_plugin_cookieuniversalnuxt_0128966c(app.context, inject)
  }

  if (typeof nuxt_plugin_axios_77dcfec4 === 'function') {
    await nuxt_plugin_axios_77dcfec4(app.context, inject)
  }

  if (typeof nuxt_plugin_coreplugin1596bee1_3faba158 === 'function') {
    await nuxt_plugin_coreplugin1596bee1_3faba158(app.context, inject)
  }

  if (typeof nuxt_plugin_pluginsi18n92442a32_59e9b471 === 'function') {
    await nuxt_plugin_pluginsi18n92442a32_59e9b471(app.context, inject)
  }

  if (typeof nuxt_plugin_pluginsclientHandler741d148a_03f9631b === 'function') {
    await nuxt_plugin_pluginsclientHandler741d148a_03f9631b(app.context, inject)
  }

  if (typeof nuxt_plugin_pluginsrealTimeHandler6d8eddca_34b14cfe === 'function') {
    await nuxt_plugin_pluginsrealTimeHandler6d8eddca_34b14cfe(app.context, inject)
  }

  if (typeof nuxt_plugin_pluginsauthf1ff39c6_21cdbcc4 === 'function') {
    await nuxt_plugin_pluginsauthf1ff39c6_21cdbcc4(app.context, inject)
  }

  if (typeof nuxt_plugin_databaseplugin16300186_64da9e8b === 'function') {
    await nuxt_plugin_databaseplugin16300186_64da9e8b(app.context, inject)
  }

  if (typeof nuxt_plugin_baserowpremiumplugina83aa5fe_4257fb94 === 'function') {
    await nuxt_plugin_baserowpremiumplugina83aa5fe_4257fb94(app.context, inject)
  }

  // Lock enablePreview in context
  if (process.static && process.client) {
    app.context.enablePreview = function () {
      console.warn('You cannot call enablePreview() outside a plugin.')
    }
  }

  // Wait for async component to be resolved first
  await new Promise((resolve, reject) => {
    const { route } = router.resolve(app.context.route.fullPath)
    // Ignore 404s rather than blindly replacing URL
    if (!route.matched.length && process.client) {
      return resolve()
    }
    router.replace(route, resolve, (err) => {
      // https://github.com/vuejs/vue-router/blob/v3.4.3/src/util/errors.js
      if (!err._isRouter) return reject(err)
      if (err.type !== 2 /* NavigationFailureType.redirected */) return resolve()

      // navigated to a different route in router guard
      const unregister = router.afterEach(async (to, from) => {
        if (process.server && ssrContext && ssrContext.url) {
          ssrContext.url = to.fullPath
        }
        app.context.route = await getRouteData(to)
        app.context.params = to.params || {}
        app.context.query = to.query || {}
        unregister()
        resolve()
      })
    })
  })

  return {
    store,
    app,
    router
  }
}

export { createApp, NuxtError }
