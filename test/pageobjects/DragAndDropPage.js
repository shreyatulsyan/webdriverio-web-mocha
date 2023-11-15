//const { $ } = require('@wdio/globals')
const Page = require('./page');
class DragAndDropPage extends Page{

    get A (){
        return $(`//*[@id='column-a']/header`);
    }
    get B (){
        return $(`//*[@id='column-b']/header`);
    }
    get columnAHeader(){
        return $(`//*[@id='column-a']/header`);
    }
}
module.exports = new DragAndDropPage();


