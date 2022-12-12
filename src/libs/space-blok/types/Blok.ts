import type { BlokContent } from './BlokContent'
import type { BlokProperties } from './BlokProperties'

export type Blok<T = BlokProperties> = {
  coverImgSrc?: string
  properties: T
  title: string
  id: string
  contents?: BlokContent[]
}
