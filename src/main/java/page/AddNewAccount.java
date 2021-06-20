package page;

import java.io.File;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class AddNewAccount {

	WebDriver driver;
	public AddNewAccount(WebDriver driver) {
		this.driver = driver;
	}
	
	@FindBy(how = How.XPATH, using = "//span[contains(text(),'Bank & Cash')]")
	WebElement BankAndCash;
	@FindBy(how = How.XPATH, using = "//a[contains(text(),'New Account')]")
	WebElement NewAccount;
	@FindBy(how = How.XPATH, using = "//input[@id='account']")
	WebElement AccountTitle;
	@FindBy(how = How.XPATH, using = "//input[@id='description']")
	WebElement Description;
	@FindBy(how = How.XPATH, using = "//input[@id='balance']")
	WebElement IntialBalance;
	@FindBy(how = How.XPATH, using = "//input[@id='account_number']")
	WebElement AccountNumber;
	@FindBy(how = How.XPATH, using = "//input[@id='contact_person']")
	WebElement ContactPerson;
	@FindBy(how = How.XPATH, using = "//input[@id='contact_phone']")
	WebElement Phone;
	@FindBy(how = How.XPATH, using = "//input[@id='ib_url']")
	WebElement InternetBankingURL;
	@FindBy(how = How.XPATH, using = "//button[@class='btn btn-primary']")
	WebElement Submit;
	

	// Interactive Methods

	public void clickBankAndCash(){
		BankAndCash.click();
	}

	public void clickNewAccount(){
		NewAccount.click();
	}

	public void enterCredentials(String accountTitle, String description, String intialBalace, String accountNumber, String contactPerson, String phone, String internetBankingURL) {
		AccountTitle.sendKeys(accountTitle);
		Description.sendKeys(description);
		IntialBalance.sendKeys(intialBalace);
		AccountNumber.sendKeys(accountNumber);
		ContactPerson.sendKeys(contactPerson);
		Phone.sendKeys(phone);
		InternetBankingURL.sendKeys(internetBankingURL);
	}

	public void clickSubmitButton() {
		Submit.click();
	}

	public String getPageTitle() {
		return driver.getTitle();
	}

	public void takeScreenshotAtEndOfTest(WebDriver driver) throws IOException {
		TakesScreenshot ts = ((TakesScreenshot) driver);
		File sourceFile = ts.getScreenshotAs(OutputType.FILE);
		SimpleDateFormat format = new SimpleDateFormat("MMddyy_HHmmss");
		Date date = new Date();
		String label = format.format(date);
		String currentDirectory = System.getProperty("user.dir");
		FileUtils.copyFile(sourceFile,
				new File(currentDirectory + "/screenshot/" + label + ".png"));
	}
}
