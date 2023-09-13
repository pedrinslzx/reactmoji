import { EmojiName } from '../emojis-names'
import { genURL } from './gen-url'

export function getEmoji(emoji: EmojiName) {
  return {
    src: genURL(`${emoji}.png`),
    alt: `"${emoji} Emoji"`,
    width: 72,
    height: 72,
    style: {
      width: '1em',
      height: '1em',
      display: 'inline-block',
      verticalAlign: '-0.1em',
    },
  }
}
