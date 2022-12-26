/// <reference types="cypress" />

import { faker } from "@faker-js/faker";

class RegistrationPage {
  // VARIABLES

  registerLabel = "Register";
  firstNameField = '[name="customer.firstName"]';
  lastNameField = '[name="customer.lastName"]';
  addressField = '[name="customer.address.street"]';
  cityField = '[name="customer.address.city"]';
  stateField = '[name="customer.address.state"]';
  zipCodeField = '[name="customer.address.zipCode"]';
  phoneNumberField = '[name="customer.phoneNumber"]';
  ssnField = '[name="customer.ssn"]';
  usernameField = '[name="customer.username"]';
  passwordField = '[name="customer.password"]';
  confirmPasswordField = '[name="repeatedPassword"]';
  registerButton = '[colspan="2"] > .button';
  logOutLabel = "Log Out";
  passwordConfirmationErrorMessage = "Password confirmation is required.";

  // GETTERS

  getRegisterLink() {
    return cy.get("a").contains(this.registerLabel);
  }
  getFirstNameField() {
    return cy.get(this.firstNameField);
  }
  getLastNameField() {
    return cy.get(this.lastNameField);
  }
  getAddressField() {
    return cy.get(this.addressField);
  }
  getCityField() {
    return cy.get(this.cityField);
  }
  getStateField() {
    return cy.get(this.stateField);
  }
  getZipCodeField() {
    return cy.get(this.zipCodeField);
  }
  getPhoneNumberField() {
    return cy.get(this.phoneNumberField);
  }
  getSsnField() {
    return cy.get(this.ssnField);
  }
  getUsernameField() {
    return cy.get(this.usernameField);
  }
  getPasswordField() {
    return cy.get(this.passwordField);
  }
  getConfirmPasswordField() {
    return cy.get(this.confirmPasswordField);
  }
  getRegisterButton() {
    return cy.get(this.registerButton);
  }
  getLogOutButton() {
    return cy.get("a").contains(this.logOutLabel);
  }
  getPasswordConfirmationErrorMessage() {
    return cy.get("span").contains(this.passwordConfirmationErrorMessage);
  }

  // ACTIONS

  clickOnRegisterLink() {
    this.getRegisterLink().click();
  }
  fillOutAllFieldsInTheForm() {
    this.getFirstNameField().type(faker.name.firstName());
    this.getLastNameField().type(faker.name.lastName());
    this.getAddressField().type(faker.address.street());
    this.getCityField().type(faker.address.city());
    this.getStateField().type(faker.address.state());
    this.getZipCodeField().type(faker.address.zipCode());
    this.getPhoneNumberField().type(faker.phone.phoneNumber());
    this.getSsnField().type(faker.finance.creditCardNumber());
    this.getUsernameField().type(faker.internet.userName());
    this.getPasswordField().type(faker.internet.password());
    this.getConfirmPasswordField().type(faker.internet.password());
  }
  fillOutFormWithoutConfirmPasswordFieldPopulated() {
    this.getFirstNameField().type(faker.name.firstName());
    this.getLastNameField().type(faker.name.lastName());
    this.getAddressField().type(faker.address.street());
    this.getCityField().type(faker.address.city());
    this.getStateField().type(faker.address.state());
    this.getZipCodeField().type(faker.address.zipCode());
    this.getPhoneNumberField().type(faker.phone.phoneNumber());
    this.getSsnField().type(faker.finance.creditCardNumber());
    this.getUsernameField().type(faker.internet.userName());
    this.getPasswordField().type(faker.internet.password());
  }
  clickOnRegisterButton() {
    this.getRegisterButton().click();
  }

  // ASSERTIONS

  validateUserIsSuccessfullyRegistered() {
    this.clickOnRegisterLink();
    this.fillOutAllFieldsInTheForm();
    this.clickOnRegisterButton();
    this.getLogOutButton().should("be.visible");
  }

  validateUserCantRegisterWithoutAllFieldsPopulated() {
    this.clickOnRegisterLink();
    this.fillOutFormWithoutConfirmPasswordFieldPopulated();
    this.clickOnRegisterButton();
    this.getLogOutButton().should("not.exist");
  }
}

export default RegistrationPage;
