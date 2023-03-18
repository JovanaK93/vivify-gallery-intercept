class AllGalleries {
  get allGalleriesLink() {
    return cy.get("a[href='/']");
  }

  get searchInput() {
    return cy.get(".form-control");
  }

  get headerOfHomePage() {
    return cy.get("#navbarTogglerDemo01");
  }

  get searchSubmitButton() {
    return cy.get("button").first();
  }

  get loadMoreBtn() {
    return cy.get("button").last();
  }

  get allGalleries() {
    return cy.get(".grid").children();
  }

  get singleGallery() {
    return cy.get(".cell").first();
  }

  get singleGalleryHeading() {
    return this.singleGallery.find("h2");
  }

  get getToSpecifiedGallery() {
    return cy.get(".box-title");
  }

  get carouselNextButton() {
    return cy.get(".carousel-control-next");
  }

  get carouselPreviousButton() {
    return cy.get(".carousel-control-prev-icon");
  }

  get headingStyleProperties() {
    return cy.get(".title-style");
  }

  get commentGallery() {
    return cy.get("textarea");
  }

  get commentTitle() {
    return cy.get(".comments-section");
  }

  get commentSection() {
    return cy.get(".form-group");
  }

  get commentingTextArea() {
    return this.commentSection.find("textarea");
  }

  search(param) {
    this.searchInput.type(param);
    this.searchSubmitButton.click();
  }
}

export const allGalleries = new AllGalleries();
