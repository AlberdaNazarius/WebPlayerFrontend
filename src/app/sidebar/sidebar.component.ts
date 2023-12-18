import {Component, HostListener, OnInit} from '@angular/core';
import {Playlist} from "../shared/model/playlist.model";
import {PlaylistService} from "../shared/service/playlist.service";
import {GlobalStyleService} from "../shared/service/global-style.service";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit{
  playlists: Playlist[];
  showForm: boolean;

  constructor(private playlistService: PlaylistService,
              private styleService: GlobalStyleService) {
  }

  ngOnInit(): void {
    this.styleService.setGlobalLeftPadding(220);
    // this.playlists =
      this.playlistService.getPlaylists()
      .subscribe(responseData =>
        responseData.then(playlists => this.playlists = playlists));
  }

  createPlaylist(value: string): void {
    if (value != "") {
      this.playlistService.createPlaylist(value);
    }
    this.showForm = false;
  }

  @HostListener('document:click', ['$event'])
  documentClick(event): void {
    if (event.target.tagName == "INPUT" || event.target.tagName == "BUTTON" || event.target.id == "pl-form") {
      return
    }
    this.showForm = event.target.id == "crtPlaylist";
  }
}
