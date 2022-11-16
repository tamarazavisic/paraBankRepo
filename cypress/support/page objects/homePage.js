/// <reference types="cypress" />

// VARIABLES

export const registerLabel = "Register";
export const usernameField = '[name="username"]';
export const passwordField = '[type="password"]';
export const loginButton = '[value="Log In"]';
export const logOutLabel = "Log Out";

// GETTERS

export function getUsernameField() {
  return cy.get(usernameField);
}
export function getPasswordField() {
  return cy.get(passwordField);
}
export function getLoginButton() {
  return cy.get(loginButton);
}
export function getRegisterButton() {
  return cy.get("a").contains(registerLabel);
}
export function getLogOutButton() {
  return cy.get("a").contains(logOutLabel);
}

// ACTIONS

export function visitUrl() {
  cy.visit(Cypress.env("baseUrl"));
}
export function insertUsername(username) {
  getUsernameField().type(username);
}
export function insertPassword(password) {
  getPasswordField().type(password);
}
export function clickOnLoginButton() {
  getLoginButton().click();
}
export function clickOnRegisterButton() {
  getRegisterButton().click();
}
export function clickOnLogOutButton() {
  getLogOutButton().click();
}

export function logIn(username, password) {
  getUsernameField().type(username);
  getPasswordField().type(password);
  getLoginButton().click();
}

// ASSERTIONS

export function validateValidUrlIsVisited() {
  cy.url().should("eq", Cypress.env("baseUrl"));
}
export function validateUserIsSuccessfullyLoggedIn() {
  getLogOutButton().should("be.visible");
}
export function validateUserIsSuccessfullyLoggedOut() {
  getLoginButton().should("be.visible");
}
