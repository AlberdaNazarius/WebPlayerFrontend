import { Component } from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent {
  onSubmit(loginForm: NgForm) {
    if (!loginForm.valid) {
      return;
    }
  }
}
