# Automated Web Tests Suite
These tests suit runs only in local environment.
All depencies must be install locally:

```sh
yarn install
```

Nodejs version required for running tests: >=16.10.0

On this project the reporter used is Allure. To install it execute the following command:
```sh
npm i -g allure-commandline
```


**Tests Structure**

```sh
├── cypress
│   ├── downloads
│   ├── e2e
│   │   ├── checkout.feature
│   │   └── homepage.feature
│   ├── fixtures
│   │   ├── dictionary.yaml
│   │   └── example.json
│   ├── screenshots
│   │   └── homepage.feature
│   ├── support
│   │   ├── commands.js
│   │   ├── e2e.js
│   │   └── step_definitions
│   │       ├── checkout_steps.js
│   │       ├── commom_steps.js
│   │       ├── homepage_steps.js
│   │       └── hooks.js
│   └── videos
├── cypress.config.js
├── package.json
├── readme.md
└── yarn.lock
```


## Running Front-End Tests

All dependencies for tests are listed in package.json, which will be installed running yarn command.

All tests will performed in Chrome browser, defined as default on package.json scripts. 

To perform front-end tests please run the following commands on the root directory, after installing all dependecies:

```sh
# Open Cypress to execute tests on GUI 
$ yarn open 

# To run e2e tests with report
$ yarn tests:report
```

##### Maintainability

The tests were scripted using "dictionary.yaml" for selectors, to keep an easy-to-update pattern when handling code changes.

#### Opening the report

For front-end test suite, the reports are generated using Allure (depencies listed on package.json), but it requires JDK in order to open the report correctly.
After performing the front-end tests, executing the commands bellow, will open the report in your browser:

```sh
# To open report 
$ allure server
```

## Next Steps

This project only covers a few basic scenarios and should be complemented with other scenarios like negative tests, and other critical scenarios like user registration and search items in the catalog. 
It's possible to create tags that helps excuting specified scenarios or a test suite like a regression test.

This structure does not use complex solutions like OOO, componentization, and other design principles.
E.g: For the register and login functionalities it is possible to create a Class to perform these methods and use them in the tests, without duplicating code lines.

Also is possible to run this tests in a isolated environment using Docker, which is recomendable and more reliable for preventing enviroments errors, like dependencies and libraries.