describribe('Login Test',()=>{
    it('logs in usingfixture data',()=>{
        cy.fixture('example').then((example)=>{
            cy.visit(example.url);
            cy.get('#user-name').type(example.valid_username);
            cy.get('#password').type(example.valid_password);
            cy.get('#login-button').click()
        });

    });
});