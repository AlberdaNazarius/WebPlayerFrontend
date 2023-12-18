import {Injectable} from "@angular/core";
import {User} from "../model/user.model";
import {Playlist} from "../model/playlist.model";
import {Song} from "../model/song.model";

@Injectable({
  providedIn: "root"
})
export class UserService {

  private songs: Song[] = [
    {"id": 1, "name": "Enemy", "author": "There For Tomorrow", "album": "Five", dateAdded: "Oct 6,2020", "duration": "3:33", songKey: "assets/music/Enemy.mp3", image:"assets/images/song/enemy.jpg"},
    {"id": 2, "name": "A Little Faster", "author": "Deni", "album": "New born", dateAdded: "Jun 7,2021","duration": "3:04", songKey: "assets/music/A Little Faster.mp3", image:"assets/images/song/ALittleFaster.jpg"},
    {"id": 3, "name": "Brand New Numb", "author": "HelNo", "album": "Earth", dateAdded: "Nov 1,2020","duration": "3:42", songKey: "assets/music/Brand New Numb.mp3", image:"assets/images/song/brandNewNumb.jpg"},
    {"id": 4, "name": "Lacrimosa", "author": "Lard", "album": "Given", dateAdded: "Nov 9,2024","duration": "3:33", songKey: "assets/music/Lacrimosa.mp3", image:"assets/images/song/lacrimosa.png"},
    {"id": 5, "name": "SPIT IN MY FACE", "author": "ThxSoMch", "album": "SPIT IN MY FACE", dateAdded: "Nov 7,2020","duration": "2:27", songKey: "assets/music/SPIT IN MY FACE.mp3", image:"assets/images/song/spittomyface.jpg"},
  ]

  private playlists: Playlist[] = [
    new Playlist(2, "Myplay", "/assets/images/ridethelightning.jpg", this.songs, "Oct 5 . 5 min"),
    new Playlist(3, "MyPlaylist", "/assets/images/playlist/Great_Wave_off_Kanagawa2.jpg", this.songs, "Oct 1 . 15 min"),
    new Playlist(4, "Mynonn", "/assets/images/ridethelightning.jpg", this.songs, "Oct 1 . 15 min"),
    new Playlist(5, "Mynonn", "/assets/images/ridethelightning.jpg", this.songs, "Oct 1 . 15 min"),
    new Playlist(6, "Mynonn", "/assets/images/ridethelightning.jpg", this.songs, "Oct 1 . 15 min"),
    new Playlist(7, "Mynonn", "/assets/images/ridethelightning.jpg", this.songs, "Oct 1 . 15 min"),
    new Playlist(8, "Mynonn", "/assets/images/ridethelightning.jpg", this.songs, "Oct 1 . 15 min"),
    new Playlist(9, "Mynonn", "/assets/images/ridethelightning.jpg", this.songs, "Oct 1 . 15 min"),
    new Playlist(10, "Mynonn", "/assets/images/ridethelightning.jpg", this.songs, "Oct 1 . 15 min"),
    new Playlist(11, "Mynonn", "/assets/images/ridethelightning.jpg", this.songs, "Oct 1 . 15 min"),
    new Playlist(12, "Mynonn", "/assets/images/ridethelightning.jpg", this.songs, "Oct 1 . 15 min"),
    new Playlist(13, "Mynonn", "/assets/images/ridethelightning.jpg", this.songs, "Oct 1 . 15 min"),
    new Playlist(14, "Mynonn", "/assets/images/ridethelightning.jpg", this.songs, "Oct 1 . 15 min"),
    new Playlist(15, "Mynonn", "/assets/images/ridethelightning.jpg", this.songs, "Oct 1 . 15 min"),
  ];

  private users = [
    new User(1, "Amia", "profile", this.playlists)
  ]

  public getUser(id: number): User {
    return this.users[id];
  }
}
