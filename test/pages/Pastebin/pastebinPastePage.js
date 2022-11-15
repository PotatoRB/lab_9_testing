const BasePage = require('../Page');
const {waitElemLocated} = require('../../helper/waiters');

class PastebinPastePage extends BasePage {

    get pasteBashLink() {
        return $('.left .btn');
    }

    get pasteRawLink() {
        return $('.right a:nth-child(1)');
    }

    get pasteRaw() {
        return $('pre');
    }

    async clickOnElem(element) {
        await waitElemLocated(element);
        if(await element.waitForClickable({timeout:10000})){
            await element.click();
        }
    }

    async getSyntaxHighlighting() {
        return await this.pasteBashLink.getText();
    }

    async getCodeText(){
        await this.clickOnElem(this.pasteRawLink);
        return await this.pasteRaw.getText();
    }
}

module.exports = new PastebinPastePage();