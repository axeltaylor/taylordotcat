import type { EntryBlokProps } from '@appTypes/entry-blok'
import { SpaceBlok } from '@libs/space-blok'
const notionToken = import.meta.env.NOTION_API_TOKEN
const ENTRIES_DB_ID = '855ea8636460485eb074ec3a4f4ef603'
const INTRO_ID = '03a165e502f64a9192b5f48ab1a37a11'
const isDev = import.meta.env.MODE === 'development'
const filterStatus = isDev
  ? {
      or: [
        {
          property: 'status',
          status: {
            equals: 'published',
          },
        },
        {
          property: 'status',
          status: {
            equals: 'draft',
          },
        },
      ],
    }
  : {
      property: 'status',
      status: {
        equals: 'published',
      },
    }

class SpaceBlokService {
  private sb: SpaceBlok

  constructor(spaceBlok: SpaceBlok) {
    this.sb = spaceBlok
  }

  public async getEntries() {
    return this.sb.getDbEntries<EntryBlokProps>(ENTRIES_DB_ID, {
      filter: filterStatus,
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
          filterStatus,
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

  public async getIntro() {
    const entry = await this.sb.getEntryContents(INTRO_ID)
    return entry
  }
}

export const spaceBlokService = new SpaceBlokService(new SpaceBlok(notionToken))
