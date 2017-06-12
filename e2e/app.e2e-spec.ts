import { AngularTestForTravisPage } from './app.po';

describe('angular-test-for-travis App', () => {
  let page: AngularTestForTravisPage;

  beforeEach(() => {
    page = new AngularTestForTravisPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
