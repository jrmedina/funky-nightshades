describe("Specific Movie Card", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("From the home page, a user should be able to click on an image and be redirected", () => {
    cy.get(".MiniMovieCard").first().find("img").click();
    cy.url().should("be.equal", "http://localhost:3000/694919");
  });

  it("User Story: Once redirected, the user should be able to see ALL movies details", () => {
    cy.visit("http://localhost:3000/694919")
      .get(".SpecificMovieCard")
      .find(".date")
      .contains("Release Date: 2020-09-29");
    cy.visit("http://localhost:3000/694919")
      .get(".SpecificMovieCard")
      .find("h1")
      .contains("Money Plane");
    cy.visit("http://localhost:3000/694919")
      .get(".SpecificMovieCard")
      .find(".tagline");
    cy.visit("http://localhost:3000/694919")
      .get(".SpecificMovieCard")
      .find(".genres")
      .contains("Action");
    cy.visit("http://localhost:3000/694919")
      .get(".SpecificMovieCard")
      .find(".overview")
      .contains(
        "A professional thief with $40 million in debt and his family's life on the line must commit one final heist - rob a futuristic airborne casino filled with the world's most dangerous criminals."
      );
    cy.visit("http://localhost:3000/694919")
      .get(".SpecificMovieCard")
      .find(".numeric")
      .contains("Budget: $0 Revenue: $0");
  });

  it(`User Story: When a movie’s details are displayed, the user should have a way to return to the main view of all movies`, () => {
    cy.visit("http://localhost:3000/694919")
      .get(".SpecificMovieCard")
      .find(".exit")
      .click();
    cy.url().should("be.equal", "http://localhost:3000/");
  });
});
