import DrawerInitiator from '../utils/drawer-initiator';
import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';

class App {
  constructor({
    button, drawer, content, skipToContent,
  }) {
    this._button = button;
    this._drawer = drawer;
    this._content = content;
    this._skipToContent = skipToContent;

    this._initSkipToContent();
    this._initialAppShell();
  }

  _initialAppShell() {
    DrawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
      content: this._content,
    });
  }

  _initSkipToContent() {
    this._skipToContent.addEventListener('click', (event) => {
      event.preventDefault();

      this._content.scrollIntoView();
    });
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this._content.innerHTML = await page.render();
    await page.afterRender();
  }
}

export default App;
