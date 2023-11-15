const DragAndDropPage = require('../pageobjects/dragAndDropPage')
const LoginPage = require('../pageobjects/login.page')
describe('DragAndDrop', async()=>{

    beforeEach(function () {
        console.log('BeforeEach : method of mocha');
      });
    
    afterEach(function () {
        console.log('AfterEach : method of mocha');
      });

    before(function () {
    console.log('Before : in mocha: runs once before the first test in this block');
    });
    
    after(function () {
    console.log('After : in mocha: runs once after the last test in this block');
    });

    it('DragAndDrop test', async()=>{
        // await LoginPage.dragAndDrop();
        // await (DragAndDropPage.A).dragAndDrop(await DragAndDropPage.B);
        // await expect(DragAndDropPage.columnAHeader).toHaveTextContaining('B');
        console.log('Test: Drag and Drop');
    });
});
describe('Hi hello', async()=>{
    it('ABCD', async()=>{
        console.log('Test: Learning');
    });
});