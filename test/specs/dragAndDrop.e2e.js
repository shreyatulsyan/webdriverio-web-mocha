const DragAndDropPage = require('../pageobjects/dragAndDropPage')
const LoginPage = require('../pageobjects/login.page')
describe('DragAndDrop', async()=>{
    it('DragAndDrop', async()=>{
        await LoginPage.dragAndDrop();
        await (DragAndDropPage.A).dragAndDrop(await DragAndDropPage.B);
        await expect(DragAndDropPage.columnAHeader).toHaveTextContaining('B');
    })
})