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
import {RouterModule, Routes} from "@angular/router";

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'playlist/:id', component: PlaylistComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SongItemComponent,
    PlaylistComponent,
    PlayerComponent,
    SongListComponent,
    PlaylistCardComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [PlaylistService, SongService],
  bootstrap: [AppComponent]
})
export class AppModule { }
