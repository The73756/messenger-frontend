export interface SpritesMap {
  chat:
    | "checked"
    | "clip"
    | "dots"
    | "file"
    | "gift"
    | "image"
    | "micro"
    | "music"
    | "pending"
    | "search"
    | "send"
    | "sent"
    | "sidebar"
    | "smile"
    | "video";
  figures: "arrow" | "check" | "cross";
  player: "next" | "pause" | "play" | "prev" | "volume";
  settings:
    | "account"
    | "audio"
    | "bell-none"
    | "bell"
    | "castle"
    | "check-mark"
    | "close"
    | "delete"
    | "exit"
    | "files"
    | "flip"
    | "friends"
    | "gift"
    | "group"
    | "info"
    | "link"
    | "media"
    | "message"
    | "microphone"
    | "moon"
    | "notes"
    | "pen"
    | "photo"
    | "picture"
    | "points"
    | "profile"
    | "repost"
    | "rotate"
    | "save"
    | "search"
    | "smiley"
    | "tel"
    | "tools"
    | "video";
  social: "google" | "vkontakte";
}

export const SPRITES_META: { [K in keyof SpritesMap]: SpritesMap[K][] } = {
  chat: [
    "checked",
    "clip",
    "dots",
    "file",
    "gift",
    "image",
    "micro",
    "music",
    "pending",
    "search",
    "send",
    "sent",
    "sidebar",
    "smile",
    "video",
  ],
  figures: ["arrow", "check", "cross"],
  player: ["next", "pause", "play", "prev", "volume"],
  settings: [
    "account",
    "audio",
    "bell-none",
    "bell",
    "castle",
    "check-mark",
    "close",
    "delete",
    "exit",
    "files",
    "flip",
    "friends",
    "gift",
    "group",
    "info",
    "link",
    "media",
    "message",
    "microphone",
    "moon",
    "notes",
    "pen",
    "photo",
    "picture",
    "points",
    "profile",
    "repost",
    "rotate",
    "save",
    "search",
    "smiley",
    "tel",
    "tools",
    "video",
  ],
  social: ["google", "vkontakte"],
};
