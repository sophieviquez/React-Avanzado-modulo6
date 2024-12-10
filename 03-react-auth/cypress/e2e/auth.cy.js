/* */

describe("Funcionalidad de Login", () => {
  it("Mi aplicacion carga leyendo Home en /", () => {
    cy.visit("/");

    cy.get("h1").contains("Home");
  });
});
