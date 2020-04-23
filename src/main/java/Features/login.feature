Feature: Login

#Without Example Keyword
#Scenario: Free CRM login Test scenario

#Given User is already on Login page
#When Title of login page is Free CRM
#Then User enters "anoop2804anu@gmail.com" and "anoop2804"
#Then User clicks on login button
#Then User is on Home page



#With Examples Keyword
Scenario Outline: Free CRM login Test scenario

Given User is already on Login page
When Title of login page is Free CRM
Then User enters "<Username>" and "<Password>"
Then User clicks on login button
Then User is on Home page
Then close the browser

Examples:
        | Username  | Password |
        | anoop2804anu@gmail.com | anoop2804 |
        | tom       | Test123   |