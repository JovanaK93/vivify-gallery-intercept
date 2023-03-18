class CreateGallery {
  get createGalleryLink() {
    return cy.get("a[href='/create']");
  }
  get galleryNameInput() {
    return cy.get("#title");
  }
  get galleryDescription() {
    return cy.get("#description");
  }
  get imgUrl() {
    return cy.get(".form-control");
  }
  get addImageBtn() {
    return cy.get("button").eq(-3);
  }
  get submitBtn() {
    return cy.get("button").eq(-1);
  }

  createGallery(galleryName, galleryDescription, imgUrl) {
    this.createGalleryLink.click();
    this.galleryNameInput.type(galleryName);
    this.galleryDescription.type(galleryDescription);
    this.imgUrl.type(imgUrl);
    // this.addImageBtn.click();
    this.submitBtn.click();
  }
}

export const createGallery = new CreateGallery();
