const { expect } = require('@wdio/globals')
const LoginPage = require('../pageobjects/login.page')
const SecurePage = require('../pageobjects/secure.page')

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        // await LoginPage.open()
        // await LoginPage.login('tomsmith', 'SuperSecretPassword!')
        // await expect(SecurePage.flashAlert).toBeExisting()
        // await expect(SecurePage.flashAlert).toHaveTextContaining(
        //     'You logged into a secure areo!')
        console.log('Test: Login');
        console.log(__dirname);
    });
    it('should print Title', async () => {
        console.log(browser.getTitle());
        console.log('Test: Title');
    });
})

