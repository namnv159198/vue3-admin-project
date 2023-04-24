import type { Router } from 'vue-router'
import { handlePagePermission } from './permission'
import { useAppStore } from '@/stores'

/**
 * Routing guard function
 * @param router - Routing instance
 */
export function createRouterGuide(router: Router) {
//   const { resetScrollBehavior } = useAppStore()

  router.beforeEach((to, from, next) => {
    window.$loadingBar?.start()
    // handlePagePermission(to, from, next)
    next()
  })
  router.afterEach((to) => {
    useTitle(window.$t(`Menu.${to.meta.title}`) as string)
    window.$loadingBar?.finish()
    // resetScrollBehavior()
  })
}
