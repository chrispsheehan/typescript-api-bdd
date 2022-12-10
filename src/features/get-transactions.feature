Feature: Get Tranactions
    The correct response codes are returned from the API - negative paths

Background: A valid request is made
    Given a user has made a valid transaction request

Scenario: Response is valid
    Then valid items are discovered