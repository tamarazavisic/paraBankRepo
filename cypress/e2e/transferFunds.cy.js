/// <reference types="cypress" />

const amount = "500";

import BasePage from "../support/pages/basePage";
import HomePage from "../support/pages/homePage";
import TransferFundsPage from "../support/pages/transferFundsPage";

const basePage = new BasePage();
const homePage = new HomePage();
const transferFundsPage = new TransferFundsPage();

describe("transfer funds", () => {
  beforeEach(() => {
    basePage.visitUrl();
    homePage.logInUser(Cypress.env("username"), Cypress.env("password"));
  });

  it("should be able to tranfer funds", () => {
    transferFundsPage.validateFundsAreTransferred(amount);
  });
});
