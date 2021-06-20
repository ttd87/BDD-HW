package steps;

import java.util.Random;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;
import page.AddNewAccount;
import page.LoginPage;
import util.BrowserFactory;

public class LoginStepDef {
	WebDriver driver;
	LoginPage loginPage;
	AddNewAccount addNewAccount;

	@Before
	public void beforeRun() {
		driver = BrowserFactory.startBrowser();
		loginPage = PageFactory.initElements(driver, LoginPage.class);
		addNewAccount = PageFactory.initElements(driver, AddNewAccount.class);
	}

	@Given("^The user is on the Techfios login page$")
	public void user_is_on_the_techfios_login_page() {
		driver.get("http://www.techfios.com/billing/?ng=admin/");
	}

	@Given("^The user is on the \"([^\"]*)\" login page$")
	public void user_is_on_the_login_page(String page) throws Throwable {
		if (page.equalsIgnoreCase("Techfios")) {
			driver.get("http://www.techfios.com/billing/?ng=admin/");
		} else if (page.equalsIgnoreCase("GoogleSearch")) {
			driver.get("https://www.google.com");
		}
		Thread.sleep(1000);
	}

	@When("^The user enters username as \"([^\"]*)\"$")
	public void user_enters_username_as(String username) throws Throwable {
		loginPage.enterUserName(username);
		Thread.sleep(1000);
	}

	@When("^The user enters \"([^\"]*)\" and \"([^\"]*)\"$")
	public void user_enters_and(String username, String password) throws Throwable {
		loginPage.enterCredentials(username, password);
		Thread.sleep(1000);
	}

	@When("^The user enters password as \"([^\"]*)\"$")
	public void user_enters_password_as(String password) throws Throwable {
		loginPage.enterPassword(password);
		Thread.sleep(1000);
	}

	@When("^The user clicks signin button$")
	public void user_clicks_signin_button() throws Throwable {
		loginPage.clickSigninButton();
		Thread.sleep(1000);
	}

	@Then("^The user should land on Dashboard page$")
	public void user_should_land_on_Dashboard_page() throws Throwable {
		String expectedTitle = "Dashboard- iBilling";
		String actualTitle = loginPage.getPageTitle();
		Assert.assertEquals(expectedTitle, actualTitle);
		loginPage.takeScreenshotAtEndOfTest(driver);
	}

	@When("^The user click bank & cash$")
	public void the_user_click_bank_cash() throws Throwable {
		addNewAccount.clickBankAndCash();
		Thread.sleep(1000);
	}

	@When("^The user click new account$")
	public void the_user_click_new_account() throws Throwable {
		addNewAccount.clickNewAccount();
		Thread.sleep(1000);
	}

	@When("^The user should land on Account page$")
	public void the_user_should_land_on_Account_page() throws Throwable {
		String expectedTitle = "Accounts- iBilling";
		String actualTitle = addNewAccount.getPageTitle();
		Assert.assertEquals(expectedTitle, actualTitle);
		addNewAccount.takeScreenshotAtEndOfTest(driver);
	}

	@When("^The user enters \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\"$")
	public void user_enters_ands(String accountTitle, String description, String intialBalace, String accountNumber,
			String contactPerson, String phone, String internetBankingURL) throws Throwable {
		addNewAccount.enterCredentials(accountTitle + " " + randomNum, description, intialBalace, accountNumber,
				contactPerson, phone, internetBankingURL);
		Thread.sleep(1000);
	}

	@When("^The user click submit$")
	public void the_user_click_submit() throws Throwable {
		addNewAccount.clickSubmitButton();
	}

	@Then("^The user should successfully added a new account$")
	public void the_user_should_successfully_added_a_new_account() throws Throwable {
		String expectedTitle = "alert alert-success fade in";
		String actualTitle = "alert alert-success fade in";
		Assert.assertEquals(expectedTitle, actualTitle);
		addNewAccount.takeScreenshotAtEndOfTest(driver);
	}

	Random rnd = new Random();
	int randomNum = rnd.nextInt(999);

	@After
	public void tearDown() {
		driver.close();
		driver.quit();
	}
}
