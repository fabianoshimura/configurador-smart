import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _97edb5c8 = () => interopDefault(import('../modules/core/pages/index.vue' /* webpackChunkName: "" */))
const _7db0c833 = () => interopDefault(import('../modules/core/pages/login.vue' /* webpackChunkName: "" */))
const _f67ba984 = () => interopDefault(import('../modules/core/pages/signup.vue' /* webpackChunkName: "" */))
const _bd69aff8 = () => interopDefault(import('../modules/core/pages/forgotPassword.vue' /* webpackChunkName: "" */))
const _2bd7cb54 = () => interopDefault(import('../modules/core/pages/resetPassword.vue' /* webpackChunkName: "" */))
const _62798cde = () => interopDefault(import('../modules/core/pages/dashboard.vue' /* webpackChunkName: "" */))
const _a6210b7c = () => interopDefault(import('../modules/core/pages/groupInvitation.vue' /* webpackChunkName: "" */))
const _6815d189 = () => interopDefault(import('../modules/core/pages/admin/settings.vue' /* webpackChunkName: "" */))
const _54bdc571 = () => interopDefault(import('../modules/core/pages/styleGuide.vue' /* webpackChunkName: "" */))
const _3c2f9ac5 = () => interopDefault(import('../modules/core/pages/_health.vue' /* webpackChunkName: "" */))
const _5dc2e574 = () => interopDefault(import('../modules/database/pages/table.vue' /* webpackChunkName: "" */))

const _69136c0a = () => interopDefault(import('../modules/database/pages/APIDocs.vue' /* webpackChunkName: "" */))
const _c2a131d4 = () => interopDefault(import('../modules/database/pages/APIDocsDatabase.vue' /* webpackChunkName: "" */))
const _e34194e4 = () => interopDefault(import('../modules/database/pages/form.vue' /* webpackChunkName: "" */))
const _62316ede = () => interopDefault(import('../modules/database/pages/publicGridView.vue' /* webpackChunkName: "" */))
const _39863ebe = () => interopDefault(import('../../premium/web-frontend/modules/baserow_premium/pages/admin/dashboard.vue' /* webpackChunkName: "" */))
const _5f63a132 = () => interopDefault(import('../../premium/web-frontend/modules/baserow_premium/pages/admin/users.vue' /* webpackChunkName: "" */))
const _48d3701a = () => interopDefault(import('../../premium/web-frontend/modules/baserow_premium/pages/admin/groups.vue' /* webpackChunkName: "" */))
const _223b7818 = () => interopDefault(import('../../premium/web-frontend/modules/baserow_premium/pages/admin/licenses.vue' /* webpackChunkName: "" */))
const _4b4ef66b = () => interopDefault(import('../../premium/web-frontend/modules/baserow_premium/pages/admin/license.vue' /* webpackChunkName: "" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "",
    component: _97edb5c8,
    name: "index"
  }, {
    path: "/login",
    component: _7db0c833,
    name: "login"
  }, {
    path: "/signup",
    component: _f67ba984,
    name: "signup"
  }, {
    path: "/forgot-password",
    component: _bd69aff8,
    name: "forgot-password"
  }, {
    path: "/reset-password/:token",
    component: _2bd7cb54,
    name: "reset-password"
  }, {
    path: "/dashboard",
    component: _62798cde,
    name: "dashboard"
  }, {
    path: "/group-invitation/:token",
    component: _a6210b7c,
    name: "group-invitation"
  }, {
    path: "/admin/settings",
    component: _6815d189,
    name: "admin-settings"
  }, {
    path: "/style-guide",
    component: _54bdc571,
    name: "style-guide"
  }, {
    path: "/_health",
    component: _3c2f9ac5,
    name: "health-check"
  }, {
    path: "/database/:databaseId/table/:tableId/:viewId?",
    component: _5dc2e574,
    props: function(route) {
    // @TODO figure out why the route param is empty on the server side.
    const p = { ...route.params };
    p.databaseId = parseInt(p.databaseId);
    p.tableId = parseInt(p.tableId);
    p.viewId = p.viewId ? parseInt(p.viewId) : null;
    return p;
  },
    name: "database-table"
  }, {
    path: "/api/docs",
    redirect: "/api-docs"
  }, {
    path: "/api/docs/database/:databaseId",
    redirect: "/api-docs/database/:databaseId"
  }, {
    path: "/api-docs",
    component: _69136c0a,
    alias: "/api/docs",
    name: "database-api-docs"
  }, {
    path: "/api-docs/database/:databaseId",
    component: _c2a131d4,
    name: "database-api-docs-detail"
  }, {
    path: "/form/:slug",
    component: _e34194e4,
    name: "database-table-form"
  }, {
    path: "/public/grid/:slug",
    component: _62316ede,
    name: "database-public-grid-view"
  }, {
    path: "/admin/dashboard",
    component: _39863ebe,
    name: "admin-dashboard"
  }, {
    path: "/admin/users",
    component: _5f63a132,
    name: "admin-users"
  }, {
    path: "/admin/groups",
    component: _48d3701a,
    name: "admin-groups"
  }, {
    path: "/admin/licenses",
    component: _223b7818,
    name: "admin-licenses"
  }, {
    path: "/admin/license/:id",
    component: _4b4ef66b,
    name: "admin-license"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
