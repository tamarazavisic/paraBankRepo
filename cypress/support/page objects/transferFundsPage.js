/// <reference types="cypress" />

// VARIABLES

export const transferFundsLabel = "Transfer Funds";
export const amountField = "#amount";
export const transferButton = '[value="Transfer"]';
export const transferCompleteMessage = "Transfer Complete!";

// GETTERS

export function getTransferFundsButton() {
  return cy.get("a").contains(transferFundsLabel);
}
export function getAmountField() {
  return cy.get(amountField);
}
export function getTransferButton() {
  return cy.get(transferButton);
}
export function getTransferCompleteMessage() {
  return cy.get("h1").contains(transferCompleteMessage);
}

// ACTIONS

export function clickOnTransferFundsButton() {
  getTransferFundsButton().click();
}
export function insertAmount(amount) {
  getAmountField().type(amount);
}
export function clickOnTransferButton() {
  getTransferButton().click();
}

// ASSERTIONS

export function validateFundsAreTransferred() {
  getTransferCompleteMessage().should("be.visible");
}
