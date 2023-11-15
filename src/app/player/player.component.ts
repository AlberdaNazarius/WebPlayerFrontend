import {Component, OnInit} from '@angular/core';
import * as moment from 'moment';
import {SongService} from "../shared/service/song.service";
import {Song} from "../shared/model/song.model";

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  audio = new Audio();
  currentTime: string;
  musicLength: string;
  duration: number = 1;
  trackPointer: number = 0;
  musicList: Song[];
  currentMusic: Song;

  constructor(private songService: SongService) {
    this.musicLength = '0:00';
    this.currentTime = '0:00';
    this.musicList = songService.getSongs();
  }

  ngOnInit(): void {
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
    if (index === undefined) {
      if (this.audio.paused) {
        if (this.audio.readyState === 0) {
          this.trackPointer = 0;
          this.currentMusic = this.musicList[0];
          this.audio.src = this.currentMusic.url;
        }
        this.audio.play();
      } else {
        this.audio.pause();
      }
    } else {
      this.trackPointer = index;
      this.currentMusic = this.musicList[index];
      this.audio.src = this.currentMusic.url;
      this.audio.play();
    }
  }

  prev(): void {
    this.trackPointer--;
    this.currentMusic = this.musicList[this.trackPointer];
    this.audio.src = this.currentMusic.url;
    this.audio.play();
  }

  next(): void {
    this.trackPointer++;
    this.currentMusic = this.musicList[this.trackPointer];
    this.audio.src = this.currentMusic.url;
    this.audio.play();
  }

  volumeSlider(event: number) {
    this.audio.volume = event / 16;
  }

  durationSlider(event: number) {
    this.audio.currentTime = event;
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
