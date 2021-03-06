$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/TF_Login.feature");
formatter.feature({
  "line": 2,
  "name": "Validate Techfios login functionality and add new bank account",
  "description": "",
  "id": "validate-techfios-login-functionality-and-add-new-bank-account",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@loginFeature"
    }
  ]
});
formatter.scenarioOutline({
  "line": 8,
  "name": "",
  "description": "User should be able to login with valid credentials and add a new account",
  "id": "validate-techfios-login-functionality-and-add-new-bank-account;",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "The user enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "The user clicks signin button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "The user should land on Dashboard page",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "The user click bank \u0026 cash",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "The user click new account",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "The user should land on Account page",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "The user enters \"\u003caccount_title\u003e\" and \"\u003cdescription\u003e\" and \"\u003cintial_balance\u003e\" and \"\u003caccount_number\u003e\" and \"\u003ccontact_person\u003e\" and \"\u003cphone\u003e\" and \"\u003cinternet_banking_url\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "The user click submit",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "The user should successfully added a new account",
  "keyword": "Then "
});
formatter.examples({
  "line": 19,
  "name": "",
  "description": "",
  "id": "validate-techfios-login-functionality-and-add-new-bank-account;;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "account_title",
        "description",
        "intial_balance",
        "account_number",
        "contact_person",
        "phone",
        "internet_banking_url"
      ],
      "line": 20,
      "id": "validate-techfios-login-functionality-and-add-new-bank-account;;;1"
    },
    {
      "cells": [
        "demo@techfios.com",
        "abc123",
        "BOA",
        "Checking Account",
        "999999999",
        "435325235",
        "ASKDLJF",
        "888-888-8888",
        "www.ASKDLJFbankofamerica.com"
      ],
      "line": 21,
      "id": "validate-techfios-login-functionality-and-add-new-bank-account;;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2544510100,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "The user is on the \"Techfios\" login page",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "Techfios",
      "offset": 20
    }
  ],
  "location": "LoginStepDef.user_is_on_the_login_page(String)"
});
formatter.result({
  "duration": 2861152100,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "",
  "description": "User should be able to login with valid credentials and add a new account",
  "id": "validate-techfios-login-functionality-and-add-new-bank-account;;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@smoke"
    },
    {
      "line": 1,
      "name": "@loginFeature"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "The user enters \"demo@techfios.com\" and \"abc123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "The user clicks signin button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "The user should land on Dashboard page",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "The user click bank \u0026 cash",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "The user click new account",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "The user should land on Account page",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "The user enters \"BOA\" and \"Checking Account\" and \"999999999\" and \"435325235\" and \"ASKDLJF\" and \"888-888-8888\" and \"www.ASKDLJFbankofamerica.com\"",
  "matchedColumns": [
    2,
    3,
    4,
    5,
    6,
    7,
    8
  ],
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "The user click submit",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "The user should successfully added a new account",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "demo@techfios.com",
      "offset": 17
    },
    {
      "val": "abc123",
      "offset": 41
    }
  ],
  "location": "LoginStepDef.user_enters_and(String,String)"
});
formatter.result({
  "duration": 1088320800,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.user_clicks_signin_button()"
});
formatter.result({
  "duration": 2634363000,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.user_should_land_on_Dashboard_page()"
});
formatter.result({
  "duration": 179208600,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.the_user_click_bank_cash()"
});
formatter.result({
  "duration": 1067171500,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.the_user_click_new_account()"
});
formatter.result({
  "duration": 1449256100,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.the_user_should_land_on_Account_page()"
});
formatter.result({
  "duration": 100500100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "BOA",
      "offset": 17
    },
    {
      "val": "Checking Account",
      "offset": 27
    },
    {
      "val": "999999999",
      "offset": 50
    },
    {
      "val": "435325235",
      "offset": 66
    },
    {
      "val": "ASKDLJF",
      "offset": 82
    },
    {
      "val": "888-888-8888",
      "offset": 96
    },
    {
      "val": "www.ASKDLJFbankofamerica.com",
      "offset": 115
    }
  ],
  "location": "LoginStepDef.user_enters_ands(String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 1239317700,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.the_user_click_submit()"
});
formatter.result({
  "duration": 774014900,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.the_user_should_successfully_added_a_new_account()"
});
formatter.result({
  "duration": 88015900,
  "status": "passed"
});
formatter.after({
  "duration": 573340000,
  "status": "passed"
});
});