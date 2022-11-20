import type { BlokSort } from '../types/BlokSort'

export const mapNotionSort = <T>(
  sort: BlokSort<T>
): {
  property: string
  direction: 'ascending' | 'descending'
}[] => {
  const keys = Object.keys(sort)
  return keys.map((k) => ({
    property: k,
    direction: sort[k as keyof T] ?? 'descending',
  }))
}
