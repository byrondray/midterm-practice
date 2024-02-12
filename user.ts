import { Playlist } from "./playlist";
import { Album } from "./album";

export class User {
  private _username: string;
  private _password: string;
  private _playlists: Playlist[] | Playlist;
  private _albums: Album[] | Album;

  constructor(
    username: string,
    password: string,
    playlist: Playlist[] | Playlist,
    albums: Album[] | Album
  ) {
    this._username = username;
    this._password = password;
    this._playlists = playlist;
    this._albums = albums;
  }

  addPlaylist(playlist: Playlist) {
    this._playlists.push(playlist)
  }
}
