let Page  = require('./page');
class abcd extends Page{
    get dropdownListHeader() {
        return $('#dropdown')
    }
}

module.exports = new abcd();