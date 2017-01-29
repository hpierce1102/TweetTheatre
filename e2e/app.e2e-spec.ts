import { TweetPage } from './app.po';

describe('tweet App', function() {
  let page: TweetPage;

  beforeEach(() => {
    page = new TweetPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
