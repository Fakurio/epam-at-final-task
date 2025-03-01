Feature: LoginPage
  Scenario: Login form should display error message when username and password fields are empty
    Given I open "Login" page
    When I type value into "username" form field
    And I type value into "password" form field
    And I clear "every" form field
    And I click login button
    Then Error message should be equal to "Epic sadface: Username is required"

  Scenario: Login form should display error message when only password field is empty
    Given I open "Login" page
    When I type value into "username" form field
    And I type value into "password" form field
    And I clear "password" form field
    And I click login button
    Then Error message should be equal to "Epic sadface: Password is required"