import {Component, Input} from '@angular/core';
import {Playlist} from "../../../../model/playlist.model";

@Component({
  selector: 'app-playlist-card',
  templateUrl: './playlist-card.component.html',
  styleUrls: ['./playlist-card.component.css']
})
export class PlaylistCardComponent {
  @Input()
  public playlist: Playlist;
}
