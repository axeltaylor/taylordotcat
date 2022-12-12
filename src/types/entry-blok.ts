import type {
  DateBlokProperty,
  MultiSelectBlokProperty,
  SelectBlokProperty,
  StatusBlokProperty,
  URLBlokProperty,
} from '@libs/space-blok'

export type EntryBlokProps = {
  status: StatusBlokProperty
  type: SelectBlokProperty
  link: URLBlokProperty
  tags: MultiSelectBlokProperty
  publishedAt: DateBlokProperty
}
