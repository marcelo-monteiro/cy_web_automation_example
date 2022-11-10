const { Given, When, Then, Step } = require("@badeball/cypress-cucumber-preprocessor");

Given("I am on the {string}", URL => {
    cy.visit(URL)
  })

Given("my user is already logged in", function () {
    Step(this, 'I go to the login page');
    Step(this, 'I submit a valid user data');
    Step(this, 'I am redirected to my account page');
});

Given("I click in link {string}", function (selector) {
    cy.get('@elementsDictionary').then(elements => {
        cy.get(elements[selector]).dblclick()
    })
});

Given("I click in button {string}", function (selector) {
    cy.get('@elementsDictionary').then(elements => {
        cy.get(elements[selector]).dblclick()
    })
});

Given("I expect to see the message {string}", function (string) {
    cy.contains(string);
 });