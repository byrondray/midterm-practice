import { Artist } from "./artist";
import { Song } from "./song";

export class Album {
  private _title: string;
  private _artist: Artist;
  private _releaseYear: number;
  private _tracks: Song[];

  constructor(
    title: string,
    artist: Artist,
    releaseYear: number,
    tracks: Song[]
  ) {
    this._title = title;
    this._artist = artist;
    this._releaseYear = releaseYear;
    this._tracks = tracks;
  }

  get title() {
    return this._title;
  }

  set title(value: string) {
    this.title = value;
  }

  set addTrack(song: Song) {
    this._tracks.push(song);
  }

  get tracks(): Song[] {
    return this._tracks;
  }
}
