Feature: Get Tranactions
    Contract test for a valid user journey

Background: A valid request is made
    Given a user has made a valid transaction request
    Then it should return a response with a 200 status code

Scenario: Response is valid
    Then valid items are discovered


# A version 2.0 would make use of Scenario Outlines to pass in a list of items