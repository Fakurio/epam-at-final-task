import { Given, When } from "@wdio/cucumber-framework";
import pages from "../po/pages/index.js";

Given("I open {string} page", async (pageName) => {
  await pages(pageName).open();
});

When("I type value into {string} form field", async (formField) => {
  await pages("login").loginForm.inputField(formField).setValue("Kamil");
});

When("I clear {string} form field", async (fieldSelector) => {
  switch (fieldSelector) {
    case "every":
      await pages("login").loginForm.inputField("username").setValue("");
      await pages("login").loginForm.inputField("password").setValue("");
      break;
    case "username":
      await pages("login").loginForm.inputField("username").setValue("");
      break;
    case "password":
      await pages("login").loginForm.inputField("password").setValue("");
      break;
  }
});

When("I click login button", async () => {
  await pages("login").loginForm.loginBtn.click();
});
