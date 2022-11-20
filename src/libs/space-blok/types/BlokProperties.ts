export type BlokProperties = Record<
  string,
  | SelectBlokProperty
  | MultiSelectBlokProperty
  | DateBlokProperty
  | URLBlokProperty
  | StatusBlokProperty
>

export type SelectBlokProperty = string

export type MultiSelectBlokProperty = string[]

export type DateBlokProperty = Date

export type URLBlokProperty = string

export type StatusBlokProperty = string
