import {Component, Input, OnInit} from '@angular/core';
import {Song} from "../../shared/model/song.model";

@Component({
  selector: 'app-song-list',
  templateUrl: './song-list.component.html',
  styleUrls: ['./song-list.component.css']
})
export class SongListComponent implements OnInit {
  @Input()
  public songs: Song[];

  ngOnInit(): void {

  }
}
