describe("Mini movie cards", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("Should render all movie posters", () => {
    cy.get(".MovieContainer").find(".MiniMovieCard").should("have.length", 40);
  });

  it("MiniMovieCards should contain an image and rating", () => {
    cy.get(".MiniMovieCard")
      .first()
      .find("img")
      .should("have.attr", "src")
      .and(
        "equal",
        "https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg"
      );
    cy.get(".MiniMovieCard").first().find("p").contains("6.9");
  });

  it("should be able to gather an ID from the poster image attribute", () => {
    cy.get(".MiniMovieCard").first().find("img").should("have.id", "694919");
  });

  it("User Story: The User can click a movie, and be redirected to a new URL", () => {
    cy.get(".MiniMovieCard").first().find("img").click();
    cy.url().should("be.equal", "http://localhost:3000/694919");
  });
});
