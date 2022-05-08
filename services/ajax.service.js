export default class AjaxService {
  static loadComponent(urlHtml, urlJs, targetElement) {
    this.loadHtml(urlHtml, urlJs, targetElement);
  }

  static loadHtml(url, urlJs, targetElement) {
    fetch(url)
      .then((response) => response.text())
      .then((htmlText) => {
        targetElement.innerHTML = htmlText;
        this.loadJs(urlJs);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  static async loadJs(url) {
    await this.removeScript(url);
    const script = document.createElement("script");
    script.src = url;
    document.body.appendChild(script);
  }

  static removeScript(url) {
    url = `${window.location.origin}/${url}`;
    return new Promise((resolve) => {
      const scripts = document.getElementsByTagName("script");
      for (let script of scripts) {
        if (script.src === url) {
          script.remove();
        }
      }
      resolve();
    });
  }
}
