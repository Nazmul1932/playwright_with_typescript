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

    // test("testing prompt alert", async ()=>{

    //     const element = await page.locator("xpath=//button[@id='prompt']")

    //     page.on("dialog", (dialog)=>{

    //         console.log("message:" + dialog.message())
    //         console.log("default value: " + dialog.defaultValue())
    //         console.log("type:" + dialog.type())
    //         dialog.accept("hello nazu")

    //     })

    //     await element?.click()

    // })

    // test('Accept the alert', async () => {

    //     const element = await page.locator("xpath=//button[@id='accept']")

    //     page.on('dialog', async (dialog) => {
    //         console.log("message:" + dialog.message())
    //         console.log("default value: " + dialog.defaultValue())
    //         console.log("type:" + dialog.type())
    //         dialog.accept()
    //     })
    //     await element?.click()
    //   })

    test('confirmation the alert', async () => {

        const element = await page.locator("xpath=//button[@id='confirm']")

        page.on('dialog', async (dialog) => {
            expect(dialog.message()).toContain('Are you happy with LetCode?');
            await dialog.accept();
            
        })
        await element?.click()
      })





    // afterAll(async () => {
    //     await page.close()
    //     await context.close()
    //     await browser.close()
    // });


})