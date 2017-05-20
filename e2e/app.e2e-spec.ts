import { EventPage } from './app.po';

describe('event App', function() {
  let page: EventPage;

  beforeEach(() => {
    page = new EventPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
