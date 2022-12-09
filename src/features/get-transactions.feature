Feature: Get Tranactions

Scenario: OK status
    Given a user has made a valid request to the API
    When the API receives the request
    Then it should return a response with a '200' status code

Scenario: Bad request status
    Given a user has made an invalid request to the API
    When the API receives the request
    Then it should return a response with a '400' status code

Scenario: Unorthorized status
    Given a user has attempted to access a resource that requires authentication
    When the API receives the request
    Then it should return a response with a '401' status code

Scenario: Forbidden status
    Given a user has attempted to access a resource that they do not have permission to access
    When the API receives the request
    Then it should return a response with a '403' status code