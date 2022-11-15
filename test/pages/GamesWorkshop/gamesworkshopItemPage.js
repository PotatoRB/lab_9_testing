const BasePage = require('../Page');
const {waitElemLocated} = require('../../helper/waiters');

class GamesworkshopItemPage extends BasePage {

    async clickOnElem(element) {
        await waitElemLocated(element);
        if(await element.waitForClickable({timeout:10000})){
            await element.click();
        }
    }
}

module.exports = new GamesworkshopItemPage();