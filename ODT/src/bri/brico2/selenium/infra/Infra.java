package bri.brico2.selenium.infra;

import static org.junit.Assert.fail;

import java.io.IOException;
import java.util.HashMap;
import java.util.Locale;
import java.util.Map;
import java.util.concurrent.TimeUnit;

import org.junit.After;
import org.junit.Before;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;

public class Infra {
	protected WebDriver driver;
	protected Map<String, Object> vars;
	protected JavascriptExecutor js;
	protected StringBuffer verificationErrors = new StringBuffer();
	
	
	public Infra() throws IOException {
		String osName = System.getProperty("os.name");
		if (osName == null) {
            throw new IOException("os.name not found");
        }
        osName = osName.toLowerCase(Locale.ENGLISH);
        System.out.println("OSname: "+osName);
        if (osName.contains("windows")) {
        	System.setProperty("webdriver.chrome.driver", ".\\thdpty\\chromedriver_win32\\chromedriver.exe");
        }
        else {
        	System.setProperty("webdriver.chrome.driver", "./thdpty/chromedriver_linux64/chromedriver");
        }
		
        ChromeOptions opt = new ChromeOptions();
        opt.setHeadless(true);
        
		driver = new ChromeDriver(opt);
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
