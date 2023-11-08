import {Component, OnInit} from '@angular/core';
import {Song} from "../shared/model/song.model";
import {PlaylistService} from "../shared/service/playlist.service";
import {Playlist} from "../shared/model/playlist.model";
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent implements OnInit {
  public playlist: Playlist;
  protected songs: Song[];

  constructor(private playlistService: PlaylistService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.playlistService.getPlaylistById(params['id'])
          .subscribe(responseData =>
            responseData.then(playlist => this.playlist = playlist));
        this.songs = this.playlist.songs;
      }
    );
  }
}
