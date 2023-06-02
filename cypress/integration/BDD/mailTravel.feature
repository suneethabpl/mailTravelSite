Feature: Mailtravel apllication

    test Mailtravel application

Background:
Given the User visits to 'Home' page
And confirm the page title has 'Home Page | Mail Travel'
And accept All cookies

Scenario: test Search bar
When the User Search for 'India' in Search bar to book online
Then the User should see 'Please select your departure date' error message
When the User select date to book online
Then the User should see '1. Date, Departure & Passengers' section to verify
When the user select rooms to submit passenger details
Then verify the Confirm Details + Book
And verify the 'Book Now' button is enabled