import {Injectable} from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  private _isAuthPage: boolean;
  private _isAuthenticated: boolean;

  get isAuthenticated(): boolean {
    return this._isAuthenticated;
  }

  set isAuthenticated(value: boolean) {
    this._isAuthenticated = value;
  }

  get isAuthPage(): boolean {
    return this._isAuthPage;
  }

  set isAuthPage(value: boolean) {
    this._isAuthPage = value;
  }
}
