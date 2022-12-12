import type {
  BlockObjectResponse,
  BulletedListItemBlockObjectResponse,
  CalloutBlockObjectResponse,
  CodeBlockObjectResponse,
  Heading1BlockObjectResponse,
  Heading2BlockObjectResponse,
  Heading3BlockObjectResponse,
  ImageBlockObjectResponse,
  NumberedListItemBlockObjectResponse,
  ParagraphBlockObjectResponse,
  QuoteBlockObjectResponse,
  RichTextItemResponse,
  TextRichTextItemResponse,
  VideoBlockObjectResponse,
} from '@notionhq/client/build/src/api-endpoints'

import type {
  BlokContent,
  BlokContentCallout,
  BlokContentCode,
  BlokContentHeading,
  BlokContentImage,
  BlokContentList,
  BlokContentParagraph,
  BlokContentQuote,
  BlokContentRichText,
  BlokContentVideo,
} from '../types/BlokContent'
import { BlokContentColors, BlokContentType } from '../types/BlokContent'

const mapBlokContentRichText = (
  richText: TextRichTextItemResponse
): BlokContentRichText => {
  return {
    type: BlokContentType.RichText,
    text: richText.plain_text,
    href: richText.href || '',
    isBold: richText.annotations?.bold || false,
    isCode: richText.annotations?.code || false,
    isItalic: richText.annotations?.italic || false,
    isStrikethrough: richText.annotations?.strikethrough || false,
    isUnderline: richText.annotations?.underline || false,
  }
}

const mapTextBasedContentsBlokContent = (
  richTexts: RichTextItemResponse[]
): BlokContentRichText[] => {
  return (
    richTexts
      ?.filter((i) => i.type === 'text')
      ?.map((i) => mapBlokContentRichText(i as TextRichTextItemResponse)) ?? []
  )
}

const mapBlokContentParagraph = (
  block: ParagraphBlockObjectResponse
): BlokContentParagraph => {
  return {
    type: BlokContentType.Paragraph,
    elements: mapTextBasedContentsBlokContent(block.paragraph?.rich_text),
  }
}

const mapBlokContentHeading = (
  block:
    | Heading1BlockObjectResponse
    | Heading2BlockObjectResponse
    | Heading3BlockObjectResponse
): BlokContentHeading => {
  const type =
    block.type === 'heading_1'
      ? BlokContentType.Heading1
      : block.type === 'heading_2'
      ? BlokContentType.Heading2
      : BlokContentType.Heading3
  return {
    type,
    elements: mapTextBasedContentsBlokContent(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (block as any)[type]?.rich_text
    ),
  }
}

const mapBlokList = (
  listItem:
    | BulletedListItemBlockObjectResponse
    | NumberedListItemBlockObjectResponse
): BlokContentList => {
  const type =
    listItem.type === 'bulleted_list_item'
      ? BlokContentType.BulletedList
      : BlokContentType.NumberedList
  return {
    type,
    list: [
      mapTextBasedContentsBlokContent(
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (listItem as any)[type + '_item']?.rich_text
      ),
    ],
  }
}

const mapBlokContentQuote = (
  block: QuoteBlockObjectResponse
): BlokContentQuote => {
  return {
    type: BlokContentType.Quote,
    elements: mapTextBasedContentsBlokContent(block.quote?.rich_text),
  }
}

const mapBlokContentCallout = (
  block: CalloutBlockObjectResponse
): BlokContentCallout => {
  return {
    type: BlokContentType.Callout,
    elements: mapTextBasedContentsBlokContent(block.callout?.rich_text),
    emoji:
      block.callout.icon?.type === 'emoji' ? block.callout?.icon.emoji : '',
    color: BlokContentColors[block.callout.color || 'default'],
  }
}

const mapBlokContentCode = (
  block: CodeBlockObjectResponse
): BlokContentCode => {
  return {
    type: BlokContentType.Code,
    code: block.code?.rich_text.map((r) => r.plain_text)?.join('') ?? '',
    language: block.code?.language,
  }
}

const mapBlokContentImage = (
  block: ImageBlockObjectResponse
): BlokContentImage => {
  return {
    type: BlokContentType.Image,
    alt: block.image?.caption[0]?.plain_text ?? '',
    url:
      block.image?.type === 'external'
        ? block.image?.external.url
        : block.image?.file.url,
  }
}

const mapBlokContentVideo = (
  block: VideoBlockObjectResponse
): BlokContentVideo => {
  return {
    type: BlokContentType.Video,
    url: (block.video?.type === 'external' && block.video?.external.url) || '',
  }
}

export const mapBlokContent = (
  block: BlockObjectResponse
): BlokContent | null => {
  if (block.type === 'paragraph') {
    return mapBlokContentParagraph(block)
  }
  if (block.type.indexOf('heading') !== -1) {
    return mapBlokContentHeading(block as Heading1BlockObjectResponse)
  }
  if (
    block.type === 'bulleted_list_item' ||
    block.type === 'numbered_list_item'
  ) {
    return mapBlokList(block)
  }
  if (block.type === 'quote') {
    return mapBlokContentQuote(block)
  }
  if (block.type === 'callout') {
    return mapBlokContentCallout(block)
  }
  if (block.type === 'divider') {
    return { type: BlokContentType.Devider }
  }
  if (block.type === 'code') {
    return mapBlokContentCode(block)
  }
  if (block.type === 'image') {
    return mapBlokContentImage(block)
  }
  if (block.type === 'video') {
    return mapBlokContentVideo(block)
  }

  console.warn(`Uknown block to map: ${block.type}`, block)
  return null
}
