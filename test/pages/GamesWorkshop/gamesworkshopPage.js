const BasePage = require('../Page');
const {waitElemLocated} = require('../../helper/waiters');

class GamesworkshopPage extends BasePage {

    get gamesworkshopCookieAcceptButton(){
        return $('#onetrust-accept-btn-handler');
    }

    get gamesworkshopCookieContainer(){
        return $('div.ot-sdk-container');
    }

    getItemCard(elementNumber){
        return $(`.product-listing li:nth-child(${elementNumber || 1})`);
    }

    getSectionItem(elementNumber){
        return $(`#dimensions h3:nth-child(${elementNumber || 1})`);
    }

    getFilterItem(elementSection, elementFilter){
        return $(`#dimensions h3:nth-child(${elementSection || 1})+ul li:nth-child(${elementFilter || 1})`);
    }

    getItemCardNameSelector(elementNumber){
        return $(`.product-listing li:nth-child(${elementNumber || 1}) .product-item__name`);
    }

    async open() {
        await super.open('https://www.games-workshop.com/en-WW/Warhammer-40-000/');
    }

    async windowMaximize() {
        await browser.maximizeWindow();
    }

    async clickOnElem(element) {
        await waitElemLocated(element);
        if(await element.waitForClickable({timeout:10000})){
            await element.click();
        }
    }

    async acceptCookie(){
        await this.clickOnElem(this.gamesworkshopCookieAcceptButton);
    }

    async getCookieContainerStatus(){
        await this.gamesworkshopCookieContainer.isExisting();
    }

    async openSectionItemAndCheckFilter(elementSection, elementFilter){
        var elementSectionClass = await this.getSectionItem(elementSection).getAttribute('class');
        if(elementSectionClass.includes('btn-expand'))
        {
            await this.clickOnElem(this.getSectionItem(elementSection));
            await this.clickOnElem(this.getFilterItem(elementSection, elementFilter));
        }
        if(elementSectionClass.includes('btn-collapse'))
        {
            await this.clickOnElem(this.getFilterItem(elementSection, elementFilter));
        }
        await browser.pause(5000);
    }

    async getItemCardName(elementNumber){
        return await this.getItemCardNameSelector(elementNumber).getText();
    }
}

module.exports = new GamesworkshopPage();