import {Playlist} from "../model/playlist.model";
import {Injectable} from "@angular/core";
import {SongService} from "./song.service";

@Injectable()
export class PlaylistService {

  constructor(private songService: SongService) {
  }

  private playlists: Playlist[] = [
    new Playlist(1, "Myplay", "/assets/ridethelightning.jpg", this.songService.getSongs(), "Oct 5 . 5 min"),
    new Playlist(2, "Myplay", "/assets/ridethelightning.jpg", this.songService.getSongs(), "Oct 5 . 5 min"),
    new Playlist(3, "Mynonn", "/assets/ridethelightning.jpg", this.songService.getSongs(), "Oct 1 . 15 min"),
    new Playlist(4, "Mynonn", "/assets/ridethelightning.jpg", this.songService.getSongs(), "Oct 1 . 15 min"),
    new Playlist(5, "Mynonn", "/assets/ridethelightning.jpg", this.songService.getSongs(), "Oct 1 . 15 min"),
    new Playlist(6, "Mynonn", "/assets/ridethelightning.jpg", this.songService.getSongs(), "Oct 1 . 15 min"),
    new Playlist(7, "Mynonn", "/assets/ridethelightning.jpg", this.songService.getSongs(), "Oct 1 . 15 min"),
    new Playlist(8, "Mynonn", "/assets/ridethelightning.jpg", this.songService.getSongs(), "Oct 1 . 15 min"),
    new Playlist(9, "Mynonn", "/assets/ridethelightning.jpg", this.songService.getSongs(), "Oct 1 . 15 min"),
    new Playlist(10, "Mynonn", "/assets/ridethelightning.jpg", this.songService.getSongs(), "Oct 1 . 15 min"),
    new Playlist(11, "Mynonn", "/assets/ridethelightning.jpg", this.songService.getSongs(), "Oct 1 . 15 min"),
    new Playlist(12, "Mynonn", "/assets/ridethelightning.jpg", this.songService.getSongs(), "Oct 1 . 15 min"),
    new Playlist(13, "Mynonn", "/assets/ridethelightning.jpg", this.songService.getSongs(), "Oct 1 . 15 min"),
  ]

  public getPlaylists(): Playlist[] {
    return this.playlists.slice();
  }

  public getPlaylistById(id: number): Playlist | undefined {
    return this.playlists.find((playlist) => playlist.id == id);
  }
}
