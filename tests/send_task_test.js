import { Builder, Browser, By } from "selenium-webdriver";
const driver_chr = await new Builder().forBrowser(Browser.CHROME).build();

const driver_fx = await new Builder().forBrowser(Browser.FIREFOX).build();

async function sendTaskTest(driver) {

  try {
  
    await driver.get('http://localhost:80/');
    await driver.manage().window().setRect({ width: 639, height: 800 }); // Configura o tamanho da tela
    await driver.navigate().refresh(); //Atualiza a página
    const button = driver.findElement(By.className('new-task-bttn-container'));
    const input = driver.findElement(By.className('new-task-input'));
    const sendBttn = driver.findElement(By.id('sendBttn'));
    
    await button.click();
    await input.sendKeys('teste');
    
    await driver.sleep(2000);
    await sendBttn.click();
    
      
  } finally {
    await driver.sleep(2000);
    await driver.quit();
  }

};

sendTaskTest(driver_chr);
sendTaskTest(driver_fx);