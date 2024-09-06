const {By, Builder, WebElement, until, Browser} = require('selenium-webdriver');
const assert = require('assert');

async function golfTest(){
  let driver

  try {
    driver = await new Builder().forBrowser(Browser.EDGE).build()
    await driver.get('https://admlucid.com/Golf')

    await driver.manage().setTimeouts({implicit: 500})
    await driver.manage().window().maximize()

    const textBox = await driver.findElement(By.name('SearchString'))
    const submitButton = await driver.findElement(By.css('body > div.container > main > table:nth-child(8) > tbody > tr > td:nth-child(1) > form > button'))

    const searchValue = 'Tiger A'

    await textBox.sendKeys(searchValue)
    await submitButton.click()
    await driver.manage().setTimeouts({implicit: 1000})

    const message = await driver.findElement(By.xpath('/html/body/div[1]/main/table[2]/tbody/tr/td[1]'))
    const value = (await message.getText()).trim()
    assert.equal('Tiger A', value)
    console.log('Search: ' + searchValue);
    console.log('Cell value: ' + value);
    return true
  } catch (error) {
    console.log(error);
    return false
  } finally {
    await driver.quit()
  }
}

module.exports = {
  golfTest 
}