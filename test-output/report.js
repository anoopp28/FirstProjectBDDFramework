$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/52001551/eclipse-workspace/FirstProjectBDDFramework/src/main/java/Features/Deals.feature");
formatter.feature({
  "line": 1,
  "name": "Contact data creation",
  "description": "",
  "id": "contact-data-creation",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Free CRM create new Deal scenario",
  "description": "",
  "id": "contact-data-creation;free-crm-create-new-deal-scenario",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "User is already on Login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Title of login page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User enters Username and Password",
  "rows": [
    {
      "cells": [
        "anoop2804anu@gmail.com",
        "anoop2804"
      ],
      "line": 8
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User is on Home page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "User moves to contact details",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "User enters contact details",
  "rows": [
    {
      "cells": [
        "Anoop",
        "Contact",
        "IDC"
      ],
      "line": 13
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "DealStepDefinition.user_is_already_on_Login_page()"
});
formatter.result({
  "duration": 11617546900,
  "status": "passed"
});
formatter.match({
  "location": "DealStepDefinition.title_of_login_page_is_Free_CRM()"
});
formatter.result({
  "duration": 445106300,
  "status": "passed"
});
formatter.match({
  "location": "DealStepDefinition.user_enters_Username_and_Password(DataTable)"
});
formatter.result({
  "duration": 11350466000,
  "status": "passed"
});
formatter.match({
  "location": "DealStepDefinition.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 101454400,
  "status": "passed"
});
formatter.match({
  "location": "DealStepDefinition.user_is_on_Home_page()"
});
formatter.result({
  "duration": 7351000,
  "status": "passed"
});
formatter.match({
  "location": "DealStepDefinition.user_moves_to_contact_details()"
});
formatter.result({
  "duration": 5196930800,
  "status": "passed"
});
formatter.match({
  "location": "DealStepDefinition.user_enters_contact_details(DataTable)"
});
formatter.result({
  "duration": 14149264900,
  "error_message": "org.openqa.selenium.NoSuchElementException: Cannot locate an element using xpath\u003d//input[@name\u003d\u0027first_name\u0027]\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.0.0-alpha-5\u0027, revision: \u0027b3a0d621cc\u0027\nSystem info: host: \u0027BLRCND52001551\u0027, ip: \u0027192.168.1.4\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002714\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:336)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:451)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:394)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:325)\r\n\tat StepDefinition.DealStepDefinition.user_enters_contact_details(DealStepDefinition.java:72)\r\n\tat ✽.Then User enters contact details(C:/Users/52001551/eclipse-workspace/FirstProjectBDDFramework/src/main/java/Features/Deals.feature:12)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "DealStepDefinition.close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
});