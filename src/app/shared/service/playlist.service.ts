import {Playlist} from "../model/playlist.model";
import {Injectable} from "@angular/core";
import {SongService} from "./song.service";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs";
import {AwsS3Service} from "./aws.service";

@Injectable()
export class PlaylistService {
  constructor(private http: HttpClient,
              private songService: SongService,
              private awsService: AwsS3Service ) {}

  private playlists: Playlist[] = [
    new Playlist(2, "Myplay", "/assets/images/ridethelightning.jpg", this.songService.getSongs(), "Oct 5 . 5 min"),
    new Playlist(3, "Mynonn", "/assets/images/ridethelightning.jpg", this.songService.getSongs(), "Oct 1 . 15 min"),
    new Playlist(4, "Mynonn", "/assets/images/ridethelightning.jpg", this.songService.getSongs(), "Oct 1 . 15 min"),
    new Playlist(5, "Mynonn", "/assets/images/ridethelightning.jpg", this.songService.getSongs(), "Oct 1 . 15 min"),
    new Playlist(6, "Mynonn", "/assets/images/ridethelightning.jpg", this.songService.getSongs(), "Oct 1 . 15 min"),
    new Playlist(7, "Mynonn", "/assets/images/ridethelightning.jpg", this.songService.getSongs(), "Oct 1 . 15 min"),
    new Playlist(8, "Mynonn", "/assets/images/ridethelightning.jpg", this.songService.getSongs(), "Oct 1 . 15 min"),
    new Playlist(9, "Mynonn", "/assets/images/ridethelightning.jpg", this.songService.getSongs(), "Oct 1 . 15 min"),
    new Playlist(10, "Mynonn", "/assets/images/ridethelightning.jpg", this.songService.getSongs(), "Oct 1 . 15 min"),
    new Playlist(11, "Mynonn", "/assets/images/ridethelightning.jpg", this.songService.getSongs(), "Oct 1 . 15 min"),
    new Playlist(12, "Mynonn", "/assets/images/ridethelightning.jpg", this.songService.getSongs(), "Oct 1 . 15 min"),
    new Playlist(13, "Mynonn", "/assets/images/ridethelightning.jpg", this.songService.getSongs(), "Oct 1 . 15 min"),
    new Playlist(14, "Mynonn", "/assets/images/ridethelightning.jpg", this.songService.getSongs(), "Oct 1 . 15 min"),
    new Playlist(15, "Mynonn", "/assets/images/ridethelightning.jpg", this.songService.getSongs(), "Oct 1 . 15 min"),
  ];

  public getPlaylists() {
    let params = {
      Bucket: 'bucket-for-streaming-service',
      Key: 'Logo.jpg'
    };

    return this.http.get<Playlist[]>(`http://localhost:8080/api/playlist/playlists`)
      .pipe(map(async resultData => {
        for (let playlist of resultData) {
          playlist.image = await this.awsService.getS3Image(params).then(data => <string>data)
          playlist.metadata = "Oct 5 . 5 min"
        }
        return resultData;
      }));
  }

  public getPlaylistById(id: number) {
    return this.http.get<Playlist>(`http://localhost:8080/api/playlist/${id}`)
      .pipe(map(resultData => {
        resultData.image = this.convertResponsePlaylistDataToImage(resultData);
        return resultData;
    }));
  }

  private convertResponsePlaylistDataToImage(data): string {
    return `data:${data.image["type"]};base64,${data.image["imageData"]}`;
  }
}
