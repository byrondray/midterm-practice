import { Song } from "./song";

export class Artist {
  private _name: string;
  private _album: Song[];

  constructor(name: string, album: Song[]) {
    this._name = name;
    this._album = album;
  }

  get name() {
    return this._name;
  }

  get album() {
    return this._album;
  }

  set album(album: Song[]) {
    this._album = album;
  }
}
