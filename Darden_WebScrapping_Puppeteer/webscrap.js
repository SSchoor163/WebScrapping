const puppeteer = require("puppeteer");
const chalk = require("chalk");
var fs = require("fs");

const error = chalk.bold.red;
const success = chalk.keyword("green");


const LoginUserField = "#user";
const LoginPassField = "#password";

(async () =>{
try{
    const LoginUser = "SXS02135705";
const LoginPass = "Jellal163";
    var browser = await puppeteer.launch({headless:false});
    var page = await browser.newPage();

    await page.goto('https://krowdweb.darden.com/krowd/prd/siteminder/login.asp?TYPE=33554433&REALMOID=06-f0cc55aa-c880-4af3-9c7c-23c83ac1d8d2&GUID=&SMAUTHREASON=0&METHOD=GET&SMAGENTNAME=-SM-d8Xe1mGIZsateKQCD3BA%2b2v2FbCgZD4C0f6RFQUGYrZ891kQhFy61nlphZTSZ3kG&TARGET=-SM-https%3a%2f%2fkrowdweb%2edarden%2ecom%2fkrowd%2fprd%2fSynChooseConcept%2easp');
    
    await page.waitForSelector(LoginPassField);

    var schedule = await page.evaluate(()=>
    {
        var selectLoginField = document.querySelector("#user");
        var selectPasswordField = document.querySelector("#password");
       var submitButton = document.querySelector("#btnLogin");
    selectLoginField.value = "SXS02135705";
    
       selectPasswordField.value = "Jellal163";
       (async () =>{
        
        await page.click("#btnLogin");
        
        // await page.waitForNavigation();
       
       await page.screenshot({path: 'darden.png'});
       });
    }
    )
    await page.screenshot({path: 'darden.png'});
    await browser.close();
}catch(err){
    console.log(error(err));
    await browser.close();
    console.log(error("Broser closed"));
}

})();