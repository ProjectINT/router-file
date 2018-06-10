import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _5f982580 = () => import('../pages/vacancies.vue' /* webpackChunkName: "pages/vacancies" */).then(m => m.default || m)
const _6bdaa4e4 = () => import('../pages/docs.vue' /* webpackChunkName: "pages/docs" */).then(m => m.default || m)
const _215ef400 = () => import('../pages/offers.vue' /* webpackChunkName: "pages/offers" */).then(m => m.default || m)
const _5bc63308 = () => import('../pages/contacts.vue' /* webpackChunkName: "pages/contacts" */).then(m => m.default || m)
const _6a957aff = () => import('../pages/news/index.vue' /* webpackChunkName: "pages/news/index" */).then(m => m.default || m)
const _32baf304 = () => import('../pages/favorites.vue' /* webpackChunkName: "pages/favorites" */).then(m => m.default || m)
const _087a8e0e = () => import('../pages/admin/index.vue' /* webpackChunkName: "pages/admin/index" */).then(m => m.default || m)
const _06a377c2 = () => import('../pages/404.vue' /* webpackChunkName: "pages/404" */).then(m => m.default || m)
const _e3a8d798 = () => import('../pages/about.vue' /* webpackChunkName: "pages/about" */).then(m => m.default || m)
const _51d3bf85 = () => import('../pages/categories.vue' /* webpackChunkName: "pages/categories" */).then(m => m.default || m)
const _752b47e0 = () => import('../pages/admin/login.vue' /* webpackChunkName: "pages/admin/login" */).then(m => m.default || m)
const _03e2d622 = () => import('../pages/admin/housings/index.vue' /* webpackChunkName: "pages/admin/housings/index" */).then(m => m.default || m)
const _f07f9b32 = () => import('../pages/admin/shops/index.vue' /* webpackChunkName: "pages/admin/shops/index" */).then(m => m.default || m)
const _691a23a2 = () => import('../pages/admin/documents/index.vue' /* webpackChunkName: "pages/admin/documents/index" */).then(m => m.default || m)
const _48aa5926 = () => import('../pages/admin/apartments/index.vue' /* webpackChunkName: "pages/admin/apartments/index" */).then(m => m.default || m)
const _3aca1ce7 = () => import('../pages/admin/roles/index.vue' /* webpackChunkName: "pages/admin/roles/index" */).then(m => m.default || m)
const _4e225f61 = () => import('../pages/admin/banks/index.vue' /* webpackChunkName: "pages/admin/banks/index" */).then(m => m.default || m)
const _295cc5a0 = () => import('../pages/admin/slidersone/index.vue' /* webpackChunkName: "pages/admin/slidersone/index" */).then(m => m.default || m)
const _49d1864f = () => import('../pages/admin/applications/index.vue' /* webpackChunkName: "pages/admin/applications/index" */).then(m => m.default || m)
const _f739bda4 = () => import('../pages/admin/pages/index.vue' /* webpackChunkName: "pages/admin/pages/index" */).then(m => m.default || m)
const _70632462 = () => import('../pages/admin/settings/index.vue' /* webpackChunkName: "pages/admin/settings/index" */).then(m => m.default || m)
const _39613c8b = () => import('../pages/admin/menu/index.vue' /* webpackChunkName: "pages/admin/menu/index" */).then(m => m.default || m)
const _0a5a0283 = () => import('../pages/admin/offers/index.vue' /* webpackChunkName: "pages/admin/offers/index" */).then(m => m.default || m)
const _3ef4a848 = () => import('../pages/admin/sliders/index.vue' /* webpackChunkName: "pages/admin/sliders/index" */).then(m => m.default || m)
const _0c4553fa = () => import('../pages/admin/vacancies/index.vue' /* webpackChunkName: "pages/admin/vacancies/index" */).then(m => m.default || m)
const _205bac1b = () => import('../pages/admin/residentials/index.vue' /* webpackChunkName: "pages/admin/residentials/index" */).then(m => m.default || m)
const _8eeb7ef4 = () => import('../pages/admin/map/index.vue' /* webpackChunkName: "pages/admin/map/index" */).then(m => m.default || m)
const _36b470ff = () => import('../pages/admin/news/index.vue' /* webpackChunkName: "pages/admin/news/index" */).then(m => m.default || m)
const _f6c07ffe = () => import('../pages/admin/me.vue' /* webpackChunkName: "pages/admin/me" */).then(m => m.default || m)
const _8b1e24ae = () => import('../pages/admin/reports/index.vue' /* webpackChunkName: "pages/admin/reports/index" */).then(m => m.default || m)
const _5b26e42f = () => import('../pages/admin/employees/index.vue' /* webpackChunkName: "pages/admin/employees/index" */).then(m => m.default || m)
const _a3788b1c = () => import('../pages/admin/users/index.vue' /* webpackChunkName: "pages/admin/users/index" */).then(m => m.default || m)
const _2031580f = () => import('../pages/admin/pages/docs.vue' /* webpackChunkName: "pages/admin/pages/docs" */).then(m => m.default || m)
const _64ab4669 = () => import('../pages/admin/pages/about.vue' /* webpackChunkName: "pages/admin/pages/about" */).then(m => m.default || m)
const _04d034aa = () => import('../pages/admin/residentials/add.vue' /* webpackChunkName: "pages/admin/residentials/add" */).then(m => m.default || m)
const _6847d27d = () => import('../pages/admin/pages/add.vue' /* webpackChunkName: "pages/admin/pages/add" */).then(m => m.default || m)
const _270966e6 = () => import('../pages/admin/pages/main.vue' /* webpackChunkName: "pages/admin/pages/main" */).then(m => m.default || m)
const _3a05087c = () => import('../pages/admin/apartments/add.vue' /* webpackChunkName: "pages/admin/apartments/add" */).then(m => m.default || m)
const _055ad077 = () => import('../pages/admin/applications/_id.vue' /* webpackChunkName: "pages/admin/applications/_id" */).then(m => m.default || m)
const _07039716 = () => import('../pages/admin/pages/_id.vue' /* webpackChunkName: "pages/admin/pages/_id" */).then(m => m.default || m)
const _b8e80d7a = () => import('../pages/admin/residentials/_id.vue' /* webpackChunkName: "pages/admin/residentials/_id" */).then(m => m.default || m)
const _4e7e65d6 = () => import('../pages/admin/apartments/_id.vue' /* webpackChunkName: "pages/admin/apartments/_id" */).then(m => m.default || m)
const _7801b15a = () => import('../pages/admin/users/_id.vue' /* webpackChunkName: "pages/admin/users/_id" */).then(m => m.default || m)
const _5f3bdcfc = () => import('../pages/offersdetail/_id.vue' /* webpackChunkName: "pages/offersdetail/_id" */).then(m => m.default || m)
const _26f43127 = () => import('../pages/news/_id.vue' /* webpackChunkName: "pages/news/_id" */).then(m => m.default || m)
const _ae04f97a = () => import('../pages/residentials/_id.vue' /* webpackChunkName: "pages/residentials/_id" */).then(m => m.default || m)
const _0657d85d = () => import('../pages/residentials/_idres/reports.vue' /* webpackChunkName: "pages/residentials/_idres/reports" */).then(m => m.default || m)
const _39771dcc = () => import('../pages/residentials/_idres/description.vue' /* webpackChunkName: "pages/residentials/_idres/description" */).then(m => m.default || m)
const _5ad5918d = () => import('../pages/residentials/_idres/docs.vue' /* webpackChunkName: "pages/residentials/_idres/docs" */).then(m => m.default || m)
const _1624d853 = () => import('../pages/residentials/_idres/apartments.vue' /* webpackChunkName: "pages/residentials/_idres/apartments" */).then(m => m.default || m)
const _bdedc78e = () => import('../pages/residentials/_idres/condition.vue' /* webpackChunkName: "pages/residentials/_idres/condition" */).then(m => m.default || m)
const _e4266f0c = () => import('../pages/residentials/_idres/map.vue' /* webpackChunkName: "pages/residentials/_idres/map" */).then(m => m.default || m)
const _7526919e = () => import('../pages/filter/_.vue' /* webpackChunkName: "pages/filter/_" */).then(m => m.default || m)
const _524e1669 = () => import('../pages/old_offersdetail.vue' /* webpackChunkName: "pages/old_offersdetail" */).then(m => m.default || m)
const _6414f361 = () => import('../pages/old_index.vue' /* webpackChunkName: "pages/old_index" */).then(m => m.default || m)
const _0ce5eba7 = () => import('../pages/old_newsitem.vue' /* webpackChunkName: "pages/old_newsitem" */).then(m => m.default || m)
const _a439220e = () => import('../pages/index.vue' /* webpackChunkName: "pages/index" */).then(m => m.default || m)



