import {Playlist} from "../../model/playlist.model";
import {Injectable} from "@angular/core";
import {SongService} from "../song-list/song.service";

@Injectable()
export class PlaylistService {

  constructor(private songService: SongService) {
  }

  private playlists: Playlist[] = [
    new Playlist("Myplay", "favicon.ico", this.songService.getSongs()),
    new Playlist("Mynonn", "favicon.ico", this.songService.getSongs())
  ]

  public getPlaylists(): Playlist[] {
    return this.playlists.slice();
  }
}
