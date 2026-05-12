

describe('Add 2 Items To Cart And Checkout', () => {
  beforeEach(() => {

    cy.fixture('checkoutInfor').then((checkoutInfor) => {

      cy.visit(checkoutInfor.url);
      cy.get('#user-name').type(checkoutInfor.username);

      cy.get('#password').type(checkoutInfor.password);

      cy.get('#login-button').click();
      cy.url().should('include', '/inventory.html');
    });
  });

  it('Should add 2 items to cart and complete checkout', () => {
    cy.fixture('checkoutInfor').then((checkoutInfor) => {
      cy.get('#add-to-cart-sauce-labs-onesie').click(); 
        cy.get('#add-to-cart-sauce-labs-bolt-t-shirt').click();
      cy.get('.shopping_cart_badge').should('contain', '2');
    cy.get('.shopping_cart_link').click();
    cy.get('[data-test="checkout"]').click();
    cy.get('#first-name').type(checkoutInfor.firstName);

    cy.get('#last-name').type(checkoutInfor.lastName);

    cy.get('#postal-code').type(checkoutInfor.postalCode); 

    cy.get('[data-test="continue"]').click();
    cy.url().should('include', '/checkout-step-two.html');
    cy.get('[data-test="finish"]').click();
  });
})
});
    
    