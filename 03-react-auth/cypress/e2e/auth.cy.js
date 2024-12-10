/* eslint-disable no-undef */
describe("Funcionalidad de Login", () => {
  it("Mi aplicación carga leyendo Home en /", () => {
    // 01. Arrange: Setup del estado inicial de la app
    cy.visit("/");

    // 02. Act: Interactuar con la app (realizar acciones)
    cy.get("h1").contains("Home"); // 03. Assert: Verificar que la app se comporta como esperamos
  });

  it("Probar el Login como CUSTOMER", () => {
    cy.intercept("POST", "https://ecommerce-json-jwt.onrender.com/login").as(
      "login"
    );
    // 01. Arrange: Setup del estado inicial de la app
    cy.visit("/login");

    // 02. Act: Interactuar con la app (realizar acciones)
    cy.login("drstrange@marvel.com", "multiverso")
      // cy.get('input[type="email"]')
      //   .type('drstrange@marvel.com')
      // cy.get('input[type="password"]')
      //   .type('multiverso')

      // cy.get('button[type="submit"]')
      .click();
    cy.wait("@login");

    // 03. Assert: Verificar que la app se comporta como esperamos
    cy.get("h1").contains("Dashboard");
  });

  it("Probar el Logout como Admin y me debe llevar a Login", () => {
    cy.intercept("POST", "https://ecommerce-json-jwt.onrender.com/login").as(
      "login"
    );
    // 01. Arrange: Setup del estado inicial de la app
    cy.visit("/login");

    // 02. Act: Interactuar con la app (realizar acciones)
    cy.login("superman@dc.com", "superman");
    // cy.get('input[type="email"]')
    //   .type('superman@dc.com')
    // cy.get('input[type="password"]')
    //   .type('superman')

    // cy.get('button[type="submit"]')
    //   .click()
    cy.wait("@login");

    cy.get("nav > ul li:last").click();

    // 03. Assert: Verificar que la app se comporta como esperamos
    // cy.get('h1').contains('Please sign in')
    cy.url().should("include", "/login");
  });
});
