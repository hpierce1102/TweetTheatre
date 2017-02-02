import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  keyword = '';
  interval = 60;
  maxTweets = 4;
  enableImages = true;

  validIntervals = [ 30, 60, 90, 120];
  validMaxTweets = [ 2, 4, 6];

  showConfig = false;

  toggleConfig(){
    this.showConfig = !this.showConfig;
  }
}
