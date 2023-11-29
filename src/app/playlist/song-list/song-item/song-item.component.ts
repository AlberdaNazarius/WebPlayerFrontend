import {Component, HostListener, Input, OnInit} from '@angular/core';
import {Song} from "../../../shared/model/song.model";
import {PlayerService} from "../../../shared/service/player.service";
import {ContextMenuModel} from "../../../shared/interfaces/context-menu.model";
import {ContextMenuService} from "../../../shared/service/context-menu.service";

@Component({
  selector: 'app-song-item',
  templateUrl: './song-item.component.html',
  styleUrls: ['./song-item.component.css']
})
export class SongItemComponent implements OnInit{
  @Input() public index: number;
  @Input() public song: Song;
  isSelected: boolean = false;

  rightClickMenuItems: Array<ContextMenuModel> = [];
  isDisplayContextMenu: boolean = false;
  rightClickMenuPositionX: number;
  rightClickMenuPositionY: number;

  constructor(private playerService: PlayerService,
              protected contextMenuService: ContextMenuService) {
  }

  ngOnInit(): void {
    if(this.playerService.getCurrentSong().id == this.song.id) {
      this.playerService.setSelected(this);
    }
  }

  play(index: number): void {
    this.playerService.play(index)
    this.playerService.setSelected(this);
  }

  displayContextMenu(event) {
    this.contextMenuService.selectedComponent = this;
    this.isDisplayContextMenu = true;
    this.rightClickMenuItems = [
      {
        menuText: 'Add to playlist',
        menuEvent: 'add',
      },
      {
        menuText: 'Remove this song',
        menuEvent: 'remove',
      },
    ];

    this.rightClickMenuPositionX = event.clientX;
    this.rightClickMenuPositionY = event.clientY;

  }

  getRightClickMenuStyle() {
    return {
      position: 'fixed',
      left: `${this.rightClickMenuPositionX}px`,
      top: `${this.rightClickMenuPositionY}px`
    }
  }

  handleMenuItemClick(event) {
    switch (event.data) {
      case this.rightClickMenuItems[0].menuEvent:
        console.log('To handle refactor');
        break;
      case this.rightClickMenuItems[1].menuEvent:
        console.log('To handle formatting');
    }
  }

  @HostListener('document:click')
  documentClick(): void {
    this.isDisplayContextMenu = false;
  }
}
