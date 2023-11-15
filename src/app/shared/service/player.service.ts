import {Injectable} from "@angular/core";
import {Song} from "../model/song.model";
import {SongService} from "./song.service";

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  private readonly audio;
  private readonly songs: Song[];
  private currentSong: Song;
  private trackPointer: number;

  constructor(private songService: SongService) {
    this.audio = new Audio();
    this.songs = this.songService.getSongs();
    this.trackPointer = 0;
  }

  public play(index?: number): void {
    if (index === undefined) {
      if (this.audio.paused) {
        if (this.audio.readyState === 0) {
          this.trackPointer = 0;
          this.currentSong = this.songs[0]
          this.audio.src = this.currentSong.url;
        }
        this.audio.play();
      } else {
        this.audio.pause();
      }
    } else {
      this.trackPointer = index;
      this.currentSong = this.songs[index];
      this.audio.src = this.currentSong.url;
      this.audio.play();
    }
  }

  public prev(): void {
    this.trackPointer--;
    this.currentSong = this.songs[this.trackPointer];
    this.audio.src = this.currentSong.url;
    this.audio.play();
  }

  public next(): void {
    this.trackPointer++;
    this.currentSong = this.songs[this.trackPointer];
    this.audio.src = this.currentSong.url;
    this.audio.play();
  }

  public getAudio() {
    return this.audio;
  }
}
