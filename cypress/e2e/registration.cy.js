/// <reference types="cypress" />

export const firstName = "Tamara";
export const lastName = "Zavisic";
export const address = "address";
export const city = "city";
export const state = "state";
export const zipcode = "21000";
export const phoneNumber = "12345678";
export const ssn = "ssn";
export const username = "username1234";
export const password = "lozinka12345";

import {
  visitUrl,
  clickOnRegisterButton,
} from "../support/page objects/homePage";

import {
  clickOnRegisterButtonOnRegistrationPage,
  validateUserIsSuccessfullyRegistered,
  fillOutFormSuccessfully,
  fillOutFormWithoutOneFieldPopulated,
  validateUserCantLoginWithoutAllFieldsPopulated,
} from "../support/page objects/registrationPage";

describe("registration", () => {
  beforeEach(() => {
    visitUrl();
  });

  it("should be able to register", () => {
    clickOnRegisterButton();
    fillOutFormSuccessfully(
      firstName,
      lastName,
      address,
      city,
      state,
      zipcode,
      phoneNumber,
      ssn,
      username,
      password,
      password
    );
    clickOnRegisterButtonOnRegistrationPage();
    validateUserIsSuccessfullyRegistered();
  });

  it("should not be able to register user without one field populated", () => {
    clickOnRegisterButton();
    fillOutFormWithoutOneFieldPopulated(
      firstName,
      lastName,
      address,
      city,
      state,
      zipcode,
      phoneNumber,
      ssn,
      username,
      password
    );
    clickOnRegisterButtonOnRegistrationPage();
    validateUserCantLoginWithoutAllFieldsPopulated();
  });
});
