import { Given, When } from "@wdio/cucumber-framework";
import pages from "../po/pages/index.js";

Given("I open {string} page", async (pageName) => {
  await pages(pageName).open();
});

When("I type {string} into {string} form field", async (value, formField) => {
  await pages("login").loginForm.inputField(formField).setValue(value);
});

When("I clear {string} form field", async (fieldSelector) => {
  switch (fieldSelector) {
    case "every":
      await pages("login").loginForm.clearField("username");
      await pages("login").loginForm.clearField("password");
      break;
    case "username":
      await pages("login").loginForm.clearField("username");
      break;
    case "password":
      await pages("login").loginForm.clearField("password");
      break;
  }
});

When("I click login button", async () => {
  await pages("login").loginForm.loginBtn.click();
});
