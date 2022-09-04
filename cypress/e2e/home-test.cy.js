describe("Home page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("Should render a header and footer", () => {
    cy.contains("Funky Nightshades");
    cy.get(".Footer");
  });

  it("User Story: As a user, when I visit the app, all movies should be displayed", () => {
    cy.get(".MovieContainer").find(".MiniMovieCard").should("have.length", 40);
  });

  it("Should recieve an error message if the server does not successfully fetch", () => {
    cy.intercept(
      "GET",
      "https://rancid-tomatillos.herokuapp.com/api/v2/movies",
      { statusCode: 500, body: "Test 500 Error" }
    );
    cy.visit("http://localhost:3000")
      .wait(3000)
      .get("h2")
      .should("contain", "We apologize there has been an error!");
  });
});
