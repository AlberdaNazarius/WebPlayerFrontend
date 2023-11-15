import {Component, OnInit} from '@angular/core';
import * as moment from 'moment';
import {PlayerService} from "../shared/service/player.service";
import {Song} from "../shared/model/song.model";

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  audio: HTMLAudioElement;
  currentSong: Song;
  currentTime: string;
  musicLength: string;
  duration: number;

  constructor(private playerService: PlayerService) {
  }

  ngOnInit(): void {
    this.audio = this.playerService.getAudio();
    this.duration = 1;
    this.musicLength = '0:00';
    this.currentTime = '0:00';
    this.currentSong = this.playerService.getCurrentSong();

    this.audio.ondurationchange = () => {
      const totalSeconds = Math.floor(this.audio.duration),
        duration = moment.duration(totalSeconds, 'seconds');
      this.musicLength = duration.seconds() < 10 ?
        `${Math.floor(duration.asMinutes())}:
                          0${duration.seconds()}` :
        `${Math.floor(duration.asMinutes())}:
                          ${duration.seconds()}`;
      this.duration = totalSeconds;
      this.currentSong = this.playerService.getCurrentSong();
    }

    this.audio.ontimeupdate = () => {
      const duration = moment.duration(
        Math.floor(this.audio.currentTime), 'seconds');
      this.currentTime = duration.seconds() < 10 ?
        `${Math.floor(duration.asMinutes())}:
                          0${duration.seconds()}` :
        `${Math.floor(duration.asMinutes())}:
                          ${duration.seconds()}`;
    }
  }

  play(index?: number): void {
    this.playerService.play(index);
  }

  prev(): void {
    this.playerService.prev();
  }

  next(): void {
    this.playerService.next();
  }

  volumeSlider(value: number) {
    this.audio.volume = value / 16;
  }

  durationSlider(value: number) {
    this.audio.currentTime = value;
  }
}
