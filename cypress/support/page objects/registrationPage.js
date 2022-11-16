/// <reference types="cypress" />

// VARIABLES

export const firstNameField = '[name="customer.firstName"]'; // there is an ID for all of these elements, but for some reason, it wont catch them
export const lastNameField = '[name="customer.lastName"]';
export const addressField = '[name="customer.address.street"]';
export const cityField = '[name="customer.address.city"]';
export const stateField = '[name="customer.address.state"]';
export const zipCodeField = '[name="customer.address.zipCode"]';
export const phoneNumberField = '[name="customer.phoneNumber"]';
export const ssnField = '[name="customer.ssn"]';
export const usernameField = '[name="customer.username"]';
export const passwordField = '[name="customer.password"]';
export const confirmPasswordField = '[name="repeatedPassword"]';
export const registerButton = '[colspan="2"] > .button';
export const logOutLabel = "Log Out";
export const passwordConfirmationErrorMessage =
  "Password confirmation is required.";

// GETTERS

export function getFirstNameField() {
  return cy.get(firstNameField);
}
export function getLastNameField() {
  return cy.get(lastNameField);
}
export function getAddressField() {
  return cy.get(addressField);
}
export function getCityField() {
  return cy.get(cityField);
}
export function getStateField() {
  return cy.get(stateField);
}
export function getZipCodeField() {
  return cy.get(zipCodeField);
}
export function getPhoneNumberField() {
  return cy.get(phoneNumberField);
}
export function getSsnField() {
  return cy.get(ssnField);
}
export function getUsernameField() {
  return cy.get(usernameField);
}
export function getPasswordField() {
  return cy.get(passwordField);
}
export function getConfirmPasswordField() {
  return cy.get(confirmPasswordField);
}
export function getRegisterButton() {
  return cy.get(registerButton);
}
export function getLogOutButton() {
  return cy.get("a").contains(logOutLabel);
}
export function getPasswordConfirmationErrorMessage() {
  return cy.get("span").contains(passwordConfirmationErrorMessage);
}

// ACTIONS

export function fillOutFormSuccessfully(
  firstName,
  lastName,
  address,
  city,
  state,
  zipCode,
  phoneNumber,
  ssn,
  username,
  password,
  confirmPassword
) {
  getFirstNameField().type(firstName);
  getLastNameField().type(lastName);
  getAddressField().type(address);
  getCityField().type(city);
  getStateField().type(state);
  getZipCodeField().type(zipCode);
  getPhoneNumberField().type(phoneNumber);
  getSsnField().type(ssn);
  getUsernameField().type(username);
  getPasswordField().type(password);
  getConfirmPasswordField().type(confirmPassword);
}

// Is there a way we can do this differently, to fill out all fields but one? ->

export function fillOutFormWithoutOneFieldPopulated(
  firstName,
  lastName,
  address,
  city,
  state,
  zipCode,
  phoneNumber,
  ssn,
  username,
  password
) {
  getFirstNameField().type(firstName);
  getLastNameField().type(lastName);
  getAddressField().type(address);
  getCityField().type(city);
  getStateField().type(state);
  getZipCodeField().type(zipCode);
  getPhoneNumberField().type(phoneNumber);
  getSsnField().type(ssn);
  getUsernameField().type(username);
  getPasswordField().type(password);
}

export function clickOnRegisterButtonOnRegistrationPage() {
  getRegisterButton().click();
}

// ASSERTIONS

export function validateUserIsSuccessfullyRegistered() {
  getLogOutButton().should("be.visible");
}

export function validateUserCantRegisterWithoutAllFieldsPopulated() {
  getLogOutButton().should("not.exist");
}
