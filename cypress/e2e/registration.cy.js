/// <reference types="cypress" />

import BasePage from "../support/pages/basePage";
import RegistrationPage from "../support/pages/registrationPage";

const basePage = new BasePage();
const registrationPage = new RegistrationPage();

describe("registration", () => {
  beforeEach(() => {
    basePage.visitUrl();
  });

  it("should be able to register", () => {
    registrationPage.validateUserIsSuccessfullyRegistered();
  });

  it("should not be able to register user without one field populated", () => {
    registrationPage.validateUserCantRegisterWithoutAllFieldsPopulated();
  });
});
