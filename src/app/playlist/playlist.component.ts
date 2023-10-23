import {Component, OnInit} from '@angular/core';
import {Song} from "../shared/model/song.model";
import {PlaylistService} from "../shared/service/playlist.service";
import {Playlist} from "../shared/model/playlist.model";

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent implements OnInit {
  public playlist: Playlist;
  protected songs: Song[];

  constructor(private playlistService: PlaylistService) {
  }

  ngOnInit(): void {
    this.playlist = this.playlistService.getPlaylists()[0];
    this.songs = this.playlist.songs;
  }
}
