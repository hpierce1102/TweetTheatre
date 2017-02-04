import { Component, OnInit, Input } from '@angular/core';
import { Tweet } from "../../entity/Tweet";
import {ExampleTweets} from "../../entity/ExampleTweets";

@Component({
  selector: 'app-tweet-list',
  templateUrl: './tweet-list.component.html',
  styleUrls: ['./tweet-list.component.css']
})
export class TweetListComponent implements OnInit {

  constructor() { }

  @Input() keyword: string;
  @Input() maxTweets: number;
  @Input() interval: number;
  @Input() enableImages :boolean;

  tweets : Tweet[];

  ngOnInit() {
    this.tweets = ExampleTweets;
  }
}
