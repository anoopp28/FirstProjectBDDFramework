Feature: Contact data creation

Scenario: Free CRM create new Deal scenario

Given User is already on Login page
When Title of login page is Free CRM
Then User enters Username and Password
| anoop2804anu@gmail.com | anoop2804 |
Then User clicks on login button
Then User is on Home page
Then User moves to contact details
Then User enters contact details
|Anoop | Contact | IDC |
Then close the browser