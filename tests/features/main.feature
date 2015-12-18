# features/main.feature

Feature: Main
  As a user of GitHub pipeline application
  I want to be able to see a list of users
  So that I can have an idea about who's registered on github

  Scenario: Viewing users list
    Given I am on a main page
    Then I should see "Accounts" as the page title