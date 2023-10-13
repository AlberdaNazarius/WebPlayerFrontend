import {Playlist} from "../../model/playlist.model";
import {Injectable} from "@angular/core";
import {SongService} from "../song-list/song.service";

@Injectable()
export class PlaylistService {

  constructor(private songService: SongService) {
  }

  private playlists: Playlist[] = [
    new Playlist("Myplay", "/assets/ridethelightning.jpg", this.songService.getSongs(), "Oct 5 . 5 min"),
    new Playlist("Myplay", "/assets/ridethelightning.jpg", this.songService.getSongs(), "Oct 5 . 5 min"),
    new Playlist("Mynonn", "/assets/ridethelightning.jpg", this.songService.getSongs(), "Oct 1 . 15 min"),
    new Playlist("Mynonn", "/assets/ridethelightning.jpg", this.songService.getSongs(), "Oct 1 . 15 min"),
    new Playlist("Mynonn", "/assets/ridethelightning.jpg", this.songService.getSongs(), "Oct 1 . 15 min"),
    new Playlist("Mynonn", "/assets/ridethelightning.jpg", this.songService.getSongs(), "Oct 1 . 15 min"),
    new Playlist("Mynonn", "/assets/ridethelightning.jpg", this.songService.getSongs(), "Oct 1 . 15 min"),
    new Playlist("Mynonn", "/assets/ridethelightning.jpg", this.songService.getSongs(), "Oct 1 . 15 min"),
    new Playlist("Mynonn", "/assets/ridethelightning.jpg", this.songService.getSongs(), "Oct 1 . 15 min"),
    new Playlist("Mynonn", "/assets/ridethelightning.jpg", this.songService.getSongs(), "Oct 1 . 15 min"),
    new Playlist("Mynonn", "/assets/ridethelightning.jpg", this.songService.getSongs(), "Oct 1 . 15 min"),
    new Playlist("Mynonn", "/assets/ridethelightning.jpg", this.songService.getSongs(), "Oct 1 . 15 min"),
    new Playlist("Mynonn", "/assets/ridethelightning.jpg", this.songService.getSongs(), "Oct 1 . 15 min"),
  ]

  public getPlaylists(): Playlist[] {
    return this.playlists.slice();
  }
}
