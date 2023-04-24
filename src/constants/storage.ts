import { EnumStorageKey } from '@/enum'

export const __IS_DARK__ = useStorage(EnumStorageKey.__IS_DARK__, false, window.parent?.localStorage || localStorage)