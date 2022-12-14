"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Account = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
class Account {
    constructor(accountOwner, lead, parentAccount, phone, webSite, type, employees, annualRevenue, industry, description, billingStreet, billingCity, billingCountry, billingState, billingZipPostalCode, shippingStreet, shippingCity, shippingCountry, shippingState, shippingZipPostalCode) {
        this.accountOwner = accountOwner;
        this.lead = new mongoose_1.default.Types.ObjectId(lead);
        this.parentAccount = parentAccount;
        this.phone = phone;
        this.webSite = webSite;
        this.type = type;
        this.employees = employees;
        this.annualRevenue = annualRevenue;
        this.industry = industry;
        this.description = description;
        this.billingStreet = billingStreet;
        this.billingCity = billingCity;
        this.billingCountry = billingCountry;
        this.billingState = billingState;
        this.billingZipPostalCode = billingZipPostalCode;
        this.shippingStreet = shippingStreet;
        this.shippingCity = shippingCity;
        this.shippingCountry = shippingCountry;
        this.shippingState = shippingState;
        this.shippingZipPostalCode = shippingZipPostalCode;
    }
    getLead() {
        return this;
    }
    setLead(lead) {
        this.accountOwner = lead.accountOwner;
        this.lead = lead.lead;
        this.parentAccount = lead.parentAccount;
        this.phone = lead.phone;
        this.webSite = lead.webSite;
        this.type = lead.type;
        this.employees = lead.employees;
        this.annualRevenue = lead.annualRevenue;
        this.industry = lead.industry;
        this.description = lead.description;
        this.billingStreet = lead.billingStreet;
        this.billingCity = lead.billingCity;
        this.billingCountry = lead.billingCountry;
        this.billingState = lead.billingState;
        this.billingZipPostalCode = lead.billingZipPostalCode;
        this.shippingStreet = lead.shippingStreet;
        this.shippingCity = lead.shippingCity;
        this.shippingCountry = lead.shippingCountry;
        this.shippingState = lead.shippingState;
        this.shippingZipPostalCode = lead.shippingZipPostalCode;
    }
    toJson() {
        return {
            "accountOwner": this.accountOwner,
            "lead": this.lead,
            "parentAccount": this.parentAccount,
            "phone": this.phone,
            "type": this.type,
            "employees": this.employees,
            "annualRevenue": this.annualRevenue,
            "industry": this.industry,
            "description": this.description,
            "billingStreet": this.billingStreet,
            "billingCity": this.billingCity,
            "billingCountry": this.billingCountry,
            "billingState": this.billingState,
            "billingZipPostalCode": this.billingZipPostalCode,
            "shippingStreet": this.shippingStreet,
            "shippingCity": this.shippingCity,
            "shippingCountry": this.shippingCountry,
            "shippingState": this.shippingState,
            "shippingZipPostalCode": this.shippingZipPostalCode,
        };
    }
}
exports.Account = Account;
