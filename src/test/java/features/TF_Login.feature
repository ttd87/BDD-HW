@loginFeature 
Feature: Validate Techfios login functionality and add new bank account 

Background: 
	Given The user is on the "Techfios" login page 
	
@smoke 
Scenario Outline: 
	User should be able to login with valid credentials and add a new account 
	When The user enters "<username>" and "<password>" 
	And The user clicks signin button 
	Then The user should land on Dashboard page 
	When The user click bank & cash 
	When The user click new account 
	When The user should land on Account page 
	When The user enters "<account_title>" and "<description>" and "<intial_balance>" and "<account_number>" and "<contact_person>" and "<phone>" and "<internet_banking_url>" 
	And The user click submit 
	Then The user should successfully added a new account 
	Examples: 
		|username|password|account_title|description|intial_balance|account_number|contact_person|phone|internet_banking_url|
		|demo@techfios.com|abc123|BOA |Checking Account|999999999|435325235|ASKDLJF|888-888-8888|www.ASKDLJFbankofamerica.com|