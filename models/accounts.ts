
import mongoose, { Schema, model, connect } from 'mongoose';
import { iAccount } from '../classRepo/accounts';

export interface iAccountDocument extends iAccount, mongoose.Document {

}

const accountSchem = new Schema<iAccountDocument>({
    accountOwner: {
        type: String,
        required: true
    },
    lead: {
        type: mongoose.Schema.Types.ObjectId
    },
    parentAccount: {
        type: String
    },
    phone: {
        type: String
    },
    webSite: {
        type: String
    },
    type: {
        type: String
    },
    employees: {
        type: Number
    },
    annualRevenue: {
        type: Number
    },
    industry: {
        type: String
    },
    description: {
        type: String
    },
    billingStreet: {
        type: String
    },
    billingCity: {
        type: String
    },
    billingCountry: {
        type: String
    },
    billingState: {
        type: String
    },
    billingZipPostalCode: {
        type: String
    },
    shippingStreet: {
        type: String
    },
    shippingCity: {
        type: String
    },
    shippingCountry: {
        type: String
    },
    shippingState: {
        type: String
    },
    shippingZipPostalCode: {
        type: String
    },
})


export const AccountModel = model<iAccountDocument>('Account', accountSchem)