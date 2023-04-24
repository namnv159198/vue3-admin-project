import type { RouteRecordRaw } from 'vue-router'
import { NIcon } from 'naive-ui'
import { pages } from '../constants'
import type { GlobalMenuOption } from '@/interface'

/** whether the route is used as a menu */
function asMenu(route: RouteRecordRaw) {
    return !route.meta?.notAsMenu
}

/** Add optional properties to the menu */
function addPartialProps(menuItem: GlobalMenuOption, icon?: string, children?: GlobalMenuOption[]) {
    const item = { ...menuItem }
    if (icon) {
        Object.assign(item, {
            icon: () => (
                <NIcon>
                    <div class={icon}></div>
                </NIcon>
            ),
        })
    }

    if (children)
        Object.assign(item, { children })

    return item
}

export function transformRouteToMenu(routes: RouteRecordRaw[], pathParent?: string) {
    const globalMenu: GlobalMenuOption[] = []
    //   const $t = window.$t
    routes.forEach((route) => {
        const { name, path, meta } = route
        const routeName = name as string
        let menuChildren: GlobalMenuOption[] | undefined
        if (route.children)
            menuChildren = transformRouteToMenu(route.children as RouteRecordRaw[], path)

        const menuItem: GlobalMenuOption = addPartialProps(
            {
                key: routeName,
                label: meta?.title ?? routeName,
                routeName,
                routePath: pathParent ? `${pathParent}/${path}` : path,
            },
            meta?.icon,
            menuChildren,
        )
        if (asMenu(route)) {
            globalMenu.push(menuItem)
        }

        else if (menuChildren)
            globalMenu.push(...menuChildren)
    })
    return globalMenu
}
/** menu */
export const menus = transformRouteToMenu(pages)
