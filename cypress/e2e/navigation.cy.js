/// <reference types="cypress" />

import BasePage from "../support/pages/basePage";

const basePage = new BasePage();

describe("navigation", () => {
  it("should be able to navigate to valid url", () => {
    basePage.validateValidUrlIsVisited();
  });
});
