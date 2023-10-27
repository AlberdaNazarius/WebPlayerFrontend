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
import {PlaylistCardComponent} from "./home/playlist-card/playlist-card.component";
import {HomeComponent} from "./home/home.component";
import { SidebarComponent } from './sidebar/sidebar.component';
import { PlaylistItemComponent } from './sidebar/playlist-item/playlist-item.component';
import {HttpClientModule} from "@angular/common/http";
import {AppRoutingModule} from "./app-routing.module";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SongItemComponent,
    PlaylistComponent,
    PlayerComponent,
    SongListComponent,
    PlaylistCardComponent,
    HomeComponent,
    SidebarComponent,
    PlaylistItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [PlaylistService, SongService],
  bootstrap: [AppComponent]
})
export class AppModule { }
