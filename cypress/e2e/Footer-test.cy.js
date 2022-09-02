describe("Footer", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("should render a footer on page load", () => {
    cy.get(".Footer");
  });
});
