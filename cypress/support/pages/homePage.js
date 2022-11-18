/// <reference types="cypress" />

class HomePage {
  // VARIABLES

  usernameField = '[name="username"]';
  passwordField = '[type="password"]';
  loginButton = '[value="Log In"]';
  logOutLabel = "Log Out";

  // GETTERS

  getUsernameField() {
    return cy.get(this.usernameField);
  }
  getPasswordField() {
    return cy.get(this.passwordField);
  }
  getLoginButton() {
    return cy.get(this.loginButton);
  }
  getLogOutButton() {
    return cy.get("a").contains(this.logOutLabel);
  }

  // ACTIONS

  clickOnLoginButton() {
    this.getLoginButton().click();
  }
  clickOnLogOutButton() {
    this.getLogOutButton().click();
  }

  logInUser(username, password) {
    this.getUsernameField().type(username);
    this.getPasswordField().type(password);
    this.getLoginButton().click();
  }

  // ASSERTIONS

  validateUserIsSuccessfullyLoggedIn(username, password) {
    this.logInUser(username, password);
    this.getLogOutButton().should("be.visible");
  }
  validateUserIsSuccessfullyLoggedOut(username, password) {
    this.logInUser(username, password);
    this.clickOnLogOutButton();
    this.getLoginButton().should("be.visible");
  }
}

export default HomePage;
