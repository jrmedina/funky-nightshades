describe("Mini movie cards", () => {
  beforeEach(() => {
    cy.visit("https://funky-nightshades-jrmedina.vercel.app/");
  });

  it("Should render all movie posters", () => {
    cy.get(".MovieContainer").find(".MiniMovieCard").should("have.length", 40);
  });

  it("MiniMovieCards should contain an image, genre, and rating", () => {
    cy.get(".MiniMovieCard")
      .first()
      .find("img")
      .should("have.attr", "src")
      .and(
        "equal",
        "https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg"
      );
    cy.get(".MiniMovieCard").first().find("p").contains("Action");
    cy.get(".MiniMovieCard").first().find(".rating").contains("6.7");
  });

  it("Should be able to gather an ID from the poster image attribute", () => {
    cy.get(".MiniMovieCard").first().find("img").should("have.id", "694919");
  });

  it("User Story: The User can click a movie, and be redirected to a new URL", () => {
    cy.get(".MiniMovieCard").first().find("img").click();
    cy.url().should(
      "be.equal",
      "https://funky-nightshades-jrmedina.vercel.app/694919"
    );
  });
});
