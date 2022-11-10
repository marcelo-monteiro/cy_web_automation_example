Feature: Validate a user journey 

Background: I am on the ecommerce homepage
    Given I am on the "https://demo.spreecommerce.org/"
    And my user is already logged in

  Scenario: Add a item in cart and proceed to checkout
    When I click in link "sportsWear"
    And I add to cart a item from catalog
    Then I fill the data to finish the order
    And I expect to see the success page with my Order ID
