import { EmojiName } from '../emojis-names'

export function getEmoji(emoji: EmojiName) {
  return {
    src: `/emoji/72x72/${emoji}.png`,
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
