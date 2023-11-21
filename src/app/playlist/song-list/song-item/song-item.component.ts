import {Component, Input, OnInit} from '@angular/core';
import {Song} from "../../../shared/model/song.model";
import {PlayerService} from "../../../shared/service/player.service";

@Component({
  selector: 'app-song-item',
  templateUrl: './song-item.component.html',
  styleUrls: ['./song-item.component.css']
})
export class SongItemComponent implements OnInit{
  @Input() public index: number;
  @Input() public song: Song;
  isSelected: boolean = false;

  constructor(private playerService: PlayerService) {
  }

  ngOnInit(): void {
    if(this.playerService.getCurrentSong().id == this.song.id) {
      this.playerService.setSelected(this);
    }
  }

  play(index: number): void {
    this.playerService.play(index)
    this.playerService.setSelected(this);
  }
}
