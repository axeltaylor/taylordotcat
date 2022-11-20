import type {
  DateBlokProperty,
  MultiSelectBlokProperty,
  SelectBlokProperty,
  StatusBlokProperty,
  URLBlokProperty,
} from '@libs/space-blok'

export type BlogBlokProps = {
  status: StatusBlokProperty
  type: SelectBlokProperty
  link: URLBlokProperty
  tags: MultiSelectBlokProperty
  publishedAt: DateBlokProperty
}
