const LoginPage = require('../pageobjects/login.page')
const UploadFilePage = require('../pageobjects/uploadFile.page')
const path = require('path');

xdescribe('Upload a file: ', async()=>{
    // it('Upload: ', async()=>{
    //     await LoginPage.open('upload')
    //     await (await (UploadFilePage.chooseFile)).waitForClickable();
    //     (await (UploadFilePage.chooseFile)).click();
    //     let a = await browser.uploadFile(path.join(process.cwd(),'upload.txt'))
    //     await (UploadFilePage.chooseFile).setValue(a);
    //     await (UploadFilePage.uploadButton).click();
    //     await expect(await UploadFilePage.fileUploaded).toHaveText('upload.txt')
    //     await browser.saveScreenshot('Screenshots/UploadFilePage.png');
    // })
})      