import { Tag } from './tag'

export interface Todo {
  icon: {type: "emoji", emoji: string}
  id: string
  title: string
  isCompleted: boolean
  tag: Tag | null
  url: string
  contentUrl: string | null
}
