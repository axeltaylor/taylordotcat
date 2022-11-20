import type { BlokProperties } from './BlokProperties'

export type Blok<T = BlokProperties> = {
  coverImgSrc?: string
  properties: T
  title: string
  id: string
}
