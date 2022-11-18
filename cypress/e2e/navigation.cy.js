/// <reference types="cypress" />

import BasePage from "../support/pages/basePage";

describe("navigation", () => {
  const basePage = new BasePage();

  it("should be able to navigate to valid url", () => {
    basePage.validateValidUrlIsVisited();
  });
});
