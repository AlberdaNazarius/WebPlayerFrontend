import {Component, Input} from '@angular/core';
import {Song} from "../../../shared/model/song.model";
import {PlayerService} from "../../../shared/service/player.service";

@Component({
  selector: 'app-song-item',
  templateUrl: './song-item.component.html',
  styleUrls: ['./song-item.component.css']
})
export class SongItemComponent {
  @Input()
  public index: number;
  @Input()
  public song: Song;

  constructor(private playerService: PlayerService) {
  }

  play(index: number): void {
    this.playerService.play(index)
  }
}
