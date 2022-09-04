describe("Footer", () => {
  beforeEach(() => {
    cy.visit("https://funky-nightshades-7fytt3xkw-jrmedina.vercel.app/");
  });

  it("Should not exist by default", () => {
    cy.get(".Error").should("not.exist");
  });

  it("Should only render if an error has occurred", () => {
    it("Should receive an error message if the server codes a 500", () => {
      cy.intercept("GET", "https://funky-nightshades-api.herokuapp.com/", {
        statusCode: 500,
        body: "Test 500 Error",
      });
      cy.visit("https://funky-nightshades-7fytt3xkw-jrmedina.vercel.app/")
        .wait(3000)
        .get(".Error")
        .should(
          "contain",
          "We apologize, there seems to have been an error with the server"
        );
    });
  });
});
