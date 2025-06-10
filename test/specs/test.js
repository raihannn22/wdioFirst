import registerPage from "../pageobjects/register.page"
import LoginPage from "../pageobjects/login.page"
import mainPage from "../pageobjects/main.page"
import autoQuotePage from "../pageobjects/autoQuote.page"
import detailSubmitPage from "../pageobjects/detailSubmit.page"

describe('Register', () =>  {
    it('Sample Test', async() =>{
        await registerPage.register('Luna', 'Maya', '08/02/1887', 'luna.maya@gmail.com', 'Luma@123!');
        await expect(await LoginPage.isScreenActive()).toBe(true);
    })
})

describe('Login', () =>  {
    it('Sample Test', async() => {
        await LoginPage.login('luna.maya@gmail.com', 'Luma@123!');
        await expect(await mainPage.isScreenActive()).toBe(true);
    })
})

describe('mainPageToAutoQuote', () => { 
    it('Sample Test', async() => {
        await mainPage.clickGetAutoQoute();
        await expect(await autoQuotePage.isScreenActive()).toBe(true);
    })
 })

 describe('AutoQuote', () => { 
    it('Sample Test', async() => {
        await autoQuotePage.fillData('12345', 'luna.maya@gmail.com', '25', 'Male', '4', 'Car', '2010', 'Buick', 'Century', 'Own');
        await expect(await detailSubmitPage.isScreenActive()).toBe(true);

        await detailSubmitPage.verificationData('12345', 'luna.maya@gmail.com', '25', 'Male', '4', 'Car', '2010', 'Buick', 'Century', 'Own');
    })
 })

