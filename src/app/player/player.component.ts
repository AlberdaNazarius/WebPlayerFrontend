import {Component, OnInit} from '@angular/core';
import * as moment from 'moment';
import {PlayerService} from "../shared/service/player.service";

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  audio: HTMLAudioElement;
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

    this.audio.ondurationchange = () => {
      const totalSeconds = Math.floor(this.audio.duration),
        duration = moment.duration(totalSeconds, 'seconds');
      this.musicLength = duration.seconds() < 10 ?
        `${Math.floor(duration.asMinutes())}:
                          0${duration.seconds()}` :
        `${Math.floor(duration.asMinutes())}:
                          ${duration.seconds()}`;
      this.duration = totalSeconds;
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

  uploadMusic(event: any): void {
    //   for (var index = 0; index < event.target.files.length; index++) {
    //     const file = event.target.files[index];
    //     const filePath = `music/${file.name}`;
    //     const fileRef = this.storage.ref(filePath);
    //     this.storage.upload(filePath, file).then((uploadTaskSnapshot) => {
    //       fileRef.getDownloadURL().subscribe((url: any) => {
    //         jsmediatags.read(file, {
    //           onSuccess: (tagType: TagType) => {
    //             let music: Music = {
    //               album: tagType.tags.album === undefined ?
    //                 '' : tagType.tags.album,
    //               artist: tagType.tags.artist === undefined ?
    //                 '' : tagType.tags.artist,
    //               title: tagType.tags.title === undefined ?
    //                 '' : tagType.tags.title,
    //               url: url
    //             };
    //             this.store.collection('music').add(music);
    //           }
    //         })
    //       })
    //     })
    //   }
  }
}
