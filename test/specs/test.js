import registerPage from "../pageobjects/register.page"
import LoginPage from "../pageobjects/login.page"
import mainPage from "../pageobjects/main.page"
import autoQuotePage from "../pageobjects/autoQuote.page"
import detailSubmitPage from "../pageobjects/detailSubmit.page"
import xlsx from 'xlsx';


    let testData = [];

    // Baca Excel di
    const workbook = xlsx.readFile('C:/Users/raiha/Downloads/dataInsurance.xlsx');
    const sheet = workbook.Sheets[workbook.SheetNames[0]];
    testData = xlsx.utils.sheet_to_json(sheet);
    console.log("ini datanyaaa", testData);


for (const datum of testData){
        describe('Register', () =>  {

        it('Register', async() =>{
            await registerPage.register(datum['Fist Name'], datum['Last Name'], datum.Birthday, datum.Email, datum.Password);
            await expect(await LoginPage.isScreenActive()).toBe(true);
        })

        it('Login', async() => {
            // await LoginPage.login('luna.maya@gmail.com', 'Luma@123!');
            await LoginPage.login(datum.Email, datum.Password);
            await expect(await mainPage.isScreenActive()).toBe(true);
        })

        it('mainpage', async() => {
            await mainPage.clickGetAutoQoute();
            await expect(await autoQuotePage.isScreenActive()).toBe(true);
        })

        it('fill form', async() => {
            // await autoQuotePage.fillData('12345', 'luna.maya@gmail.com', '25', 'Male', '4', 'Car', '2010', 'Buick', 'Century', 'Own');
            await autoQuotePage.fillData(datum['Zip Code'], datum.Email, datum.Age, datum.Gender, '4', datum['Automobile Type'], datum.Year, datum.Make, datum.Model, datum['Financial Info']);
            await expect(await detailSubmitPage.isScreenActive()).toBe(true);
    
            // await expect(await detailSubmitPage.verificationData('12345', 'luna.maya@gmail.com', '25', 'Male', '4', 'Car', '2010', 'Buick', 'Century', 'Own')).toBe(true);
            await expect(await detailSubmitPage.verificationData(datum['Zip Code'], datum.Email, datum.Age, datum.Gender, '4', datum['Automobile Type'], datum.Year, datum.Make, datum.Model, datum['Financial Info'])).toBe(true);
        })

        it('Realaunch APP', async() => {
            await browser.relaunchActiveApp()
        })

    })
}

