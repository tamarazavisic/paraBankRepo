/// <reference types="cypress" />

export const username = "Tamara";
export const password = "lozinka";
export const amount = "500";

import {
  visitUrl,
  insertUsername,
  clickOnLoginButton,
  insertPassword,
} from "../support/page objects/homePage";

import {
  clickOnTransferButton,
  clickOnTransferFundsButton,
  insertAmount,
  validateFundsAreTransferred,
} from "../support/page objects/transferFundsPage";

describe("transfer funds", () => {
  beforeEach(() => {
    visitUrl();
    insertUsername(username);
    insertPassword(password);
    clickOnLoginButton();
  });

  it("should be able to tranfer funds", () => {
    clickOnTransferFundsButton();
    insertAmount(amount);
    clickOnTransferButton();
    validateFundsAreTransferred();
  });
});
