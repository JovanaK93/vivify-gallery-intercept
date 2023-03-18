const locators = require("../fixtures/locators.json");

describe("describe test", () => {
  let userData = {
    email: "test2612@test.com",
    pass: "test1234",
  };

  before("visit app and click on login link", () => {
    cy.loginViaBack();
  });
  it("login test", () => {
    // cy.visit("https://gallery-app.vivifyideas.com/");
    // cy.get(locators.navbar.loginButton).click();
    cy.get(locators.common.emailInput).type(userData.email);
    cy.get(locators.common.passwordInput).type(userData.pass);
    cy.get(locators.common.submitButton).click();
    cy.get(".nav-link").eq(3).click();
  });
  // it("commenting picture", () => {
  //   cy.visit("https://gallery-app.vivifyideas.com/");
  //   cy.visit("https://gallery-app.vivifyideas.com/");
  //   cy.get('a[href="/login"]').click();
  //   cy.get("#email").type("test2612@test.com");
  //   cy.get("#password").type("test1234");
  //   cy.get("button").click();
  //   cy.get("a[href='/galleries/377']").click();
  //   cy.get("textarea").type("neki komentar");
  //   cy.get("button").click();
  // });
});
