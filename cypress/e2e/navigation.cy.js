/// <reference types="cypress" />

import {
  visitUrl,
  validateValidUrlIsVisited,
} from "../support/page objects/homePage";

describe("navigation", () => {
  it("should be able to navigate to valid url", () => {
    visitUrl();
    validateValidUrlIsVisited();
  });
});
