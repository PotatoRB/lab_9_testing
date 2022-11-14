async function waitElemLocated(element){
    await element.waitForExist({timeout:10000});
    return element;
}

module.exports = {waitElemLocated}