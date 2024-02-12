export class Song {
  private _title: string;

  constructor(title: string) {
    this._title = title;
  }

  get title() {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }
}