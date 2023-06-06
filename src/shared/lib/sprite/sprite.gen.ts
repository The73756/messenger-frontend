export interface SpritesMap {
  chat:
    | "checked"
    | "clip"
    | "dots"
    | "file"
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
    | "bell"
    | "delete"
    | "exit"
    | "flip"
    | "friends"
    | "group"
    | "message"
    | "moon"
    | "notes"
    | "photo"
    | "rotate"
    | "save"
    | "search"
    | "tools";
  social: "google" | "vkontakte";
}

export const SPRITES_META: { [K in keyof SpritesMap]: SpritesMap[K][] } = {
  chat: [
    "checked",
    "clip",
    "dots",
    "file",
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
    "bell",
    "delete",
    "exit",
    "flip",
    "friends",
    "group",
    "message",
    "moon",
    "notes",
    "photo",
    "rotate",
    "save",
    "search",
    "tools",
  ],
  social: ["google", "vkontakte"],
};
