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
  notification: "bell";
  player: "next" | "play" | "prev";
  settings: "account" | "exit" | "friends" | "group" | "message" | "photo" | "search" | "tools";
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
  notification: ["bell"],
  player: ["next", "play", "prev"],
  settings: ["account", "exit", "friends", "group", "message", "photo", "search", "tools"],
  social: ["google", "vkontakte"],
};
