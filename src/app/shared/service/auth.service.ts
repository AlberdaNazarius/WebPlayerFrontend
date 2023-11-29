import {Injectable} from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  private _isAuthPage: boolean;

  get isAuthPage(): boolean {
    return this._isAuthPage;
  }

  set isAuthPage(value: boolean) {
    this._isAuthPage = value;
  }
}
