/// <reference types="Cypress" />

import { loginPage } from "../page_object/loginPage";
import { createGallery } from "../page_object/createGallery";
import { faker } from "@faker-js/faker";

let credentials = {
  email: "test2612@test.com",
  password: "test1234",
};

describe("create gallery test", () => {
  beforeEach("visist app and log in", () => {
    // cy.visit("/login");
    // loginPage.login(credentials.email, credentials.password);
    // cy.url().should("not.include", "/login");
    // cy.request({
    //   method: "POST",
    //   url: "https://gallery-api.vivifyideas.com/api/auth/login",
    //   body: {
    //     email: "test2612@test.com",
    //     password: "test1234",
    //   },
    // })
    //   .its("body")
    //   .then((response) => {
    //     window.localStorage.setItem("token", response.access_token);
    //   });
    cy.loginViaBack();
  });

  it("create gallery", () => {
    cy.intercept({
      method: "POST",
    });
    cy.visit("/create");
    createGallery.createGalleryLink.click();
    createGallery.createGalleryHeading;
  });
});
