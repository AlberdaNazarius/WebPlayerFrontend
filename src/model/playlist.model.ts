import {Song} from "./song.model";

export class Playlist {
  constructor(public name: string,
              public imagePath: string,
              public songs: Song[],
              public metadata
  ) {}
}
