interface OtherColor {
    /** information */
    info: string
    /** success */
    success: string
    /** warn */
    warning: string
    /** error */
    error: string
}

export interface ThemeSettings {
    /** Dark color mode */
    darkMode: boolean
    /** Theme color */
    themeColor: string
    // /** other colours */
    otherColor: OtherColor
}