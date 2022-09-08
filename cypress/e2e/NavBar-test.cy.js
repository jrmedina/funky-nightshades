describe("NavBar", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("Should render a NavBar", () => {
    cy.get(".NavBar").contains("Funky Nightshades");
    cy.get(".NavBar").find("input");
  });

  it("Should recieve an error message if no results match", () => {
    cy.get(".search-box").trigger("mouseover").should("be.visible");
    cy.get('input[type="text"]').click({ force: true }).type("cheese");
    cy.get("main").find("h2").should("contain", "no matching results. . .");
  });
});
