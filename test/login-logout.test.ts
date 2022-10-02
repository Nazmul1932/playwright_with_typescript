import {firefox, chromium} from "playwright"


describe('Login logout testing', () => {

    test('Open letcode', async () => {
        const browser = await chromium.launch({
            headless: false
        })
        const context = await browser.newContext({
            recordVideo: {
                dir: "./videos/",
                size: {
                    width: 800,
                    height: 600
                }
            }
        });
        const page = await context.newPage();
        await page.goto('https://letcode.in/')

        await page.locator("xpath=//a[normalize-space()='Log in']").click()
        await page.locator("xpath=//input[@name='email']").fill("koushik350@gmail.com")
        await page.locator("xpath=//input[@placeholder='Enter password']").fill("Pass123$")
        await page.locator("xpath=//button[normalize-space()='LOGIN']").click()    
        await page.locator("xpath=//a[normalize-space()='Sign out']").click()        
    

        await context.close();
        await browser.close()
    })

})