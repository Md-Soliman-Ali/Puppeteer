const { expect } = require('chai');
const puppeteer = require('puppeteer');

var page, browser;
before(async () => {
    browser = await puppeteer.launch({
        headless: false,
        defaultViewport: null,
        slowMo: 10,
        devtools: false,
        args: [
            "--disable-web-security",
            "--disable-features=IsolateOrigins,site-per-process",
            "--window-size=1920,1080"
        ]
    });
    page = await browser.newPage();
})

describe.skip("Visit Google Site", async () => {
    it("Visit Google Site", async () => {
        await page.goto('https://google.com');
        expect(await page.title()).equals("Google");

        await page.type("[name=q]", "Hello");
        await page.keyboard.press("Enter");
    })
})

describe("Visit Ecommerce Site", async () => {
    it("Visit Ecommerce Site", async () => {
        await page.goto('http://automationpractice.com/index.php');

        /* let loginButtonXPath = "//a[@class='login']";
        await page.waitForXPath(loginButtonXPath);
        let loginButtonElement = await page.$x(loginButtonXPath);
        await loginButtonElement[0].click(); */

        // Click Sign In
        let loginButtonSelector = ".login";
        await page.waitForSelector(loginButtonSelector);
        await page.click(loginButtonSelector);

        // Get Text
        let textHeaderSelector = "h3";
        await page.waitForSelector(textHeaderSelector);
        let textHeaderElement = await page.$(textHeaderSelector);
        let textGet = await page.evaluate(e => e.textContent, textHeaderElement);
        console.log(textGet);

        // Input Email Address
        let emailInputSelector = "#email_create";
        await page.waitForSelector(emailInputSelector);
        await page.type(emailInputSelector, "test@grr.com");

        // Submit Create an Account
        let SubmitButtonSelector = "#SubmitCreate";
        await page.waitForSelector(SubmitButtonSelector);
        await page.click(SubmitButtonSelector);
    })
})

after(async () => {
    await browser.close();
})