import BaseComponent from "./base.component.js";
import { Key } from "webdriverio";

class LoginForm extends BaseComponent {
  constructor() {
    super("//form");
  }

  /**
   * @param field {"username" | "password"}
   */
  inputField(field) {
    const selectors = {
      username: '//input[@id="user-name"]',
      password: '//input[@id="password"]',
    };
    return this.rootElement.$(selectors[field.toLowerCase()]);
  }

  /**
   * @param field {"username" | "password"}
   */
  async clearField(field) {
    switch (field) {
      case "username":
        await this.inputField("username").click();
        await browser.keys([Key.Ctrl, "a"]);
        await browser.keys("Backspace");
        break;
      case "password":
        await this.inputField("password").click();
        await browser.keys([Key.Ctrl, "a"]);
        await browser.keys("Backspace");
        break;
    }
  }

  get loginBtn() {
    return this.rootElement.$('//input[@id="login-button"]');
  }

  get errorMsg() {
    return this.rootElement.$('//h3[@data-test="error"]');
  }
}

export default LoginForm;
