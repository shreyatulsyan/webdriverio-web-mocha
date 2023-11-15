const Page = require("./page");

class HorizontalSlider extends Page{
    get slider(){
        return $(`//div[@class='sliderContainer']/input`);
    }
    get rangeValue(){
        return $('#range')
    }
}

module.exports = new HorizontalSlider();