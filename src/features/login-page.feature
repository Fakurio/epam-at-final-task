Feature: LoginPage

  Scenario Outline: Login form should display error message when username and password fields are empty
    Given I open "Login" page
    When I type "<Username>" into "username" form field
    And I type "<Password>" into "password" form field
    And I clear "every" form field
    And I click login button
    Then Error message should be equal to "Epic sadface: Username is required"

    Examples:
      | Username | Password |
      | user_1   | password1|

  Scenario Outline: Login form should display error message when only password field is empty
    Given I open "Login" page
    When I type "<Username>" into "username" form field
    And I type "<Password>" into "password" form field
    And I clear "password" form field
    And I click login button
    Then Error message should be equal to "Epic sadface: Password is required"

    Examples:
      | Username | Password |
      | user_1   | password1|

  Scenario Outline: Login page should redirect to Dashboard page after properly filling form
    Given I open "Login" page
    When I type "<Username>" into "username" form field
    And I type "<Password>" into "password" form field
    And I click login button
    Then I will see Dashboard page's header with "Swag Labs" title

    Examples:
      | Username                 | Password     |
      | standard_user            | secret_sauce |
      | problem_user             | secret_sauce |






