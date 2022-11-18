/// <reference types="cypress" />

import HomePage from "../support/pages/homePage";
import BasePage from "../support/pages/basePage";

describe("login", () => {
  const homePage = new HomePage();
  const basePage = new BasePage();

  beforeEach(() => {
    basePage.visitUrl();
  });

  it("should be able to login with valid credentials", () => {
    homePage.validateUserIsSuccessfullyLoggedIn(
      Cypress.env("username"),
      Cypress.env("password")
    );
  });

  it("should be able to log out", () => {
    homePage.validateUserIsSuccessfullyLoggedOut(
      Cypress.env("username"),
      Cypress.env("password")
    );
  });
});
