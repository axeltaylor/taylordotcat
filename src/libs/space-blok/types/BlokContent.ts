export enum BlokContentType {
  Paragraph = 'paragraph',
  BulletedList = 'bulleted_list',
  NumberedList = 'numbered_list',
  Heading1 = 'heading_1',
  Heading2 = 'heading_2',
  Heading3 = 'heading_3',
  Image = 'image',
  Code = 'code',
  RichText = 'rich_text',
  Quote = 'quote',
  Callout = 'callout',
  Devider = 'devider',
  Video = 'video',
}

export enum BlokContentColors {
  default = '#000000',
  gray = '#666666',
  brown = '#a52a2a',
  orange = '#ffa500',
  yellow = '#ffff00',
  green = '#00ff00',
  blue = '#0000ff',
  purple = '#800080',
  pink = '#ffc0cb',
  red = '#ff0000',
  gray_background = '#cccccc',
  brown_background = '#f0d6b3',
  orange_background = '#ffdab9',
  yellow_background = '#ffffe0',
  green_background = '#90ee90',
  blue_background = '#add8e6',
  purple_background = '#d8bfd8',
  pink_background = '#ffd1dc',
  red_background = '#ffcccb',
}

export type BlokContent =
  | BlokContentParagraph
  | BlokContentHeading
  | BlokContentList
  | BlokContentImage
  | BlokContentCode
  | BlokContentQuote
  | BlokContentCallout
  | BlokContentDevider
  | BlokContentVideo

export type BlokContentParagraph = {
  type: BlokContentType.Paragraph
  elements: BlokContentRichText[]
}

export type BlokContentHeading = {
  type:
    | BlokContentType.Heading1
    | BlokContentType.Heading2
    | BlokContentType.Heading3
  elements: BlokContentRichText[]
}

export type BlokContentList = {
  type: BlokContentType.BulletedList | BlokContentType.NumberedList
  list: BlokContentRichText[][]
}

export interface BlokContentRichText {
  type: BlokContentType.RichText
  text: string
  href?: string
  isBold: boolean
  isItalic: boolean
  isStrikethrough: boolean
  isUnderline: boolean
  isCode: boolean
}

export type BlokContentImage = {
  type: BlokContentType.Image
  url: string
  alt: string
}

export type BlokContentVideo = {
  type: BlokContentType.Video
  url: string
}

export type BlokContentCode = {
  type: BlokContentType.Code
  language: string
  code: string
}

export type BlokContentCallout = {
  type: BlokContentType.Callout
  elements: BlokContentRichText[]
  emoji?: string
  color?: BlokContentColors
}

export type BlokContentDevider = {
  type: BlokContentType.Devider
}

export type BlokContentQuote = {
  type: BlokContentType.Quote
  elements: BlokContentRichText[]
}
