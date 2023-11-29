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
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatSliderModule } from "@angular/material/slider";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FormsModule} from "@angular/forms";
import {PlayerService} from "./shared/service/player.service";
import { ContextMenuComponent } from './context-menu/context-menu.component';
import { LogInComponent } from './auth/log-in/log-in.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';


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
    PlaylistItemComponent,
    ContextMenuComponent,
    LogInComponent,
    SignUpComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatTableModule,
    MatButtonModule,
    MatSliderModule,
    FormsModule
  ],
  providers: [PlaylistService, SongService, PlayerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
