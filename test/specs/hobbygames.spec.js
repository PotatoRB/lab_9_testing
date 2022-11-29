const HobbyGamesPage = require('../pages/GamesWorkshop/hobbygamesPage');

describe('Add Product to Card', function(){

    it('should load HobbyGames page', async() => {
        await HobbyGamesPage.open();
        await HobbyGamesPage.windowMaximize();
        await expect(browser).toHaveUrl('https://hobbygames.by/warhammer-40000/');
    })

    it('should add product in cart and check product in cart', async() => {
        await browser.pause(10000);
        await HobbyGamesPage.addProductItemToCart(2);
        await HobbyGamesPage.openCart();
        const countsOfProducts = await HobbyGamesPage.howManyProductsInCart();
        await browser.pause(10000);
        await expect(countsOfProducts).toBe('1');
    })
})