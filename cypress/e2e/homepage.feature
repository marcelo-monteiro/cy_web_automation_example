Feature: Validate an e-commerce homepage functionalities

Background: I am on the ecommerce homepage
    Given I am on the "https://demo.spreecommerce.org/"

  Scenario: Login with valid user
    When I go to the login page
    And I submit a valid user data
    Then I am redirected to my account page

  Scenario: Try to validate with invalid user data
    When I go to the login page
    And I submit an invalid user data
    Then I expect to see the message "Invalid email or password."

  Scenario: Reset password
    When I go to the login page
    And I click in link "linkForgotYourPass"
    And I submit my email to reset my password
    Then I expect to see the message "You will receive an email with instructions about how to reset your password in a few minutes."