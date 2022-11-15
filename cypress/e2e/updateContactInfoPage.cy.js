/// <reference types="cypress" />

export const username = "Tamara";
export const password = "lozinka";
export const newAddress = "new address";

import {
  visitUrl,
  insertUsername,
  clickOnLoginButton,
  insertPassword,
} from "../support/page objects/homePage";

import {
  clickOnUpdateContactInfoButton,
  updateAddress,
  clickOnUpdateProfileButton,
  validateContactInfoIsUpdated,
} from "../support/page objects/updateContactInfoPage";

describe("update contact info", () => {
  beforeEach(() => {
    visitUrl();
    insertUsername(username);
    insertPassword(password);
    clickOnLoginButton();
  });

  it("should be able to update contact info", () => {
    clickOnUpdateContactInfoButton();
    updateAddress(newAddress);
    clickOnUpdateProfileButton();
    validateContactInfoIsUpdated();
  });
});
