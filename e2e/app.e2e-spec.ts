import { SlimLoaderExPage } from './app.po';

describe('slim-loader-ex App', function() {
  let page: SlimLoaderExPage;

  beforeEach(() => {
    page = new SlimLoaderExPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
