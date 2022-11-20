import type { BlogBlokProps } from '@appTypes/blog-blok'
import { SpaceBlok } from '@libs/space-blok'
const notionToken = import.meta.env.NOTION_API_TOKEN
const ENTRIES_DB_ID = '855ea8636460485eb074ec3a4f4ef603'

class SpaceBlokService {
  private sb: SpaceBlok

  constructor(spaceBlok: SpaceBlok) {
    this.sb = spaceBlok
  }

  public async getEntries() {
    return this.sb.getDbEntries<BlogBlokProps>(ENTRIES_DB_ID, {
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
    return this.sb.getDbEntries<BlogBlokProps>(ENTRIES_DB_ID, {
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
    const entries = await this.sb.getDbEntries<BlogBlokProps>(ENTRIES_DB_ID, {
      filter: {
        property: 'link',
        url: {
          equals: slug,
        },
      },
    })
    return entries?.[0] ?? null
  }
}

export const spaceBlokService = new SpaceBlokService(new SpaceBlok(notionToken))
