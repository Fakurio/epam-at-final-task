import BasePage from "./base.page.js";
import HeaderComponent from "../components/header.component.js";

class DashboardPage extends BasePage {
  constructor() {
    super("inventory");
    this.header = new HeaderComponent();
  }
}

export default DashboardPage;
