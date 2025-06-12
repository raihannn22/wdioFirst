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

    async verificationData(zipCode, email, age, gender, ratingDriver, radioCard, carYear, carMake, carModel, financialInfo){
        const zipCodes = await this.zipCode.getText();
        const OnlyCode = zipCodes.replace('Zip Code: ', '').trim();
        const zipMatch = zipCode == OnlyCode;
        console.log("zip code", zipCode, OnlyCode, zipMatch);

        const ages = await this.age.getText();
        const OnlyAge = ages.replace('Age: ', '').trim();
        const ageMatch = age == OnlyAge;
        console.log("age", age, OnlyAge, ageMatch);

        const genders = await this.gender.getText();
        const OnlyGender = genders.replace('Gender: ', '').trim();
        const genderMatch = gender == OnlyGender;
        console.log("gender", gender, OnlyGender, genderMatch);

        const drivingRecords = await this.drivingRecord.getText();
        const OnlyDrivingRecord = drivingRecords.replace('Driving Record: ', '').trim();

        let ratingLabel = ratingDriver;
        if (ratingDriver == 1) ratingLabel = 'Fair';
        else if (ratingDriver == 2 || ratingDriver == 3) ratingLabel = 'Good';
        else if (ratingDriver == 4) ratingLabel = 'Excellent';

        const drivingRecordMatch = ratingLabel == OnlyDrivingRecord;
        console.log("driving record", ratingDriver, OnlyDrivingRecord, drivingRecordMatch);

        const types = await this.type.getText();
        const OnlyType = types.replace('Type: ', '').trim();
        const typeMatch = radioCard == OnlyType;
        console.log("type", radioCard, OnlyType, typeMatch);

        const makes = await this.make.getText();
        const OnlyMake = makes.replace('Make: ', '').trim();
        const makeMatch = carMake == OnlyMake;
        console.log("make", carMake, OnlyMake, makeMatch);

        const years = await this.year.getText();
        const OnlyYear = years.replace('Year: ', '').trim();
        const yearMatch = carYear == OnlyYear;
        console.log("year", carYear, OnlyYear, yearMatch);

        const models = await this.model.getText();
        const OnlyModel = models.replace('Model: ', '').trim();
        const modelMatch = carModel == OnlyModel;
        console.log("model", carModel, OnlyModel, modelMatch);

        // Logging hasil cocok atau tidak
        console.log("inidaramya: ",{ zipMatch, ageMatch, genderMatch, drivingRecordMatch, typeMatch, makeMatch, yearMatch, modelMatch });

        // Gabungkan semua hasil perbandingan
        return zipMatch && ageMatch && genderMatch && drivingRecordMatch && typeMatch && makeMatch && yearMatch && modelMatch;
    }
}

export default new detailSubmitPage();