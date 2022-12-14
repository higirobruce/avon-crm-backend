import mongoose, { Schema } from "mongoose";
import { AccountType, IndustryType } from "../utils/myTypes";
export interface iAccount {

    accountOwner: string;
    lead: mongoose.Types.ObjectId;
    parentAccount: string;
    phone: string;
    webSite: string;
    type: AccountType;
    employees: Number;
    annualRevenue: Number;
    industry: IndustryType;
    description: string;
    billingStreet: string;
    billingCity: string;
    billingCountry: string;
    billingState: string;
    billingZipPostalCode: string;
    shippingStreet: string;
    shippingCity: string;
    shippingCountry: string;
    shippingState: string;
    shippingZipPostalCode: string;
}

export class Account implements iAccount {
    accountOwner: string;
    lead: mongoose.Types.ObjectId;
    parentAccount: string;
    phone: string;
    webSite: string;
    type: AccountType;
    employees: Number;
    annualRevenue: Number;
    industry: IndustryType;
    description: string;
    billingStreet: string;
    billingCity: string;
    billingCountry: string;
    billingState: string;
    billingZipPostalCode: string;
    shippingStreet: string;
    shippingCity: string;
    shippingCountry: string;
    shippingState: string;
    shippingZipPostalCode: string;

    constructor(
        accountOwner: string,
        lead: string,
        parentAccount:  string,
        phone: string,
        webSite: string,
        type: AccountType,
        employees: Number,
        annualRevenue: Number,
        industry: IndustryType,
        description: string,
        billingStreet: string,
        billingCity: string,
        billingCountry: string,
        billingState: string,
        billingZipPostalCode: string,
        shippingStreet: string,
        shippingCity: string,
        shippingCountry: string,
        shippingState: string,
        shippingZipPostalCode: string,
    ) {
        this.accountOwner = accountOwner;
        this.lead = new mongoose.Types.ObjectId(lead);
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

    getLead(): Account {
        return this;
    }

    setLead(lead: Account) {
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
        this.shippingZipPostalCode = lead.shippingZipPostalCode;    }

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
        }
    }

}
