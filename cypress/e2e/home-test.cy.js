describe("Home page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("Should render a NavBar and Footer", () => {
    cy.get(".NavBar").contains("Funky Nightshades");
    cy.get(".Footer");
  });

  it("User Story: As a user, when I visit the app, all movies should be displayed", () => {
    cy.get(".MovieContainer").find(".MiniMovieCard").should("have.length", 40);
  });

  it("Should recieve an error message if the server codes a 500", () => {
    cy.intercept("GET", "https://funky-nightshades-api.herokuapp.com/", {
      statusCode: 500,
      body: "Test 500 Error",
    });
    cy.visit("http://localhost:3000/")
      .wait(3000)
      .get(".Error")
      .should(
        "contain",
        "We apologize, there seems to have been an error with the server"
      );
  });

  it("Should recieve an error message if the server codes a 404", () => {
    cy.intercept("GET", "https://funky-nightshades-api.herokuapp.com/", {
      statusCode: 404,
      body: "Test 404 Error",
    });
    cy.visit("http://localhost:3000/")
      .wait(3000)
      .get(".Error")
      .should(
        "contain",
        "We apologize, there seems to have been an error with the server"
      );
  });
});
