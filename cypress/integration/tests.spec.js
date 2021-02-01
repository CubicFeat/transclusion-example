describe("A test suite", () => {
  it("should run a test", () => {
    cy.visit("/");
  });

  /* === Test Created with Cypress Studio === */
  it("Contain 5", function () {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit("http://localhost:4200/");
    cy.get("#mat-expansion-panel-header-4 > .mat-expansion-indicator").click();
    cy.get(".mat-expansion-panel-body > .ng-tns-c22-14").contains("5");
    /* ==== End Cypress Studio ==== */
  });
});
