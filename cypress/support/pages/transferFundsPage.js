/// <reference types="cypress" />

class TransferFundsPage {
  // VARIABLES

  transferFundsLabel = "Transfer Funds";
  amountField = "#amount";
  transferButton = '[value="Transfer"]';
  transferCompleteMessage = "Transfer Complete!";

  // GETTERS

  getTransferFundsButton() {
    return cy.get("a").contains(this.transferFundsLabel);
  }
  getAmountField() {
    return cy.get(this.amountField);
  }
  getTransferButton() {
    return cy.get(this.transferButton);
  }
  getTransferCompleteMessage() {
    return cy.get("h1").contains(this.transferCompleteMessage);
  }

  // ACTIONS

  clickOnTransferFundsButton() {
    this.getTransferFundsButton().click();
    cy.wait(2000);
  }
  insertAmountIntoAmountField(amount) {
    this.getAmountField().type(amount);
  }
  clickOnTransferButton() {
    this.getTransferButton().click();
    cy.wait(2000);
  }

  // ASSERTIONS

  validateFundsAreTransferred(amount) {
    this.clickOnTransferFundsButton();
    this.insertAmountIntoAmountField(amount);
    this.clickOnTransferButton();
    this.getTransferCompleteMessage().should("be.visible");
  }
}

export default TransferFundsPage;
