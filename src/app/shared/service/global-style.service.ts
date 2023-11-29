import {Injectable} from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class GlobalStyleService {
  public setGlobalLeftPadding(value): void {
    const header = document.getElementById("main-body");
    if (header != null) {
      document.body.style.marginLeft = `${value}px`
    }
  }
}
