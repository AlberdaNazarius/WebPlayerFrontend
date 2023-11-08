import {Song} from "./song.model";

export class Playlist {
  constructor(public id: number,
              public name: string,
              public image: string,
              public songs: Song[],
              public metadata
  ) {}
}
