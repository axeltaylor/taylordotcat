export function hexToRgb(hex: string): { r: number; g: number; b: number } {
  const hexWithoutHash = hex.replace('#', '')
  const hexNum = parseInt(hexWithoutHash, 16)
  const r = (hexNum >> 16) & 255
  const g = (hexNum >> 8) & 255
  const b = hexNum & 255
  return { r, g, b }
}

export function hexToCssRgba(hex: string, opacity = 1): string {
  const { r, g, b } = hexToRgb(hex)
  return `rgba(${r}, ${g}, ${b}, ${opacity})`
}
