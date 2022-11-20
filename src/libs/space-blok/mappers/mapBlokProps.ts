import type { PageObjectResponse } from '@notionhq/client/build/src/api-endpoints'

import type { Blok } from '../types/Blok'

export const mapBlokProps = <T>(
  props: PageObjectResponse['properties']
): Blok<T>['properties'] => {
  const propsList = Object.keys(props)
  const properties = propsList.reduce((res, key) => {
    const val = props[key]

    if (val.type === 'select') {
      return {
        ...res,
        [key]: val.select?.name || '',
      }
    }

    if (val.type === 'multi_select') {
      return {
        ...res,
        [key]: val.multi_select.map((v) => v.name),
      }
    }

    if (val.type === 'created_time') {
      return {
        ...res,
        [key]: new Date(val.created_time),
      }
    }

    if (val.type === 'last_edited_time') {
      return {
        ...res,
        [key]: new Date(val.last_edited_time),
      }
    }

    if (val.type === 'status') {
      return {
        ...res,
        [key]: val.status?.name || '',
      }
    }

    if (val.type === 'url') {
      return {
        ...res,
        [key]: val.url || '',
      }
    }
    return res
  }, {} as Blok['properties'])
  return properties as T
}
