import LoginPage from "./login.page.js";
import DashboardPage from "./dashboard.page.js";

/**
 * @param name {'login' | 'dashboard'}
 * @returns {LoginPage | DashboardPage}
 */
function pages(name) {
  const items = {
    login: new LoginPage(),
    dashboard: new DashboardPage(),
  };
  return items[name.toLowerCase()];
}

export default pages;
