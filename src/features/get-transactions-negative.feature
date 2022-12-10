Feature: Get Tranactions
    The correct response codes are returned from the API - negative paths

Scenario: Bad request status
    Given a user has made an invalid request
    Then it should return a response with a 400 status code

Scenario: Unorthorized status
    Given a user has attempted to access a resource that requires authentication
    Then it should return a response with a 401 status code