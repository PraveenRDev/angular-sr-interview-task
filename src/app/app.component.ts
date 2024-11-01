import { Component } from '@angular/core';
import {} from '@angular/common';
import {} from '@angular/forms';
import {} from '@angular/common/http';
import {} from 'rxjs';
import {} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [],
})
export class AppComponent {
  constructor() {
    console.log('Meow!');
  }
}
