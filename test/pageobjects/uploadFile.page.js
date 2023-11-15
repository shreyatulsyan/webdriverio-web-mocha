const Page = require("./page");

class UploadFile extends Page{
    get fileUploaded(){
        return $('#uploaded-files')
    }
    get uploadButton(){
        return $('#file-submit')
    }
    get chooseFile(){
        return $('#file-upload')
    }
}

module.exports = new UploadFile();