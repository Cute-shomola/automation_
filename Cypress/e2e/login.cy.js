describe('SauceDemo Login & Cart Tests', () => {

  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/');
  });
  it('TC01 - Login with valid credentials', () => {
    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('secret_sauce');
    cy.get('#login-button').click();
    cy.url().should('include', '/inventory.html');
    cy.get('.title').should('contain', 'Products');
  });
  it('TC02 - Login with invalid password', () => {
    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('wrong_password');
    cy.get('#login-button').click();
    cy.get('[data-test="error"]').should('be.visible');
    cy.get('[data-test="error"]').should('contain', 'Username and password do not match');
  });
  it('TC03 - Login with empty fields', () => {
    cy.get('#login-button').click();
    cy.get('[data-test="error"]').should('be.visible');
    cy.get('[data-test="error"]').should('contain', 'Username is required');
  });
  it('TC04 - Add Backpack to cart after login', () => {
    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('secret_sauce');
    cy.get('#login-button').click();
    cy.get('#add-to-cart-sauce-labs-backpack').click();
    cy.get('.shopping_cart_badge').should('contain', '1');
    cy.get('#remove-sauce-labs-backpack').should('be.visible');
  });
  it('TC05 - Add Backpack and Bike Light to cart', () => {
    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('secret_sauce');
    cy.get('#login-button').click();
    cy.get('#add-to-cart-sauce-labs-backpack').click();
    cy.get('#add-to-cart-sauce-labs-bike-light').click();

    cy.get('.shopping_cart_badge').should('contain', '2');

    cy.get('#remove-sauce-labs-backpack').should('be.visible');
    cy.get('#remove-sauce-labs-bike-light').should('be.visible');
  });
});   