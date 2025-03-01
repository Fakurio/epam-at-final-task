import BasePage from "./base.page.js";
import LoginForm from "../components/login-form.component.js";

class LoginPage extends BasePage {
  constructor() {
    super("/");
    this.loginForm = new LoginForm();
  }
}

export default LoginPage;
