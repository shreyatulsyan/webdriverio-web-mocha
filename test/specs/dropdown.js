const LoginPage = require('../pageobjects/login.page')
const DropDownPage = require('../pageobjects/dropdown.page')
describe('Dropdown Test Suite 1', async()=>{

    beforeEach(async function(){
        await LoginPage.open('dropdown')
    });

    it('Verify title', async()=>{
            let title = await browser.getTitle();
            await expect(title).toEqual('The Internet');
    })

    it('Verify URL', async()=>{
        let url = await browser.getUrl();
        await expect(url).toEqual('https://the-internet.herokuapp.com/dropdown');
})
})
describe('Dropdown Test Suite 2', async()=>{
    it('Select Option2 from dropdown2', async()=>{
            await LoginPage.open('dropdown');
            await (await DropDownPage.dropdownListHeader).selectByVisibleText('Option 2');
            await browser.saveScreenshot('Screenshots/SelectDropDown.png');
    })
})