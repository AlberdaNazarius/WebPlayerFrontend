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
    this.currentSong = this.songs[0];
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

  // uploadMusic(event: any): void {
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
  // }

  public getAudio() {
    return this.audio;
  }

  public getCurrentSong(): Song {
    return this.currentSong;
  }
}
