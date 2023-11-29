import {Component, OnInit} from '@angular/core';
import {Playlist} from "../shared/model/playlist.model";
import {PlaylistService} from "../shared/service/playlist.service";
import {GlobalStyleService} from "../shared/service/global-style.service";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit{
  protected playlists: Playlist[];

  constructor(private playlistService: PlaylistService,
              private styleService: GlobalStyleService) {
  }

  ngOnInit(): void {
    this.styleService.setGlobalLeftPadding(220);
    this.playlists =  this.playlistService.getPlaylists()
      // .subscribe(responseData =>
      //   responseData.then(playlists => this.playlists = playlists));
  }

  createPlaylist(): void {
    this.playlistService.createPlaylist();
  }
}
