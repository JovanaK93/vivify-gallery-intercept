import { registerPage } from "../page_object/registerPage";

describe("describe test", () => {
  let userData = {
    firstName: "Jovana",
    lastName: "Kolarski Begonja",
    email: "test2612@test.comm",
    pass: "test1234",
  };

  beforeEach("visit app and click on register link", () => {
    cy.visit("https://gallery-app.vivifyideas.com/");
    registerPage.registerLink.click();
  });
  it("register with V data", () => {
    registerPage.registerWithValidData(
      userData.firstName,
      userData.lastName,
      userData.email,
      userData.pass
    );
  });
});
