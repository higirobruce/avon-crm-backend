"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Contact = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
class Contact {
    constructor(salutation, firstName, lastName, email, phone, mobile, title, account, reportsTo, mailingStreet, mailingCity, mailingCountry, mailingState, mailingZipPostalCode, otherStreet, otherCity, otherCountry, otherState, otherZipPostalCode) {
        this.salutation = salutation;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.phone = phone;
        this.mobile = mobile;
        this.title = title;
        this.account = new mongoose_1.default.Types.ObjectId(account);
        this.reportsTo = new mongoose_1.default.Types.ObjectId(reportsTo);
        this.mailingStreet = mailingStreet;
        this.mailingCity = mailingCity;
        this.mailingCountry = mailingCountry;
        this.mailingState = mailingState;
        this.mailingZipPostalCode = mailingZipPostalCode;
        this.otherStreet = otherStreet;
        this.otherCity = otherCity;
        this.otherCountry = otherCountry;
        this.otherState = otherState;
        this.otherZipPostalCode = otherZipPostalCode;
    }
    getLead() {
        return this;
    }
    setLead(contact) {
        this.salutation = contact.salutation;
        this.firstName = contact.firstName;
        this.lastName = contact.lastName;
        this.email = contact.email;
        this.phone = contact.phone;
        this.mobile = contact.mobile;
        this.title = contact.title;
        this.account = contact.account;
        this.reportsTo = contact.reportsTo;
        this.mailingStreet = contact.mailingStreet;
        this.mailingCity = contact.mailingCity;
        this.mailingCountry = contact.mailingCountry;
        this.mailingState = contact.mailingState;
        this.mailingZipPostalCode = contact.mailingZipPostalCode;
        this.otherStreet = contact.otherStreet;
        this.otherCity = contact.otherCity;
        this.otherCountry = contact.otherCountry;
        this.otherState = contact.otherState;
        this.otherZipPostalCode = contact.otherZipPostalCode;
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
        };
    }
}
exports.Contact = Contact;
