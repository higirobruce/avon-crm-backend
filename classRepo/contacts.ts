import mongoose from "mongoose";

export interface iContact {
    salutation: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    mobile: string;
    title: string;
    account: mongoose.Types.ObjectId;
    reportsTo: mongoose.Types.ObjectId;
    mailingStreet: string;
    mailingCity: string;
    mailingCountry: string;
    mailingState: string;
    mailingZipPostalCode: string;
    otherStreet: string;
    otherCity: string;
    otherCountry: string;
    otherState: string;
    otherZipPostalCode: string;
}

export class Contact implements iContact {
    salutation: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    mobile: string;
    title: string;
    account: mongoose.Types.ObjectId;
    reportsTo: mongoose.Types.ObjectId;
    mailingStreet: string;
    mailingCity: string;
    mailingCountry: string;
    mailingState: string;
    mailingZipPostalCode: string;
    otherStreet: string;
    otherCity: string;
    otherCountry: string;
    otherState: string;
    otherZipPostalCode: string;

    constructor(
        salutation: string,
        firstName: string,
        lastName: string,
        email: string,
        phone: string,
        mobile: string,
        title: string,
        account: string,
        reportsTo: string,
        mailingStreet: string,
        mailingCity: string,
        mailingCountry: string,
        mailingState: string,
        mailingZipPostalCode: string,
        otherStreet: string,
        otherCity: string,
        otherCountry: string,
        otherState: string,
        otherZipPostalCode: string,
    ) {
        this.salutation = salutation;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.phone = phone;
        this.mobile = mobile;
        this.title = title;
        this.account = new mongoose.Types.ObjectId(account)
        this.reportsTo = new mongoose.Types.ObjectId(reportsTo)
        this.mailingStreet = mailingStreet
        this.mailingCity = mailingCity
        this.mailingCountry = mailingCountry
        this.mailingState = mailingState
        this.mailingZipPostalCode = mailingZipPostalCode
        this.otherStreet = otherStreet
        this.otherCity = otherCity
        this.otherCountry = otherCountry
        this.otherState = otherState
        this.otherZipPostalCode = otherZipPostalCode

    }

    getLead(): Contact {
        return this;
    }

    setLead(contact: Contact) {
        this.salutation = contact.salutation;
        this.firstName = contact.firstName;
        this.lastName = contact.lastName;
        this.email = contact.email;
        this.phone = contact.phone;
        this.mobile = contact.mobile;
        this.title = contact.title;
        this.account = contact.account;
        this.reportsTo = contact.reportsTo;
        this.mailingStreet = contact.mailingStreet
        this.mailingCity = contact.mailingCity
        this.mailingCountry = contact.mailingCountry
        this.mailingState = contact.mailingState
        this.mailingZipPostalCode = contact.mailingZipPostalCode
        this.otherStreet = contact.otherStreet
        this.otherCity = contact.otherCity
        this.otherCountry = contact.otherCountry
        this.otherState = contact.otherState
        this.otherZipPostalCode = contact.otherZipPostalCode
    }

    toJson() {
        return {
            "salutation": this.salutation,
            "firstName": this.firstName,
            "lastName": this.lastName,
            "email": this.email,
            "phone": this.phone,
            "mobile": this.mobile,
            "title": this.title,
            "account": this.account,
            "reportsTo": this.reportsTo,
            "mailingStreet": this.mailingStreet,
            "mailingCity": this.mailingCity,
            "mailingCountry": this.mailingCountry,
            "mailingState": this.mailingState,
            "mailingZipPostalCode": this.mailingZipPostalCode,
            "otherStreet": this.otherStreet,
            "otherCity": this.otherCity,
            "otherCountry": this.otherCountry,
            "otherState": this.otherState,
            "otherZipPostalCode": this.otherZipPostalCode,
        }
    }

}
