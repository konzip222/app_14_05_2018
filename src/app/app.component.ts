import { Component } from '@angular/core';
import { ClockComponent } from './components/clock/clock.component';
import { Title }     from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'app';
  dateInput = new Date(1525774918192);

}
