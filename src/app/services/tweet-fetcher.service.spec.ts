/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TweetFetcherService } from './tweet-fetcher.service';

describe('TweetFetcherService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TweetFetcherService]
    });
  });

  it('should ...', inject([TweetFetcherService], (service: TweetFetcherService) => {
    expect(service).toBeTruthy();
  }));
});
