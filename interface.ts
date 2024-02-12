import { Playlist } from "./playlist"

export interface IImportable {
  importPlaylist(): Playlist;
}
