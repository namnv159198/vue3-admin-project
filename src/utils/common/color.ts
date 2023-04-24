import chroma from 'chroma-js'

/**
 * Brighter color
 * @param color - colour
 * @param deep - Effect level
 */
export function brightenColor(color: string, deep = 0.5) {
  return chroma(color).brighten(deep).hex()
}

/**
 * Darker color
 * @param color - colour
 * @param deep - Effect level
 */
export function darkenColor(color: string, deep = 0.5) {
  return chroma(color).darken(deep).hex()
}

/**
 * Give color plus transparency
 * @param color - colour
 * @param alpha - transparency
 */
export function addColorAlpha(color: string, alpha: number) {
  return chroma(color).alpha(alpha).hex()
}

/**
 * Color mix
 * @param firstColor - First color
 * @param secondColor - Second color
 * @param ratio - The second color proportion
 */
export function mixColor(firstColor: string, secondColor: string, ratio: number) {
  return chroma.mix(firstColor, secondColor, ratio).hex()
}
