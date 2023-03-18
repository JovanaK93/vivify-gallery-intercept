import { registerPage } from "../page_object/registerPage";
import { faker } from "@faker-js/faker";
import { loginPage } from "../page_object/loginPage";
describe("describe test", () => {
  let userData = {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    email: faker.internet.email(),
    pass: faker.lorem.word(8) + 1,
  };

  let userData1 = {
    firstName: " ",
    lastName: "Kolarski Begonja",
    email: "test2612@test.com",
    pass: "test1234",
  };

  let userData2 = {
    firstName: "Jovana",
    lastName: " ",
    email: "test2612@test.com",
    pass: "test1234",
  };

  let userData3 = {
    firstName: "Jovana",
    lastName: "Kolarski Begonja",
    email: " ",
    pass: "test1234",
  };

  let userData4 = {
    firstName: "Jovana",
    lastName: "Kolarski Begonja",
    email: "test2612@test.com",
    pass: " ",
  };

  beforeEach("visit app and click on register link", () => {
    cy.visit("https://gallery-app.vivifyideas.com/");
    registerPage.registerLink.click();
  });

  it("register test", () => {
    registerPage.registerData(
      // cy.visit("https://gallery-app.vivifyideas.com/");
      // cy.get(locators.navbar.registerButton).click();
      userData.firstName,
      userData.lastName,
      userData.email,
      userData.pass
    );
  });

  it("register without first name", () => {
    registerPage.registerData(
      userData1.firstName,
      userData1.lastName,
      userData1.email,
      userData1.pass
    );
  });

  it("register without last name", () => {
    registerPage.registerData(
      userData2.firstName,
      userData2.lastName,
      userData2.email,
      userData2.pass
    );
  });

  it("register without email", () => {
    registerPage.registerData(
      userData3.firstName,
      userData3.lastName,
      userData3.email,
      userData3.pass
    );
  });

  it("register without pass", () => {
    registerPage.registerData(
      userData4.firstName,
      userData4.lastName,
      userData4.email,
      userData4.pass
    );
  });

  it.only("register throught back", () => {
    cy.registerViaBack(
      userData.firstName,
      userData.lastName,
      userData.email,
      userData.pass
    );
    cy.visit("/login");
    loginPage.login(userData.email, userData.pass);
  });
});
