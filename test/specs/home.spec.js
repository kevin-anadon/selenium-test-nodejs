const {By, Builder, WebElement, until, Browser} = require('selenium-webdriver');
const assert = require('assert');

async function homeTest(){
  let driver

  try {
    driver = await new Builder().forBrowser(Browser.EDGE).build()
    await driver.get('https://admlucid.com/')

    const title = await driver.getTitle()
    console.log('******** Home page title ******** ' + title);
    assert.equal('Home Page - Admlucid', title)

    await driver.manage().setTimeouts({implicit: 500})
    await driver.manage().window().maximize()

    const url = await driver.getCurrentUrl()
    console.log('******** Current URL ******** ' + url);

    await driver.navigate().to('https://admlucid.com/Home/Selenium')

    const message = await driver.findElement(By.xpath('//*[@id="Selenium"]/h1'))
    await driver.wait(until.elementIsEnabled(message), 2000)

    const value = (await message.getText()).trim()
    assert.equal("Selenium Automation Testing", value)

    console.log('******** Page Header ******** ' + value);

    return true
  } catch (error) {
    console.log(error);
    return false
  } finally {
    await driver.quit()
  }
}

module.exports = {
  homeTest 
}