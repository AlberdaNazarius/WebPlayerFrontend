import {Component, EventEmitter, HostListener, Input, Output} from '@angular/core';
import {ContextMenuModel} from "../shared/interfaces/context-menu.model";
import {ContextMenuService} from "../shared/service/context-menu.service";

@Component({
  selector: 'app-context-menu',
  templateUrl: './context-menu.component.html',
  styleUrls: ['./context-menu.component.css']
})
export class ContextMenuComponent {
  @Input() contextMenuItems: Array<ContextMenuModel>;
  @Output() onContextMenuItemClick: EventEmitter<any> = new EventEmitter<any>();

  constructor(private contextMenuService: ContextMenuService) {
  }

  onContextMenuClick(event, data): any {
    this.onContextMenuItemClick.emit({
      event,
      data,
    });
  }
}
