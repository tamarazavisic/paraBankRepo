/// <reference types="cypress" />

export const username = "Tamara";
export const password = "lozinka";

import {
  visitUrl,
  validateValidUrlIsVisited,
  insertUsername,
  clickOnLoginButton,
  insertPassword,
  validateUserIsSuccessfullyLoggedIn,
} from "../support/page objects/homePage";

describe("login", () => {
  beforeEach(() => {
    visitUrl();
  });

  it("should be able to visit webpage", () => {
    validateValidUrlIsVisited();
  });

  it("should be able to login with valid credentials", () => {
    insertUsername(username);
    insertPassword(password);
    clickOnLoginButton();
    validateUserIsSuccessfullyLoggedIn();
  });
});
