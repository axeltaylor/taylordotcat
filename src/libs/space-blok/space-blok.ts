import { Client } from '@notionhq/client'

import { mapBlok } from './mappers/mapBlok'
import { mapNotionSort } from './mappers/mapNotionSort'
import type { Blok } from './types/Blok'
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
      return mapBlok(response)
    } catch (e) {
      console.error(e)
      return []
    }
  }
}

export default SpaceBlok
