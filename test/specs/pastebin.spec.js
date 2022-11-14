const PastebinPage = require('../pages/pastebinPage');
const PastebinPastePage = require('../pages/pastebinPastePage');

describe('I Can Win', function(){

    it('should load Pastebin page', async() => {
        await PastebinPage.open();
        await PastebinPage.windowMaximize();
        await expect(browser).toHaveUrl('https://pastebin.com/');
    })

    it('should paste Hello from WebDriver into Code textarea', async() => {
        await PastebinPage.setCodeText('Hello from WebDriver');
        const pasteCodeTextAreaText = await PastebinPage.getCodeText();
        await expect(pasteCodeTextAreaText).toEqual('Hello from WebDriver');
    })

    it('should click on dropdown Paste Expiration and choose 10 Minutes', async() => {
        const elementText = await PastebinPage.getPasteExpElemement(3);
        await expect(elementText).toEqual('10 Minutes');
    })

    it('should paste helloweb into Paste Name / Title', async() => {
        await PastebinPage.setPasteNameTitleText('helloweb');
        const pastePasteNameTitleText = await PastebinPage.getPasteNameTitleText();
        expect(pastePasteNameTitleText).toEqual('helloweb');
    })

    it('should click on Create New Paste button and create Paste', async() => {
        await PastebinPage.createPaste();
        expect(browser).toHaveTitle('helloweb - Pastebin.com');
    })
}) 

describe('Bring It On', function(){

    let bashCode = `git config --global user.name "New Sheriff in Town" \ngit reset $ (git commit-tree HEAD ^ {tree} -m "Legacy code") \ngit push origin master --force`;
    let forPasteNameTitle = 'how to gain dominance among developers';

    it('should load Pastebin page', async() => {
        await PastebinPage.open();
        await PastebinPage.windowMaximize();
        await expect(browser).toHaveUrl('https://pastebin.com/');
    })

    it('should paste Bash Code into Code textarea', async() => {
        await PastebinPage.setCodeText(bashCode);
        const pasteCodeTextAreaText = await PastebinPage.getCodeText();
        await expect(pasteCodeTextAreaText).toEqual(bashCode);
    })

    it('should click on dropdown Syntax Highlighting and choose Bash', async() => {
        const elementText = await PastebinPage.getSyntaxHighlightingElement();
        await expect(elementText).toEqual('Bash');
    })

    it('should click on dropdown Paste Expiration and choose 10 Minutes', async() => {
        const elementText = await PastebinPage.getPasteExpElemement();
        await expect(elementText).toEqual('10 Minutes');
    })

    it('should paste forPasteNameTitle into Paste Name / Title', async() => {
        await PastebinPage.setPasteNameTitleText(forPasteNameTitle);
        const pastePasteNameTitleText = await PastebinPage.getPasteNameTitleText();
        expect(pastePasteNameTitleText).toEqual(forPasteNameTitle);
    })

    it('should click on Create New Paste button and create Paste', async() => {
        await PastebinPage.createPaste();
        expect(browser).toHaveTitle('how to gain dominance among developers - Pastebin.com');
    })

    it('should check Browser page title matches Paste Name / Title', async() => {
        expect(browser).toHaveTitle('how to gain dominance among developers - Pastebin.com');
    })

    it('should check is Syntax is suspended for bash', async() => {
        const elementText = await PastebinPastePage.getSyntaxHighlighting();
        await expect(elementText).toEqual('Bash');
    })

    it('should check is Code is equal bashCode', async() => {
        const pasteCodeTextAreaText = await PastebinPastePage.getCodeText();
        await expect(pasteCodeTextAreaText).toEqual(bashCode);
    })
})