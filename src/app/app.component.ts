import {Component, OnInit} from '@angular/core';
import {NavigationEnd , Router} from "@angular/router";
import {filter} from "rxjs";
import {GlobalStyleService} from "./shared/service/global-style.service";
import {AuthService} from "./shared/service/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private router: Router,
              private styleService: GlobalStyleService,
              protected authService: AuthService) { }

  ngOnInit(): void {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        const currentRoute = event.url;
        this.authService.isAuthPage = currentRoute === "/login" || currentRoute === "/signup";
        if (this.authService.isAuthPage) {
          this.styleService.setGlobalLeftPadding(0);
        }
      });
  }
}
