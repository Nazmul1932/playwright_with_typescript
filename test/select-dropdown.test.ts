import {Browser, BrowserContext, chromium, Page} from "playwright"


describe('All type of alert testing', () => {

    let context: BrowserContext
    let browser: Browser
    let page: Page

    beforeAll(async () =>{

        browser = await chromium.launch({headless: false})
        context = await browser.newContext({
            recordVideo: {
                dir: "./videos/select-dropdown/",
                size: {
                    width: 800,
                    height: 600
                }
            }
        })
        page = await context.newPage()
        await page.goto("https://letcode.in/dropdowns")

    })

    afterAll(async () => {
        await page.close()
        await context.close()
        await browser.close()
    });

    test("select a dropdown based on value", async () =>{

        const fruits = await page.$("xpath=//select[@id='fruits']")
        await fruits?.selectOption("2")
        const msg = await page.$("xpath=//p[@class='subtitle']")
        if(msg){
            expect(await msg.textContent()).toContain("Orange")
        }
    })

    test("select multiple", async ()=>{

        const heroes = await page.$("xpath=//select[@id='superheros']")
        heroes?.selectOption([
            {label:"Aquaman"}, {value: "bt"}, {index: 2}
        ])
    })

    test("count select", async()=>{
        const leng = await page.$$("#lang option")
        console.log(leng.length)
    })

    test("get selected text", async()=>{

        await page.selectOption("#country", "Peru")
        const text = await page.$eval<string, HTMLSelectElement>("#country", ele=>ele.value)
        console.log(text)
        expect(text).toBe("Peru")

    })


})