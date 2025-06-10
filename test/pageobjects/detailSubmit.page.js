import Page from "./page";

class detailSubmitPage extends Page{
    constructor() {
        super('QuoteDetailsActivity');
    }

    get zipCode () {
        return $('id:silktest.insurancemobile:id/zipCode');
    }

    get age () {
        return $('id:silktest.insurancemobile:id/age');
    }

    get gender () {
        return $('id:silktest.insurancemobile:id/gender');
    }

    get drivingRecord () {
        return $('id:silktest.insurancemobile:id/drivingRecord');
    }

    get type(){
        return $('id:silktest.insurancemobile:id/type');
    }

    get make(){
        return $('id:silktest.insurancemobile:id/make');
    }

    get year(){
        return $('id:silktest.insurancemobile:id/year');
    }

    get model(){
        return $('id:silktest.insurancemobile:id/model');
    }

    async verificationData(zipCode, age, gender, ratingDriver, radioCard, carYear, carMake, carModel, financialInfo){
        let zipCodes = await this.zipCode.getText();
        zipCodes = zipCodes.replace('Zip Code : ', '');

        console.log(zipCodes + ' INI ZIPCODE!!!!');
        await this.age.getText();
        await this.gender.getText();
        await this.drivingRecord.getText();
        await this.type.getText();
        await this.make.getText();
        await this.year.getText();
        await this.model.getText();
    }
}

export default new detailSubmitPage();