describe('SauceDemo Product Sorting Tests', () => {

  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/');
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('[data-test="login-button"]').click();
    cy.url().should('include', 'inventory.html');
  });

  it('Should sort products by Price: Low to High', () => {
    cy.get('[data-test="product-sort-container"]')
      .select('lohi');
    cy.get('.inventory_item_price')
      .then(($prices) => {
      });
  });

  it('Should sort products from Z to A', () => {
    cy.get('[data-test="product-sort-container"]')
      .select('za');
    cy.get('.inventory_item_name')
      .then(($items) => {

        const actualNames = [...$items].map(item =>
          item.innerText.trim()
        );
        const sortedNames = [...actualNames].sort().reverse();
        expect(actualNames).to.deep.equal(sortedNames);
      });
  });
});