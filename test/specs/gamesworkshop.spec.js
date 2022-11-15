const GamesworkshopPage = require('../pages/GamesWorkshop/gamesworkshopPage');
const GamesworkshopItemPage = require('../pages/GamesWorkshop/gamesworkshopItemPage');

describe('Add item to cart', function(){

    it('should load GamesWorkshop page', async() => {
        await GamesworkshopPage.open();
        await GamesworkshopPage.windowMaximize();
        await expect(browser).toHaveUrl('https://www.games-workshop.com/en-WW/Warhammer-40-000/');
    })

    it('should accept cookie', async() => {
        await GamesworkshopPage.acceptCookie();
        let cookieContainerStatus = await GamesworkshopPage.getCookieContainerStatus();
        await expect(cookieContainerStatus) === false;
    })

    it('should open senctions and set filters', async() => {
        await GamesworkshopPage.openSectionItemAndCheckFilter(1,3);
        await GamesworkshopPage.openSectionItemAndCheckFilter(9,3);
        await GamesworkshopPage.openSectionItemAndCheckFilter(7,7);
        let ItemCardName = await GamesworkshopPage.getItemCardName(1);
        await expect(ItemCardName).toEqual('Baneblade Sponsons And Accessories');
    })
})