import { ProyectEducationPage } from './app.po';

describe('proyect-education App', () => {
  let page: ProyectEducationPage;

  beforeEach(() => {
    page = new ProyectEducationPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
