import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PlaylistComponent } from './playlist/playlist.component';
import { PlayerComponent } from './player/player.component';
import {SongService} from "./shared/service/song.service";
import {PlaylistService} from "./shared/service/playlist.service";
import {SongItemComponent} from "./playlist/song-list/song-item/song-item.component";
import {SongListComponent} from "./playlist/song-list/song-list.component";
import {PlaylistCardComponent} from "./playlist-table/playlist-card/playlist-card.component";
import {PlaylistTableComponent} from "./playlist-table/playlist-table.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SongItemComponent,
    PlaylistComponent,
    PlayerComponent,
    SongListComponent,
    PlaylistCardComponent,
    PlaylistTableComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [PlaylistService, SongService],
  bootstrap: [AppComponent]
})
export class AppModule { }
