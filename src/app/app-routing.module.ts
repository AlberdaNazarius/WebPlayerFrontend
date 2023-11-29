import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {PlaylistComponent} from "./playlist/playlist.component";
import {LogInComponent} from "./auth/log-in/log-in.component";
import {SignUpComponent} from "./auth/sign-up/sign-up.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'playlist/:id', component: PlaylistComponent },
  { path: 'login', component: LogInComponent},
  { path: 'signup', component: SignUpComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
