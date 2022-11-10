const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");

When("I go to the login page", () => {
  cy.get('@elementsDictionary').then(elements => {
    cy.get(elements['dropdownLogin']).click();
    cy.get(elements['loginButton']).click();
  })
})

When("I submit a valid user data", function () {
  cy.get('@elementsDictionary').then(elements => {
    cy.get(elements['inputUserEmail']).type('test_andela@putsbox.com');
    cy.get(elements['inputPassword']).type('teste123');
    cy.get(elements['submitLogin']).click();
  })
});

Given("I am redirected to my account page", function () {
  cy.url().should('include', '/account')
  cy.contains('test_andela@putsbox.com');
  });

When("I submit an invalid user data", function () {
  cy.get('@elementsDictionary').then(elements => {
    cy.get(elements['inputUserEmail']).type('invalid_user@jmeow.com');
    cy.get(elements['inputPassword']).type('useless123');
    cy.get(elements['submitLogin']).click();
  })
});

Given("I submit my email to reset my password", function () {
  cy.url().should('include', '/password/recover')
  cy.get('@elementsDictionary').then(elements => {
    cy.get(elements['inputResetPassword']).type('test_andela@putsbox.com');
    cy.get(elements['buttonResetPassword']).click();
  })
});
