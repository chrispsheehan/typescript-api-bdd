Feature: Get Tranactions
    The correct response codes are returned from the API - negative paths

Background: A valid request is made
    Given a user has made a valid transaction request
    Then it should return a response with a 200 status code

Scenario: Response is valid
    Then valid items are discovered