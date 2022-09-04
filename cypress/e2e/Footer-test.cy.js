describe("Footer", () => {
  beforeEach(() => {
    cy.visit("https://funky-nightshades-7fytt3xkw-jrmedina.vercel.app/");
  });

  it("Should render a Footer on page load", () => {
    cy.get(".Footer");
  });

  it("The Footer should contain the contributors names", () => {
    cy.get(".Footer").find("p").contains("Joshua Medina");
    cy.get(".Footer").find("p").contains("Michael Martinelli");
  });

  it("The Footer should contain hyperlinks to the contributors LinkedIn", () => {
    cy.get(".Footer")
      .get(".linkedinAnchor")
      .should("have.attr", "href")
      .and("equal", "https://www.linkedin.com/in/joshua-medina/");
  });

  it("The Footer should contain hyperlinks to the contributors GitHub", () => {
    cy.get(".Footer")
      .get(".githubAnchor")
      .should("have.attr", "href")
      .and("equal", "https://github.com/jrmedina");
  });
});
