const BasePage = require('./Page');
const {waitElemLocated} = require('../helper/waiters');

class PastebinPage extends BasePage {

    get settingsDiv() {
        return $('.-paste');
    }

    get pasteExpDropDown() {
        return $('.field-postform-expiration .select2');
    }

    get pasteExpElem() {
        return $(`.select2-results__options li:nth-child(3)`);
    }

    get pasteExpTextField() {
        return $('.field-postform-expiration .select2-selection__rendered');
    }

    get pasteCodeTextArea() {
        return $('.field-postform-text .textarea');
    }

    get pastePasteNameTitle() {
        return $('.field-postform-name .form-control');
    }

    get pasteCreateNewPasteButton() {
        return $('.form-btn-container .btn');
    }

    get pasteSyntaxHighlightingDropDown() {
        return $('.field-postform-format .select2');
    }

    get pasteSyntaxHighlightingElem() {
        return $('.select2-results__options .select2-results__options li:nth-child(1)');
    }

    get pasteSyntaxHighlightingTextField() {
        return $('.field-postform-format .select2-selection__rendered');
    }

    async open() {
        await super.open('https://pastebin.com/');
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

    async setCodeText(textForEnter){
        await this.pasteCodeTextArea.setValue(textForEnter);
    }

    async getCodeText(){
        return await this.pasteCodeTextArea.getValue();
    }

    async getPasteExpElemement() {
        const scroll = await waitElemLocated(this.settingsDiv);
        await scroll.scrollIntoView();
        await this.clickOnElem(this.pasteExpDropDown);
        await this.clickOnElem(this.pasteExpElem);
        return await this.pasteExpTextField.getText();
    }

    async getSyntaxHighlightingElement() {
        const scroll = await waitElemLocated(this.settingsDiv);
        await scroll.scrollIntoView();
        await this.clickOnElem(this.pasteSyntaxHighlightingDropDown);
        await this.clickOnElem(this.pasteSyntaxHighlightingElem);
        return await this.pasteSyntaxHighlightingTextField.getText();
    }

    async setPasteNameTitleText(textForEnter) {
        await this.pastePasteNameTitle.setValue(textForEnter);
    }
    
    async getPasteNameTitleText() {
        return await this.pastePasteNameTitle.getValue();
    }

    async createPaste(){
        await this.clickOnElem(this.pasteCreateNewPasteButton);
    }
 }

 module.exports = new PastebinPage();