import {Component, OnInit} from '@angular/core';
import {Playlist} from "../shared/model/playlist.model";
import {PlaylistService} from "../shared/service/playlist.service";

@Component({
  selector: 'app-playlist-table',
  templateUrl: './playlist-table.component.html',
  styleUrls: ['./playlist-table.component.css']
})
export class PlaylistTableComponent implements OnInit{
  protected playlists: Playlist[];


  constructor(private playlistService: PlaylistService) {
  }

  ngOnInit(): void {
    this.playlists = this.playlistService.getPlaylists();
  }
}
