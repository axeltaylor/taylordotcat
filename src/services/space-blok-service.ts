import type { EntryBlokProps } from '@appTypes/entry-blok'
import { SpaceBlok } from '@libs/space-blok'
const notionToken = import.meta.env.NOTION_API_TOKEN
const ENTRIES_DB_ID = '855ea8636460485eb074ec3a4f4ef603'

class SpaceBlokService {
  private sb: SpaceBlok

  constructor(spaceBlok: SpaceBlok) {
    this.sb = spaceBlok
  }

  public async getEntries() {
    return this.sb.getDbEntries<EntryBlokProps>(ENTRIES_DB_ID, {
      filter: {
        property: 'status',
        status: {
          equals: 'published',
        },
      },
      sort: {
        publishedAt: 'ascending',
      },
    })
  }

  public async getBlogEntries() {
    return this.sb.getDbEntries<EntryBlokProps>(ENTRIES_DB_ID, {
      filter: {
        and: [
          {
            property: 'type',
            select: {
              equals: 'blog',
            },
          },
          {
            property: 'status',
            status: {
              equals: 'published',
            },
          },
        ],
      },
      sort: {
        publishedAt: 'ascending',
      },
    })
  }

  public async getBlogEntryBySlug(slug: string) {
    const entries = await this.sb.getDbEntries<EntryBlokProps>(ENTRIES_DB_ID, {
      filter: {
        property: 'link',
        url: {
          equals: slug,
        },
      },
    })
    const entry = entries?.[0] ?? null
    if (entry) {
      entry.contents = await this.sb.getEntryContents(entry.id)
    }
    return entry
  }
}

export const spaceBlokService = new SpaceBlokService(new SpaceBlok(notionToken))
