import { Then } from "@wdio/cucumber-framework";
import pages from "../po/pages/index.js";

Then("Error message should be equal to {string}", async (errorMsg) => {
  await expect(await pages("login").loginForm.errorMsg.getText()).toEqual(
    errorMsg,
  );
});
