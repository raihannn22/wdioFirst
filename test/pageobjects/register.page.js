import Page from './page';
class register extends Page {
    constructor() {
        super('SignUpActivity')
    }
    get firstName(){
        return $('id=silktest.insurancemobile:id/firstName')
    }

    get lastName(){
        return $('id=silktest.insurancemobile:id/lastName')
    }
    get birthday(){
        return $('id=silktest.insurancemobile:id/birthday')
    }
    get email(){
        return $('id=silktest.insurancemobile:id/email')
    }
    get password(){
        return $('id=silktest.insurancemobile:id/password')
    }
    get submit(){
        return $('id=silktest.insurancemobile:id/sign_up_button')
    }

    get registerPage(){
        return $('id=silktest.insurancemobile:id/sign_up_fab')
    }

    async register (firstName, lastName, birthday, email, password) {
        await this.registerPage.click();
        await this.firstName.setValue(firstName);
        await this.lastName.setValue(lastName);
        await this.birthday.setValue(birthday);
        await this.email.setValue(email);
        await this.password.setValue(password);
        await this.submit.click();
    }
}

export default new register();