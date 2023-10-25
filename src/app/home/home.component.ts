import {Component, OnInit} from '@angular/core';
import {Playlist} from "../shared/model/playlist.model";
import {PlaylistService} from "../shared/service/playlist.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  protected playlists: Playlist[];

  constructor(private playlistService: PlaylistService) {
  }

  ngOnInit(): void {
    this.playlists = this.playlistService.getPlaylists();
  }
}
