import {Component, Input} from '@angular/core';
import {Playlist} from "../../shared/model/playlist.model";

@Component({
  selector: 'app-playlist-item',
  templateUrl: './playlist-item.component.html',
  styleUrls: ['./playlist-item.component.css']
})
export class PlaylistItemComponent {
  @Input()
  public playlist: Playlist;
}
