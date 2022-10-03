import { PERSISTENT } from "jest-playwright-preset"
import { Browser, BrowserContext,chromium,Page } from "playwright"

describe("how to handle input fields", ()=>{

    let context: BrowserContext
    let browser: Browser
    let page: Page

    beforeAll(async () =>{

        browser = await chromium.launch({headless: false})
        context = await browser.newContext()
        page = await context.newPage()
        await page.goto("https://letcode.in/edit")

    })

    test("enter your full name", async () =>{

        // await page.type("id=fullName", "nazmul hossain")
        const name = await page.locator("xpath=//input[@id='fullName']")
        await name?.type("nazmul hossain")

    })

    test("appending text", async () =>{
        const join = await page.locator("xpath=//input[@id='join']")
        await join?.focus()
        await page.keyboard.press("End")
        await join?.type(" human")
    })

    test("get value from a input box", async ()=>{
        const text = await page.getAttribute("xpath=//input[@id='getMe']", "value")
        console.log(text)
    } )

    test("clear the input box test", async () =>{
        await page.locator("xpath=//input[@id='clearMe']").fill("")
    })

    afterAll(async () => {
        await page.close()
        await context.close()
        await browser.close()
    });
      


})