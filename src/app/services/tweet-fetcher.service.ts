import { Injectable } from '@angular/core';
import {Http, URLSearchParams} from "@angular/http";
import {Observable} from "rxjs";
import {Tweet} from "../../entity/Tweet";

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {TwitterUser} from "../../entity/TwitterUser";

@Injectable()
export class TweetFetcherService {

  http : Http;
  endpoint : string;

  constructor(http : Http)   {
    this.http = http;
    this.endpoint = 'http://127.0.0.1:3000/tweets';

    console.log(this.http);
  }

  fetch(keyword, maxTweets):Observable<Tweet[]>{
    let params: URLSearchParams = new URLSearchParams();
    params.set('query', keyword);
    params.set('maxTweets', maxTweets);

    return this.http.get('http://127.0.0.1:3000/tweets', { search : params })
        .map(this.handleResponse)
        .catch(this.handleError)
    ;
  }

  private handleResponse(response){
    let body = response.json();

    let tweets = [];

    for(let i = 0; i < body.length; i++){
      let twitterUser = new TwitterUser();
      twitterUser.username = body[i]._user._username;
      twitterUser.realName = body[i]._user._realName;
      twitterUser.verified = body[i]._user._verified;
      twitterUser.profileImageUrl = body[i]._user._profileImageUrl;

      let tweet = new Tweet();
      tweet.user = twitterUser;
      tweet.text = body[i]._text;
      tweet.imageUrl = body[i]._imageUrl;

      tweets.push(tweet);
    }

    return tweets;
  }

  private handleError(response){
    console.error(response);
    return [];
  }
}
