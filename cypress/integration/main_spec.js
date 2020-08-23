describe("filter coins", () => {
  it("should return 0 rows when type unknown coin", () => {
    cy.visit("http://localhost:8080/");
    cy.get('input[type="text"]').type("xrpx");

    cy.get('[data-testid="tableRow"]').should("have.length", 0);
  });

  it("should return 1 row when open BTC tab and print XRP", () => {
    cy.visit("http://localhost:8080/");
    cy.get('input[type="text"]').type("xrp");
    cy.get('[data-testid="btcTab"]').click();

    cy.get('[data-testid="tableRow"]').should("have.length", 1);
  });
});

describe("favorite", () => {
  it("should correct add to favorite", () => {
    cy.visit("http://localhost:8080/");
    cy.get('[data-testid="favoriteIcon"]').first().click();

    cy.get('[data-testid="favoriteTab"]').click();
    cy.get('[data-testid="tableRow"]').should("have.length", 1);
  });

  it("should correct remove from favorite", () => {
    cy.visit("http://localhost:8080/");
    cy.get('[data-testid="favoriteIcon"]').first().click();

    cy.get('[data-testid="favoriteTab"]').click();
    cy.get('[data-testid="favoriteIcon"]').first().click();

    cy.get('[data-testid="tableRow"]').should("have.length", 0);
  });
});
