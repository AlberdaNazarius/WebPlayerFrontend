import {Component, EventEmitter, Output} from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from "@angular/forms";

@Component({
  standalone: true,
  selector: 'app-playlist-editor',
  templateUrl: './playlist-editor.component.html',
  styleUrls: ['./playlist-editor.component.css'],
  imports: [ReactiveFormsModule, FormsModule],
})
export class PlaylistEditorComponent {
  @Output() formSubmitted: EventEmitter<string> = new EventEmitter<string>();
  name: FormControl<string> = new FormControl('');

  submit(): void {
    this.formSubmitted.emit(this.name.value);
  }
}
