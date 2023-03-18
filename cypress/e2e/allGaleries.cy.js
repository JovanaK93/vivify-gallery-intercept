/// <reference types="Cypress" />

import { allGalleries } from "../page_object/allGalleries";
import { loginPage } from "../page_object/loginPage";

const credentials = {
  email: "test2612@test.com",
  password: "test1234",
};

describe("all galleries page test", () => {
  beforeEach("visit app and login", () => {
    cy.visit("/login");
    loginPage.login(credentials.email, credentials.password);
    cy.url().should("not.include", "/login");
  });

  // it("loads page succesfuly", () => {
  //   loginPage.loginPageHeading
  //     .should("be.visible")
  //     .and("exist")
  //     .and("have.text", "All Galleries");

  //   allGalleries.allGalleries.should("be.visible").and("have.length", 10);

  //   allGalleries.singleGallery.find("img").should("be.visible");

  //   allGalleries.headerOfHomePage.should("be.visible");
  // });

  it("test pagination", () => {
    allGalleries.allGalleries.should("be.visible").and("have.length", 10);
    allGalleries.loadMoreBtn.click();
    allGalleries.allGalleries.should("be.visible").and("have.length", 20);
    allGalleries.loadMoreBtn.click();
    allGalleries.allGalleries.should("be.visible").and("have.length", 30);
    allGalleries.loadMoreBtn.click();
    allGalleries.allGalleries.should("be.visible").and("have.length", 40);
  });

  it("test search", () => {
    let searchTerm = "Gallery with 2 images";

    allGalleries.search(searchTerm);
    allGalleries.allGalleries.should("be.visible").and("have.length", 6);
    allGalleries.singleGallery.find("a").first().click();
    cy.get("h1").should("be.visible").and("have.text", searchTerm);
  });

  it.only("single gallery preview", () => {
    allGalleries.singleGallery.find("a").first().click();
    allGalleries.commentTitle.should("have.text", "Comments: ");
    allGalleries.headingStyleProperties
      .should("be.visible")
      .and("have.css", "font-size", "45px")
      .and("have.css", "color", "rgb(72, 73, 75)")
      .and("have.css", "text-align", "center")
      .and("have.css", "font-weight", "900");
    allGalleries.carouselNextButton
      .should("be.visible")
      .and("have.css", "opacity", "0.5");
    allGalleries.carouselNextButton.dblclick();
    allGalleries.carouselPreviousButton
      .should("be.visible")
      .and("have.css", "opacity", "1");
    allGalleries.carouselPreviousButton.click();
    // allGalleries.commentPlaceholder.find("textarea").click();
    allGalleries.commentPlaceholder
      .should("exist")
      .and("have.prop", "rows", 7)
      .and("have.prop", "cols", 10);
  });
});
