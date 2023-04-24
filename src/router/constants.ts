import { RouteRecordRaw } from 'vue-router';
import generatedPages from '~pages'


export const pages = generatedPages.sort((next, pre) => Number(next.meta?.order || Infinity) - Number(pre.meta?.order || Infinity))

export const routesMap = pages.reduce((acc, route) => {
    acc[route.path] = {
        ...route,
    }
    return acc
}, {} as Record<string, RouteRecordRaw>)

export const routes:RouteRecordRaw[] = generatedPages 

export const ROUTE_HOME = routesMap['/dashboard']