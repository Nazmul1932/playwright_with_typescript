import {Browser, BrowserContext, chromium, Page} from "playwright"


describe('All type of alert testing', () => {

    let context: BrowserContext
    let browser: Browser
    let page: Page

    beforeAll(async () =>{

        browser = await chromium.launch({headless: false})
        context = await browser.newContext({
            recordVideo: {
                dir: "./videos/diff-types-inputs/",
                size: {
                    width: 800,
                    height: 600
                }
            }
        })
        page = await context.newPage()
        await page.goto("https://letcode.in/alert")

    })

    test("testing prompt alert", async ()=>{

        const element = await page.locator("xpath=//button[@id='prompt']")
        await element?.click()

    })





    afterAll(async () => {
        await page.close()
        await context.close()
        await browser.close()
    });


})