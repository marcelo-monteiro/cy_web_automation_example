const YAML = require('yamljs')
const { Before } = require("@badeball/cypress-cucumber-preprocessor");

Before( () => {
    cy.readFile('cypress/fixtures/dictionary.yaml').then(content => {
        const dictionary = YAML.parse(content)
        cy.wrap(dictionary).as('elementsDictionary')
    });
 })