import BaseComponent from "./base.component.js";

class HeaderComponent extends BaseComponent {
  constructor() {
    super('//div[@class="primary_header"]');
  }

  get logo() {
    return this.rootElement.$('//div[@class="app_logo"]');
  }
}

export default HeaderComponent;
