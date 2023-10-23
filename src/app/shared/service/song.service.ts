import {Song} from "../model/song.model";
import {Injectable} from "@angular/core";

@Injectable()
export class SongService {
  private songs: Song[] = [
    {"name": "GTE", "author": "lala", "album": "Five", dateAdded: "Nov 7,2020", "duration": "3:10", "imagePath":"favicon.ico"},
    {"name": "GTE", "author": "lala", "album": "New born", dateAdded: "Nov 7,2020","duration": "3:10", "imagePath":"favicon.ico"},
    {"name": "GTE", "author": "lala", "album": "Earth", dateAdded: "Nov 7,2020","duration": "3:10", "imagePath":"favicon.ico"},
    {"name": "GTE", "author": "lala", "album": "Earth", dateAdded: "Nov 7,2020","duration": "3:10", "imagePath":"favicon.ico"},
    {"name": "GTE", "author": "lala", "album": "Earth", dateAdded: "Nov 7,2020","duration": "3:10", "imagePath":"favicon.ico"},
    {"name": "GTE", "author": "lala", "album": "Earth", dateAdded: "Nov 7,2020","duration": "3:10", "imagePath":"favicon.ico"},
    {"name": "GTE", "author": "lala", "album": "Earth", dateAdded: "Nov 7,2020","duration": "3:10", "imagePath":"favicon.ico"},
    {"name": "GTE", "author": "lala", "album": "Earth", dateAdded: "Nov 7,2020","duration": "3:10", "imagePath":"favicon.ico"},
    {"name": "GTE", "author": "lala", "album": "Earth", dateAdded: "Nov 7,2020","duration": "3:10", "imagePath":"favicon.ico"},
    {"name": "GTE", "author": "lala", "album": "Earth", dateAdded: "Nov 7,2020","duration": "3:10", "imagePath":"favicon.ico"},
    {"name": "GTE", "author": "lala", "album": "Earth", dateAdded: "Nov 7,2020","duration": "3:10", "imagePath":"favicon.ico"}
  ]

  public getSongs(): Song[] {
    return this.songs.slice();
  }
}
