describe("Home page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("should render a correct header and footer", () => {
    cy.contains("Funky Nightshades");
    cy.get(".Footer");
  });

  it("User Story: As a user, when I visit the app, all movies should be displayed", () => {
    cy.get(".MovieContainer").find(".MiniMovieCard").should("have.length", 40);
  });

  it("should be able to gather an ID from the poster image attribute", () => {
    cy.get(".MiniMovieCard").first().find("img").should("have.id", "694919");
  });

  it("User Story: The User can click a movie, and be redirected to a new URL", () => {
    cy.get(".MiniMovieCard").first().find("img").click();
    cy.url().should("be.equal", "http://localhost:3000/694919");
  });

  it("User Story: Once redirected, the user should be able to see more of the movies details", () => {
    cy.visit("http://localhost:3000/694919")
      .get(".SpecificMovieCard")
      .find(".date")
      .contains("Release Date: 2020-09-29");
  });

  it(`User Story: When a movie’s details are displayed, the user should have a way to return to the main view of all movies`, () => {
    cy.visit("http://localhost:3000/694919")
      .get(".SpecificMovieCard")
      .find(".exit")
      .click();
    cy.url().should("be.equal", "http://localhost:3000/");
  });
});



