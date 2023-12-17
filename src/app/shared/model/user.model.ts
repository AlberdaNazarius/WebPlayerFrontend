import {Playlist} from "./playlist.model";

export class User {
  constructor(public id: number,
              public nickname: string,
              public imageKey: string,
              public playlist: Playlist[]) {
  }
}
