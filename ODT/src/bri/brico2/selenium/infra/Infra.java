package bri.brico2.selenium.infra;

import static org.junit.Assert.fail;

import java.util.HashMap;
import java.util.Map;
import java.util.concurrent.TimeUnit;

import org.junit.After;
import org.junit.Before;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class Infra {
	protected WebDriver driver;
	protected Map<String, Object> vars;
	protected JavascriptExecutor js;
	protected StringBuffer verificationErrors = new StringBuffer();
	
	
	public Infra() {
		System.setProperty("webdriver.chrome.driver", "V:\\ws\\GitHub\\Bricolage2\\ODT\\thdpty\\chromedriver_win32\\chromedriver.exe");
		  
		driver = new ChromeDriver();
		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
		
		js = (JavascriptExecutor) driver;
		vars = new HashMap<String, Object>();
	}
	
	  @Before
	  public void setUp() {	  
	  }
	  
	  @After
	  public void tearDown() {
	    driver.quit();
	 
	    String verificationErrorString = verificationErrors.toString();
	    if (!"".equals(verificationErrorString)) {
	      fail(verificationErrorString);
	    }
	 
	  }
	  
	  public boolean isElementPresent(By by) {
		    try {
		      driver.findElement(by);
		      return true;
		    } catch (NoSuchElementException e) {
		      return false;
		    }
		  }
}
