

interface AppState {
    // scrollElId: string;
    contentFull: boolean;
    // disableMainXScroll: boolean;
    // reloadFlag: boolean;
    // settingDrawerVisible: boolean;
    siderCollapse: boolean;
    // mixSiderFixed: boolean;
}


export const useAppStore = defineStore('app-store',() =>  {
    const appState = reactive<AppState>({
        contentFull: false,
        siderCollapse: false,
    })

    return {...toRefs(appState) }
})