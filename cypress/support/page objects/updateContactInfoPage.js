/// <reference types="cypress" />

// VARIABLES

export const updateContactInfoLabel = "Update Contact Info";
export const addressField = '[name="customer.address.street"]';
export const updateProfileButton = '[value="Update Profile"]';
export const contactInfoUpdatedConfirmationMessage = "Profile Updated";
// GETTERS

export function getUpdateContactInfoButton() {
  return cy.get("a").contains(updateContactInfoLabel);
}
export function getAddressField() {
  return cy.get(addressField);
}
export function getUpdateProfileButton() {
  return cy.get(updateProfileButton);
}
export function getContactInfoUpdatedConfirmationMessage() {
  return cy.get("h1").contains(contactInfoUpdatedConfirmationMessage);
}

// ACTIONS

export function clickOnUpdateContactInfoButton() {
  getUpdateContactInfoButton().click();
  cy.wait(2000);
}
export function updateAddress(newAddress) {
  getAddressField().clear();
  getAddressField().type(newAddress);
}
export function clickOnUpdateProfileButton() {
  getUpdateProfileButton().click();
  cy.wait(2000);
}

// ASSERTIONS

export function validateContactInfoIsUpdated() {
  getContactInfoUpdatedConfirmationMessage().should("be.visible");
}
