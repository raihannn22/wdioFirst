import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    constructor () {
        super('LoginActivity');
    }

    /**
     * define selectors using getter methods
     */
    get inputEmail () {
        return $('id=silktest.insurancemobile:id/email');
    }

    get inputPassword () {
        return $('id=silktest.insurancemobile:id/password');
    }

    get btnSubmit () {
        return $('id=silktest.insurancemobile:id/log_in_button');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (email, password) {
        await this.inputEmail.setValue(email);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('login');
    }
}

export default new LoginPage();
