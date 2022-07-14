Some VS Code User Shortcut
--------------------------
- Shift+Alt+F (To indent user code)
- Click to File -> Auto Save (For saving your code automatically)
- Ctrl+/ (To comment Your Code)
- Shift+Tab (To reverse Tab)

Page Interaction Using Puppeteer
--------------------------------
- page.goto('url')  // visit website
- page.waitForSelector(selector)    // wait for selector (ID, Class, Name, Type, Tag, Placeholder)
- page.waitForXpath(XPath)  // wait for XPath
- page.waitForNavigation()  // wait for load a website
- page.waitForTimeout(time_in_millisecond)  // wait for manual time
- page.click("selector")    // click on an element
- page.type (selector, "Some Text")
- await page.select('#selector', 'value')    // select dropdown
- await page.select('#selector', 'val1', 'val2', 'val3')    // select multiple values from dropdown
- await page.keyboard.press("keyboard_event")

Install Following Package
-------------------------

``
 npm init -y 
``

``
 npm i puppeteer mocha chai 
``

How To Run
----------
``
node .\index.js
``

``
npx mocha --timeout=30000 .\index.js
``
