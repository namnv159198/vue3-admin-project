import type { RouteLocationNormalizedLoaded } from 'vue-router'
import type { MenuOption } from 'naive-ui'
import type { EnumLoginModule } from '@/enum'

/** Menu item configuration */
export type GlobalMenuOption = MenuOption & {
  routeName: string
  routePath: string
}

export type MultiTabRoute = Partial<RouteLocationNormalizedLoaded> & {
  path: string
  fullPath: string
}
export interface MultiTab {
  routes: MultiTabRoute[]
  activeFullPath: string
  activePath: string
}

/** Login module */
export type LoginModuleType = keyof typeof EnumLoginModule
