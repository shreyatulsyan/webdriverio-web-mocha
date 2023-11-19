const horizontalSliderPage = require("../pageobjects/horizontalSlider.page")
const loginPage = require("../pageobjects/login.page")
let {Key} = require('webdriverio');
// describe('Horizontal Slider by pressing keys', async()=>{
//     it('Sliding horizontally by 3', async()=>{
//         loginPage.open('horizontal_slider')
//         await (horizontalSliderPage.slider).click({ button: 1 });
//         await browser.keys([Key.ArrowRight,Key.ArrowRight,Key.ArrowRight]);
//         await expect(horizontalSliderPage.rangeValue).toHaveText('1.5');
//         await browser.saveScreenshot('Screenshots/Slider.png')
//     })
// })