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

describe("Visit Google Site", async () => {
    it("Visit Google Site", async () => {
        await page.goto('https://google.com');
        await page.type("[name=q]", "Hello");
        await page.keyboard.press("Enter");
    })
})

after(async () => {
    await browser.close();
})