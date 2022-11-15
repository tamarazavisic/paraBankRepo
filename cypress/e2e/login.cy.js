/// <reference types="cypress" />

export const username = "Tamara";
export const password = "lozinka";

import {
  visitUrl,
  insertUsername,
  clickOnLoginButton,
  insertPassword,
  validateUserIsSuccessfullyLoggedIn,
  clickOnLogOutButton,
  validateUserIsSuccessfullyLoggedOut,
} from "../support/page objects/homePage";

describe("login", () => {
  beforeEach(() => {
    visitUrl();
  });

  it("should be able to login with valid credentials", () => {
    insertUsername(username);
    insertPassword(password);
    clickOnLoginButton();
    validateUserIsSuccessfullyLoggedIn();
  });

  it("should be able to log out", () => {
    insertUsername(username);
    insertPassword(password);
    clickOnLoginButton();
    clickOnLogOutButton();
    validateUserIsSuccessfullyLoggedOut();
  });
});
