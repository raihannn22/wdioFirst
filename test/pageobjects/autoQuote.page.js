import Page from "./page";

class autoQuote extends Page{
    constructor() {
        super('AutoQuoteActivity');
    }

    get zipCode () {
        return $('id:silktest.insurancemobile:id/autoquote_zip');
    }

    get email (){
        return $('id:silktest.insurancemobile:id/autoquote_email');
    }

    get age (){
        return $('id:silktest.insurancemobile:id/autoquote_age');
    }

    get genderFemale(){
        return $('id:silktest.insurancemobile:id/radio_female');
    }

    get genderMale(){
        return $('id:silktest.insurancemobile:id/radio_male');
    }

    get ratingDriver(){
        return $('id:silktest.insurancemobile:id/rating_driving_record'); // add value
    }

    //scrol view

    get radioCardTruck(){
        return $('id:silktest.insurancemobile:id/radio_truck');// add value
    }

    get radioCardCar(){
        return $('id:silktest.insurancemobile:id/radio_car');// add value
    }

    get carYear(){
        return $('id:silktest.insurancemobile:id/autoquote_car_year'); // add value
    }

    get carMake(){
        return $('id:silktest.insurancemobile:id/car_make'); // dropdown
    }

    selectCarMake(make){
        return $("-android uiautomator:new UiSelector().text(\""+make+"\")");
    }

    get carModel(){
        return $('id:silktest.insurancemobile:id/car_model'); // dropdown
    }

    selectCarModel(model){
        return $("-android uiautomator:new UiSelector().text(\""+model+"\")");
    }

    get financialInfo(){
        return $('id:silktest.insurancemobile:id/financial_info'); // dropdown
    }

    selectFinancialInfo(model){
        return $("-android uiautomator:new UiSelector().text(\""+model+"\")");
    }

    get submit(){
        return $('id=silktest.insurancemobile:id/submit');
    }



    async fillData(zipCode, email, age, gender, ratingDriver, radioCard, carYear, carMake, carModel, financialInfo){
        await this.zipCode.setValue(zipCode);
        await this.email.setValue(email);
        await this.age.setValue(age);

        if(gender == 'Female'){
            await this.genderFemale.click();
        }else if (gender == 'Male'){
            await this.genderMale.click();
        }
 
        await this.ratingDriver.addValue(ratingDriver);
        
        await  this.scrollIfNeeded(this.radioCardCar);
        if(radioCard === 'Car'){
            await this.radioCardCar.click();
        }else if (radioCard === 'Truck'){
            await this.radioCardTruck.click();
        }

        await this.scrollIfNeeded(this.carYear);
        await this.carYear.setValue(carYear);

        await this.scrollIfNeeded(this.carMake);
        await this.carMake.click();
        await this.selectCarMake(carMake).click();

        await this.scrollIfNeeded(this.carModel);
        await this.carModel.click();
        await this.selectCarModel(carModel).click();
 
        await this.scrollIfNeeded(this.financialInfo);
        await this.financialInfo.click();
        await this.selectFinancialInfo(financialInfo).click();


        await this.scrollIfNeeded(this.submit);
        await this.submit.click();

        
    }
    
}

export default new autoQuote();