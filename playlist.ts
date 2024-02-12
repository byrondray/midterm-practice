import { Song } from "./song";
import { Album } from "./album";

export class Playlist {
  private _name: string;
  private _playlist: Song[];

  constructor(name: string, playlist: Song[]) {
    this._name = name;
    this._playlist = playlist;
  }

  get name() {
    return this._name;
  }

  set name(name: string) {
    this._name = name;
  }

  get playlist() {
    return this._playlist;
  }

  set playlist(playlist: Song[]) {
    this._playlist = playlist;
  }

  addAlbumToPlaylist(album: Album) {
    const tracksToAdd = album.tracks;
    this._playlist.concat(tracksToAdd);
  }
}
