import {Component, OnInit, Input, OnChanges, SimpleChanges} from '@angular/core';
import { Tweet } from "../../entity/Tweet";
import {TweetFetcherService} from "../services/tweet-fetcher.service";

@Component({
  selector: 'app-tweet-list',
  templateUrl: './tweet-list.component.html',
  styleUrls: ['./tweet-list.component.css']
})
export class TweetListComponent implements OnInit, OnChanges {

  @Input() keyword: string;
  @Input() maxTweets: number;
  @Input() interval: number;
  @Input() enableImages :boolean;

  tweetFetcher : TweetFetcherService;

  fetchTweetsInterval : number; //Numeric id identifying the setInterval()

  constructor(tweetFetcher : TweetFetcherService) {
    this.tweetFetcher = tweetFetcher;
    this.tweets = [];
  }


  tweets : Tweet[];

  ngOnInit() {
    this.getNewTweets();
    this.fetchTweetsInterval = setInterval(this.getNewTweets.bind(this), this.interval * 1000);
  }

  ngOnChanges(changes: SimpleChanges){
    if(changes.hasOwnProperty('interval')){
      clearInterval(this.fetchTweetsInterval);
      this.fetchTweetsInterval = setInterval(this.getNewTweets.bind(this), this.interval * 1000);
    }
  }

  getNewTweets(){
    if(typeof this.keyword == "string" && this.keyword.length > 0){
      this.tweetFetcher.fetch(this.keyword, this.maxTweets)
          .subscribe(
              tweets => this.tweets = tweets.concat(this.tweets),
              error => console.error(error)
          );
    }
  }
}
