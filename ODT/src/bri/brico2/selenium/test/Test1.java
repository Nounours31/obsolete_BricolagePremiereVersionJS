package bri.brico2.selenium.test;

//Generated by Selenium IDE
import org.junit.Test;
import org.junit.Before;
import org.junit.After;
import static org.junit.Assert.*;
import static org.hamcrest.CoreMatchers.is;
import static org.hamcrest.core.IsNot.not;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.Dimension;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import bri.brico2.selenium.infra.Infra;

import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.Alert;
import org.openqa.selenium.Keys;

import java.io.IOException;
import java.util.*;


public class Test1 extends Infra {
  

  
  public Test1() throws IOException {
		super();
		// TODO Auto-generated constructor stub
	}

@Test
  public void test1() {
    // Test name: test1
    // Step # | name | target | value | comment
    // 1 | open | / |  | 
    driver.get("https://sass-lang.com/sc?ODT=Yes");
    // 2 | setWindowSize | 1510x1006 |  | 
    driver.manage().window().setSize(new Dimension(1510, 1006));
    // 3 | click | css=.search |  | 
    driver.findElement(By.cssSelector(".search")).click();
    // 4 | type | css=.search | @debug | 
    driver.findElement(By.cssSelector(".search")).sendKeys("@debug");
    // 5 | sendKeys | css=.search | ${KEY_ENTER} | 
    driver.findElement(By.cssSelector(".search")).sendKeys(Keys.ENTER);
    // 6 | click | css=li:nth-child(9) code |  | 
    driver.findElement(By.cssSelector("li:nth-child(9) code")).click();
  }
}