const scrollBehavior = function _function(to, from, savedPosition) {
      if (to.path === '/favorites') {
        return { x: 0, y: 0 }
      } else {
        return false
      }
    }


export function createRouter () {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,
    routes: [
		{
			path: "/vacancies",
			component: _5f982580,
			name: "vacancies"
		},
		{
			path: "/docs",
			component: _6bdaa4e4,
			name: "docs"
		},
		{
			path: "/offers",
			component: _215ef400,
			name: "offers"
		},
		{
			path: "/contacts",
			component: _5bc63308,
			name: "contacts"
		},
		{
			path: "/news",
			component: _6a957aff,
			name: "news"
		},
		{
			path: "/favorites",
			component: _32baf304,
			name: "favorites"
		},
		{
			path: "/admin",
			component: _087a8e0e,
			name: "admin"
		},
		{
			path: "/404",
			component: _06a377c2,
			name: "404"
		},
		{
			path: "/about",
			component: _e3a8d798,
			name: "about"
		},
		{
			path: "/categories",
			component: _51d3bf85,
			name: "categories"
		},
		{
			path: "/admin/login",
			component: _752b47e0,
			name: "admin-login"
		},
		{
			path: "/admin/housings",
			component: _03e2d622,
			name: "admin-housings"
		},
		{
			path: "/admin/shops",
			component: _f07f9b32,
			name: "admin-shops"
		},
		{
			path: "/admin/documents",
			component: _691a23a2,
			name: "admin-documents"
		},
		{
			path: "/admin/apartments",
			component: _48aa5926,
			name: "admin-apartments"
		},
		{
			path: "/admin/roles",
			component: _3aca1ce7,
			name: "admin-roles"
		},
		{
			path: "/admin/banks",
			component: _4e225f61,
			name: "admin-banks"
		},
		{
			path: "/admin/slidersone",
			component: _295cc5a0,
			name: "admin-slidersone"
		},
		{
			path: "/admin/applications",
			component: _49d1864f,
			name: "admin-applications"
		},
		{
			path: "/admin/pages",
			component: _f739bda4,
			name: "admin-pages"
		},
		{
			path: "/admin/settings",
			component: _70632462,
			name: "admin-settings"
		},
		{
			path: "/admin/menu",
			component: _39613c8b,
			name: "admin-menu"
		},
		{
			path: "/admin/offers",
			component: _0a5a0283,
			name: "admin-offers"
		},
		{
			path: "/admin/sliders",
			component: _3ef4a848,
			name: "admin-sliders"
		},
		{
			path: "/admin/vacancies",
			component: _0c4553fa,
			name: "admin-vacancies"
		},
		{
			path: "/admin/residentials",
			component: _205bac1b,
			name: "admin-residentials"
		},
		{
			path: "/admin/map",
			component: _8eeb7ef4,
			name: "admin-map"
		},
		{
			path: "/admin/news",
			component: _36b470ff,
			name: "admin-news"
		},
		{
			path: "/admin/me",
			component: _f6c07ffe,
			name: "admin-me"
		},
		{
			path: "/admin/reports",
			component: _8b1e24ae,
			name: "admin-reports"
		},
		{
			path: "/admin/employees",
			component: _5b26e42f,
			name: "admin-employees"
		},
		{
			path: "/admin/users",
			component: _a3788b1c,
			name: "admin-users"
		},
		{
			path: "/admin/pages/docs",
			component: _2031580f,
			name: "admin-pages-docs"
		},
		{
			path: "/admin/pages/about",
			component: _64ab4669,
			name: "admin-pages-about"
		},
		{
			path: "/admin/residentials/add",
			component: _04d034aa,
			name: "admin-residentials-add"
		},
		{
			path: "/admin/pages/add",
			component: _6847d27d,
			name: "admin-pages-add"
		},
		{
			path: "/admin/pages/main",
			component: _270966e6,
			name: "admin-pages-main"
		},
		{
			path: "/admin/apartments/add",
			component: _3a05087c,
			name: "admin-apartments-add"
		},
		{
			path: "/admin/applications/:id",
			component: _055ad077,
			name: "admin-applications-id"
		},
		{
			path: "/admin/pages/:id",
			component: _07039716,
			name: "admin-pages-id"
		},
		{
			path: "/admin/residentials/:id",
			component: _b8e80d7a,
			name: "admin-residentials-id"
		},
		{
			path: "/admin/apartments/:id",
			component: _4e7e65d6,
			name: "admin-apartments-id"
		},
		{
			path: "/admin/users/:id",
			component: _7801b15a,
			name: "admin-users-id"
		},
		{
			path: "/offersdetail/:id?",
			component: _5f3bdcfc,
			name: "offersdetail-id"
		},
		{
			path: "/news/:id",
			component: _26f43127,
			name: "news-id"
		},
		{
			path: "/residentials/:id?",
			component: _ae04f97a,
			name: "residentials-id"
		},
		{
			path: "/residentials/:idres?/reports",
			component: _0657d85d,
			name: "residentials-idres-reports"
		},
		{
			path: "/residentials/:idres?/description",
			component: _39771dcc,
			name: "residentials-idres-description"
		},
		{
			path: "/residentials/:idres?/docs",
			component: _5ad5918d,
			name: "residentials-idres-docs"
		},
		{
			path: "/residentials/:idres?/apartments",
			component: _1624d853,
			name: "residentials-idres-apartments"
		},
		{
			path: "/residentials/:idres?/condition",
			component: _bdedc78e,
			name: "residentials-idres-condition"
		},
		{
			path: "/residentials/:idres?/map",
			component: _e4266f0c,
			name: "residentials-idres-map"
		},
		{
			path: "/filter/*",
			component: _7526919e,
			name: "filter-all"
		},
		{
			path: "/old:offersdetail",
			component: _524e1669,
			name: "oldoffersdetail"
		},
		{
			path: "/old:index",
			component: _6414f361,
			name: "oldindex"
		},
		{
			path: "/old:newsitem",
			component: _0ce5eba7,
			name: "oldnewsitem"
		},
		{
			path: "/",
			component: _a439220e,
			name: "index"
		}
    ],
    
    
    fallback: false
  })
}
