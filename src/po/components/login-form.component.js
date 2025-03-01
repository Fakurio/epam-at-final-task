import BaseComponent from "./base.component.js";

class LoginForm extends BaseComponent {
  constructor() {
    super("//form");
  }

  inputField(field) {
    const selectors = {
      username: '//input[@id="user-name"]',
      password: '//input[@id="password"]',
    };
    return this.rootElement.$(selectors[field.toLowerCase()]);
  }

  get loginBtn() {
    return this.rootElement.$('//input[@id="login-button"]');
  }

  get errorMsg() {
    return this.rootElement.$('//h3[@data-test="error"]');
  }
}

export default LoginForm;
