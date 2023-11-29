import {Injectable} from "@angular/core";
import {SongItemComponent} from "../../playlist/song-list/song-item/song-item.component";

@Injectable({
  providedIn: 'root'
})
export class ContextMenuService {
  private _selectedComponent: SongItemComponent;

  set selectedComponent(value) {
    if (this._selectedComponent != undefined) {
      this._selectedComponent.isDisplayContextMenu = false;
    }
    this._selectedComponent = value;
  }
}
