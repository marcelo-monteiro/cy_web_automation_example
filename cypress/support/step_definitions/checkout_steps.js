const { Given, When, Then, Step } = require("@badeball/cypress-cucumber-preprocessor");

Given("I add to cart a item from catalog", function () {
    cy.url().should('include', '/t/categories/sportswear')
    cy.get('@elementsDictionary').then(elements => {
        cy.get(elements['productShinedPants']).click();
        cy.get(elements['radioSmallSize']).click();
        cy.get(elements['buttonAddCart']).click();
        cy.get(elements['buttonGoCheckout']).click();
    });
    cy.url().should('include', '/checkout')
});

Given("I fill the data to finish the order", function () {
    cy.get('@elementsDictionary').then(elements => {
        cy.get(elements['buttonSaveAndContinue']).click();
        cy.url().should('include', '/checkout/delivery');
        cy.get(elements['buttonSaveAndContinue']).click();
        cy.url().should('include', '/checkout/payment')
        cy.get(elements['radioCheck']).click();
        cy.get(elements['buttonSaveAndContinue']).click();
    });
});

Given("I expect to see the success page with my Order ID", function () {
    cy.url().should('include', '/orders')
    cy.contains('Test Andela');
});