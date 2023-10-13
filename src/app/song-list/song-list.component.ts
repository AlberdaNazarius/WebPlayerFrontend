import {Component, OnInit} from '@angular/core';
import {Song} from "../../model/song.model";
import {SongService} from "./song.service";

@Component({
  selector: 'app-song-list',
  templateUrl: './song-list.component.html',
  styleUrls: ['./song-list.component.css'],
  providers: [SongService]
})
export class SongListComponent implements OnInit{
  protected songs: Song[];

  constructor(private songService: SongService) {
  }

  ngOnInit(): void {
    this.songs = this.songService.getSongs();
  }
}
