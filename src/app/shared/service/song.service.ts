import {Song} from "../model/song.model";
import {Injectable} from "@angular/core";

@Injectable()
export class SongService {
  private songs: Song[] = [
    {"id": 1, "name": "Enemy", "author": "There For Tomorrow", "album": "Five", dateAdded: "Nov 7,2020", "duration": "3:10", url: "assets/music/Enemy.mp3", "imagePath":"favicon.ico"},
    {"id": 2, "name": "A Little Faster", "author": "lala", "album": "New born", dateAdded: "Nov 7,2020","duration": "3:10", url: "assets/music/A Little Faster.mp3", "imagePath":"favicon.ico"},
    {"id": 3, "name": "Brand New Numb", "author": "lala", "album": "Earth", dateAdded: "Nov 7,2020","duration": "3:10", url: "assets/music/Brand New Numb.mp3", "imagePath":"favicon.ico"},
    {"id": 4, "name": "Lacrimosa", "author": "lala", "album": "Given", dateAdded: "Nov 7,2020","duration": "3:10", url: "assets/music/Lacrimosa.mp3", "imagePath":"favicon.ico"},
    {"id": 5, "name": "SPIT IN MY FACE", "author": "ThxSoMch", "album": "SPIT IN MY FACE", dateAdded: "Nov 7,2020","duration": "3:10", url: "assets/music/SPIT IN MY FACE.mp3", "imagePath":"favicon.ico"},
  ]

  public getSongs(): Song[] {
    return this.songs.slice();
  }
}
