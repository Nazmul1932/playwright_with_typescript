import { chromium } from "playwright";

describe("uploading file testing", ()=>{

    const file = "C:\\Users\\BS971\\Desktop\\download.jfif"
    const file1 = "C:\\Users\\BS971\\Desktop\\Sharebus-Note.txt"

    test('Open sendgb website', async () => {
        const browser = await chromium.launch({
            headless: false
        })
        const context = await browser.newContext({
            recordVideo: {
                dir: "./videos/upload-files/",
                size: {
                    width: 800,
                    height: 600
                }
            }
        });
        const page = await context.newPage();
        await page.goto("https://www.sendgb.com/en/") 
        await page.setInputFiles("xpath=//input[@name='qqfile']", file)
        await context.close();
        await browser.close()


    })
})