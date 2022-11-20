import type {
  PageObjectResponse,
  QueryDatabaseResponse,
} from '@notionhq/client/build/src/api-endpoints'

import type { Blok } from '../types/Blok'
import { mapBlokProps } from './mapBlokProps'

export const mapBlok = async <T>(
  response: QueryDatabaseResponse
): Promise<Blok<T>[]> => {
  const responseResults = (response.results as PageObjectResponse[]) || []

  const blokList: Blok<T>[] = responseResults.map((notionPage) => {
    const notionProperties = Object.values(notionPage.properties)

    const propTitle = notionProperties.find((prop) => prop.type === 'title')
    let title = ''
    if (propTitle?.type === 'title') {
      title = propTitle.title.reduce((res, val) => res + val.plain_text, '')
    }

    const coverImgSrc =
      notionPage.cover?.type === 'external'
        ? notionPage.cover.external.url
        : notionPage.cover?.file.url

    const properties = mapBlokProps<T>(notionPage.properties)

    return {
      id: notionPage.id,
      title,
      coverImgSrc,
      properties,
    }
  })

  return blokList
}
