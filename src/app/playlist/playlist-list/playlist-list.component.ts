import {Component, OnInit} from '@angular/core';
import {Playlist} from "../../../model/playlist.model";
import {PlaylistService} from "../playlist.service";

@Component({
  selector: 'app-playlist-list',
  templateUrl: './playlist-list.component.html',
  styleUrls: ['./playlist-list.component.css']
})
export class PlaylistListComponent implements OnInit{
  protected playlists: Playlist[];


  constructor(private playlistService: PlaylistService) {
  }

  ngOnInit(): void {
    this.playlists = this.playlistService.getPlaylists();
  }
}
