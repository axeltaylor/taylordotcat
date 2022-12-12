import { Client } from '@notionhq/client'
import type { BlockObjectResponse } from '@notionhq/client/build/src/api-endpoints'

import { mapBlok } from './mappers/mapBlok'
import { mapBlokContent } from './mappers/mapBlokContent'
import { mapNotionSort } from './mappers/mapNotionSort'
import type { Blok } from './types/Blok'
import type { BlokContent, BlokContentList } from './types/BlokContent'
import { BlokContentType } from './types/BlokContent'
import type { BlokSort } from './types/BlokSort'

class SpaceBlok {
  private notion: Client

  constructor(token: string) {
    this.notion = new Client({ auth: token })
  }

  public async getDbEntries<T>(
    dbId: string,
    params?: {
      filter?: Parameters<Client['databases']['query']>[0]['filter']
      sort?: BlokSort<T>
    }
  ): Promise<Blok<T>[]> {
    try {
      const response = await this.notion.databases.query({
        database_id: dbId,
        sorts: params?.sort ? mapNotionSort(params?.sort) : [],
        filter: params?.filter,
      })
      return mapBlok<T>(response)
    } catch (e) {
      console.error(e)
      return []
    }
  }

  public async getEntryContents(entryId: string): Promise<BlokContent[]> {
    try {
      const contentResponse = await this.notion.blocks.children.list({
        block_id: entryId,
      })
      const results = contentResponse?.results as BlockObjectResponse[]
      return results.reduce((contents, result, index) => {
        const isFirstOfType = result.type !== results[index - 1]?.type
        const previousBlok = contents[contents.length - 1]
        const blokContent = mapBlokContent(result)
        if (!blokContent) {
          return contents
        }
        if (
          (blokContent?.type === BlokContentType.BulletedList ||
            blokContent?.type === BlokContentType.NumberedList) &&
          !isFirstOfType
        ) {
          const previousListBlok = previousBlok as BlokContentList
          previousListBlok.list = [
            ...previousListBlok.list,
            ...blokContent.list,
          ]
          return contents
        }

        return [...contents, blokContent]
      }, [] as BlokContent[])
    } catch (e) {
      console.error(e)
      return []
    }
  }
}

export default SpaceBlok
