/// <reference types="cypress" />

class UpadateContactInfoPage {
  // VARIABLES

  updateContactInfoLabel = "Update Contact Info";
  addressField = '[name="customer.address.street"]';
  updateProfileButton = '[value="Update Profile"]';
  contactInfoUpdatedConfirmationMessage = "Profile Updated";

  // GETTERS

  getUpdateContactInfoButton() {
    return cy.get("a").contains(this.updateContactInfoLabel);
  }
  getAddressField() {
    return cy.get(this.addressField);
  }
  getUpdateProfileButton() {
    return cy.get(this.updateProfileButton);
  }
  getContactInfoUpdatedConfirmationMessage() {
    return cy.get("h1").contains(this.contactInfoUpdatedConfirmationMessage);
  }

  // ACTIONS

  clickOnUpdateContactInfoButton() {
    this.getUpdateContactInfoButton().click();
    cy.wait(2000);
  }
  updateAddress(newAddress) {
    this.getAddressField().clear().type(newAddress);
  }
  clickOnUpdateProfileButton() {
    this.getUpdateProfileButton().click();
    cy.wait(2000);
  }

  // ASSERTIONS

  validateContactInfoIsUpdated(newAddress) {
    this.clickOnUpdateContactInfoButton();
    this.updateAddress(newAddress);
    this.clickOnUpdateProfileButton();
    this.getContactInfoUpdatedConfirmationMessage().should("be.visible");
  }
}

export default UpadateContactInfoPage;
