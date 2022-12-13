
const BasePage = require('../Page');
const {waitElemLocated} = require('../../helper/waiters');

class HobbyGamesPage extends BasePage {

    get hobbygamesCart(){
        return $('.with-icon.cart-status.cart-count');
    }
    
    get hobbygamesCartIcon(){
        return $('.cart-icon');
    }

    get gethobbygamesProducts(){
        return $('.col-md-9');
    }

    async getHobbyGamesProductItem(elementNumber){
        return $(`.row.products-container .col-lg-4:nth-child(${elementNumber})`);
    }

    async getHobbyGamesProductItemToCart(elementNumber){
        return $(`.row.products-container .col-lg-4:nth-child(${elementNumber}) .to-cart`);
    }

    async open() {
        await super.open('https://hobbygames.by/warhammer-40000/');
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

    async addProductItemToCart(elementNumber){
        const linktoproducts = await waitElemLocated(this.gethobbygamesProducts);
        await linktoproducts.scrollIntoView();
        const linktoproduct = await this.getHobbyGamesProductItemToCart(elementNumber);
        await this.clickOnElem(linktoproduct);
    }

    async openCart(){
        await this.clickOnElem(this.hobbygamesCart);
    }

    async howManyProductsInCart(){
        return await this.hobbygamesCartIcon.getText();
    }
}

module.exports = new HobbyGamesPage();