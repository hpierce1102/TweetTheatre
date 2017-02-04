import {Component, OnInit, Input} from '@angular/core';
import {Tweet} from "../../entity/Tweet";

@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.css']
})
export class TweetComponent implements OnInit {

  constructor() {
  }

  @Input() tweet : Tweet;

  ngOnInit() {
  }

}
