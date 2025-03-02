import { Then } from "@wdio/cucumber-framework";
import pages from "../po/pages/index.js";

Then("Error message should be equal to {string}", async (errorMsg) => {
  await expect(await pages("login").loginForm.errorMsg.getText()).toEqual(
    errorMsg,
  );
});

Then(
  "I will see Dashboard page's header with {string} title",
  async (title) => {
    await expect(await pages("dashboard").header.logo.getText()).toEqual(title);
  },
);
