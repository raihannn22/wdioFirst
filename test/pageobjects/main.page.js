import Page from "./page";

class main extends Page{
    constructor(){
        super('MainActivity');
    }

    get garis3 (){
        return  $('accessibility id:drawer_open');
    }

    get autoQuote (){
        return $("-android uiautomator:new UiSelector().text(\"AUTO QUOTE\")");
    }

    async clickGetAutoQoute(){
        await this.garis3.click();
        await this.autoQuote.click();
    }
}

export default new main();