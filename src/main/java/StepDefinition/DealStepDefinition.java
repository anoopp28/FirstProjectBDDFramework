/*
 * 
 * 
 * @Author Anoop
 */
package StepDefinition;
import java.util.List;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;


@SuppressWarnings("deprecation")
public class DealStepDefinition {
	
WebDriver driver ;
	
   @Given("^User is already on Login page$")
   public void user_is_already_on_Login_page() {
	   System.setProperty("webdriver.chrome.driver", "C:\\chromedriver_win32\\chromedriver.exe");
		driver= new ChromeDriver();
		driver.get("https://freecrm.co.in/");
   }

   @When("^Title of login page is Free CRM$")
   public void title_of_login_page_is_Free_CRM() {
		   String title = driver.getTitle();
		   System.out.println("Login Page " + title);
		   Assert.assertEquals("Free CRM #1 cloud software for any business large or small", title);
   }

   @Then("^User enters Username and Password$")
   public void user_enters_Username_and_Password(DataTable credentials) throws InterruptedException {
	   List<List<String>> data = credentials.raw();
   	Thread.sleep(5000); 
   	driver.findElement(By.xpath("//span[contains(text(),'Log In')]")).click();
	    driver.findElement(By.name("email")).sendKeys(data.get(0).get(0));
		driver.findElement(By.name("password")).sendKeys(data.get(0).get(1));
      
   }

   @Then("^User clicks on login button$")
   public void user_clicks_on_login_button() {
	   driver.findElement(By.xpath("//div[@class='ui fluid large blue submit button']")).click();
   }

   @Then("^User is on Home page$")
   public void user_is_on_Home_page()  {
	   String titlehome = driver.getTitle();
	    System.out.println("Home Page "+titlehome);
	    Assert.assertEquals("Cogmento CRM", titlehome);
   }

   @Then("^User moves to contact details$")
   public void user_moves_to_contact_details() throws InterruptedException {
	   Thread.sleep(5000);
	   driver.findElement(By.xpath("//span[contains(text(),'Contacts')]")).click();
   }

   @Then("^User enters contact details$")
   public void user_enters_contact_details(DataTable ContactValues) throws InterruptedException {
	   
		  List<List<String>> data1 = ContactValues.raw();
		  
		  driver.findElement(By.xpath("//button[contains(text(),'New')]")).click();
		  driver.manage().timeouts().pageLoadTimeout(40, TimeUnit.SECONDS);   
			driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
		  driver.findElement(By.xpath("//input[@name='first_name']")).sendKeys(data1.get(0).get(0));
		  driver.findElement(By.xpath("//input[@name='last_name']")).sendKeys(data1.get(0).get(1));
		  driver.findElement(By.xpath("//input[@name='department']")).sendKeys(data1.get(0).get(2));
		  
		  
		  driver.findElement(By.xpath("//button[@class='ui linkedin button']")).click();
   }

   @Then("^close the browser$")
   public void close_the_browser() {
	   driver.close();
   }




   
}
