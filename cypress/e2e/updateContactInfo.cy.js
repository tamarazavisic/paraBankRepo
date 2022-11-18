/// <reference types="cypress" />

const newAddress = "new address";

import BasePage from "../support/pages/basePage";
import HomePage from "../support/pages/homePage";
import UpadateContactInfoPage from "../support/pages/updateContactInfoPage";

describe("update contact info", () => {
  const basePage = new BasePage();
  const homePage = new HomePage();
  const updateContactInfoPage = new UpadateContactInfoPage();

  beforeEach(() => {
    basePage.visitUrl();
    homePage.logInUser(Cypress.env("username"), Cypress.env("password"));
  });

  it("should be able to update contact info", () => {
    updateContactInfoPage.validateContactInfoIsUpdated(newAddress);
  });
});
