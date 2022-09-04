describe("Specific Movie Card", () => {
  beforeEach(() => {
    cy.visit("https://funky-nightshades-jrmedina.vercel.app/694919");
  });

  it("User Story: Once redirected, the user should be able to see ALL movies details", () => {
    cy.get(".SpecificMovieCard")
      .find(".date")
      .contains("Release Date: 09/29/2020");
    cy.get(".SpecificMovieCard").find("h1").contains("Money Plane");
    cy.get(".SpecificMovieCard").find(".tagline").contains("Money Plane");
    cy.get(".SpecificMovieCard").find(".genres").contains("Action");
    cy.get(".SpecificMovieCard")
      .find(".overview")
      .contains(
        "A professional thief with $40 million in debt and his family's life on the line must commit one final heist - rob a futuristic airborne casino filled with the world's most dangerous criminals."
      );
    cy.get(".SpecificMovieCard")
      .find(".numeric")
      .contains("Budget: None Revenue: This movie wasn't so funky...");
  });

  it("Should have a trailer for the movie", () => {
    cy.get(".SpecificMovieCard").find(".player");
  });

  it("Should receive an error message if the server codes a 404", () => {
    cy.intercept("GET", "https://funky-nightshades-api.herokuapp.com/694919", {
      statusCode: 404,
      body: "Test 404 Error",
    });
    cy.visit("https://funky-nightshades-jrmedina.vercel.app/694919")
      .wait(3000)
      .get(".Error")
      .should(
        "contain",
        "We apologize, there seems to have been an error with the server"
      );
  });

  it(`User Story: When a movie’s details are displayed, the user should have a way to return to the main view of all movies`, () => {
    cy.get(".SpecificMovieCard").find(".exit").click();
    cy.url().should(
      "be.equal",
      "https://funky-nightshades-jrmedina.vercel.app/"
    );
  });
});
