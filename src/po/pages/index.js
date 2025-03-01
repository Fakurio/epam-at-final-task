import LoginPage from "./login.page.js";

/**
 * @param name {'login'}
 * @returns {LoginPage}
 */
function pages(name) {
  const items = {
    login: new LoginPage(),
  };
  return items[name.toLowerCase()];
}

export default pages;
