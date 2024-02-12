import { IImportable } from "./interface";
import { readFile, writeFile } from "fs/promises";
import { Playlist } from "./playlist";
import { Album } from "./album";

export class LocalImporter {
  private _filePath: string;

  constructor(filepath: string) {
    this._filePath = filepath;
  }

  private async readPlaylist() {
    const fileContent = await readFile(this._filePath, "utf8");
    const parsedPlaylist = JSON.parse(fileContent);
    return parsedPlaylist;
  }

  async createPlaylist() {
    const playlist = await this.readPlaylist();
    const songs = [];
    playlist.forin((album: Album) => {
      songs.push(album.tracks);
    });
  }
}

console.log(__dirname);

const importer = new LocalImporter(__dirname + "/localData.json");
importer.createPlaylist();
