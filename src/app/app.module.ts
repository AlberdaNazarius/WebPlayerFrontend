import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SongItemComponent } from './song-list/song-item/song-item.component';
import { PlaylistComponent } from './playlist/playlist.component';
import { PlayerComponent } from './player/player.component';
import { SongListComponent } from './song-list/song-list.component';
import { PlaylistCardComponent } from './playlist/playlist-list/playlist-card/playlist-card.component';
import { PlaylistListComponent } from './playlist/playlist-list/playlist-list.component';
import {SongService} from "./song-list/song.service";
import {PlaylistService} from "./playlist/playlist.service";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SongItemComponent,
    PlaylistComponent,
    PlayerComponent,
    SongListComponent,
    PlaylistCardComponent,
    PlaylistListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [PlaylistService, SongService],
  bootstrap: [AppComponent]
})
export class AppModule { }
