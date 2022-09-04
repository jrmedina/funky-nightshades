describe("Home page", () => {
  beforeEach(() => {
    cy.visit("https://funky-nightshades-jrmedina.vercel.app/");
  });

  it("Should render a NavBar and Footer", () => {
    cy.get(".NavBar").contains("Funky Nightshades");
    cy.get(".Footer");
  });

  it("User Story: As a user, when I visit the app, all movies should be displayed", () => {
    cy.get(".MovieContainer").find(".MiniMovieCard").should("have.length", 40);
  });

  it("Should receive an error message if the server codes a 500", () => {
    cy.intercept("GET", "https://funky-nightshades-api.herokuapp.com/", {
      statusCode: 500,
      body: "Test 500 Error",
    });
    cy.visit("https://funky-nightshades-jrmedina.vercel.app/")
      .wait(3000)
      .get(".Error")
      .should(
        "contain",
        "We apologize, there seems to have been an error with the server"
      );
  });

  it("Should receive an error message if the server codes a 404", () => {
    cy.intercept("GET", "https://funky-nightshades-api.herokuapp.com/", {
      statusCode: 404,
      body: "Test 404 Error",
    });
    cy.visit("https://funky-nightshades-jrmedina.vercel.app/")
      .wait(3000)
      .get(".Error")
      .should(
        "contain",
        "We apologize, there seems to have been an error with the server"
      );
  });

  it("From the home page, a user should be able to click on an image and be redirected", () => {
    cy.get(".MiniMovieCard").first().find("img").click();
    cy.url().should(
      "be.equal",
      "https://funky-nightshades-jrmedina.vercel.app/694919"
    );
  });
});
