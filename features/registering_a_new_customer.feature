Feature: Registering a new customer

    Background:
        Given Acme's compliance system requires customers to be at least 18 years old

    Scenario: Customer cannot be registered if their name is not in the phone directory
        Given "Jon" is not listed in the Greater London telephone directory
        When "Jon" tries to register for Acme Systems
        Then "Jon" should be told they cannot be registered because they are not listed
        And "Jon" should not be registered with Acme Systems

    Scenario: Customer cannot be registered if they are not compliant with Acme's rules
        Given Jon is listed in the Greater London telephone directory
        But Jon is only 16 years old
        When Jon tries to register for Acme Systems
        Then Jon should be told that he must be at least 18 to register
        And Jon should not be registered with Acme Systems

    Scenario: Customer successfully registers with Acme (finally!)
        Given Jon is listed in the Greater London telephone directory
        And Jon is 20 years old
        When Jon tries to register for Acme Systems
        Then Acme Systems should now have Jon registered as a customer
