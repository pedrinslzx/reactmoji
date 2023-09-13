import React, { HTMLProps, forwardRef } from "react";

import { EmojiName } from "./emojis-names";
import { getEmoji } from "./get-emoji";

interface EmojiProps
  extends Omit<
    HTMLProps<HTMLImageElement>,
    "src" | "width" | "height" | "alt"
  > {
  emoji: EmojiName;
}

export const Emoji = forwardRef<HTMLImageElement, EmojiProps>(function Emoji(
  props,
  ref
) {
  const { emoji } = props;

  return (
    <img
      {...getEmoji(emoji)}
      style={{
        width: "1em",
        height: "1em",
        display: "inline-block",
        verticalAlign: "-0.1em",
      }}
      ref={ref}
      {...props}
    />
  );
});
