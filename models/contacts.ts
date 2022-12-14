
import mongoose, { Schema, model, connect } from 'mongoose';
import { iContact } from '../classRepo/contacts';

export interface iContactDocument extends iContact, mongoose.Document {

}

const contactSchema = new Schema<iContactDocument>({

    salutation: { type: String },
    firstName: { type: String },
    lastName: { type: String },
    email: { type: String },
    phone: { type: String },
    mobile: { type: String },
    title: { type: String },
    account: mongoose.Types.ObjectId,
    reportsTo: mongoose.Types.ObjectId,
    mailingStreet: { type: String },
    mailingCity: { type: String },
    mailingCountry: { type: String },
    mailingState: { type: String },
    mailingZipPostalCode: { type: String },
    otherStreet: { type: String },
    otherCity: { type: String },
    otherCountry: { type: String },
    otherState: { type: String },
    otherZipPostalCode: { type: String },
})


export const ContactModel = model<iContactDocument>('Contact', contactSchema)