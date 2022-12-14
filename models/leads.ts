
import mongoose,{ Schema, model, connect } from 'mongoose';
import { iLead } from '../classRepo/leads';
import { LeadRatings,LeadSources,LeadStatuses } from '../utils/myTypes';

export interface iLeadDocument extends iLead, mongoose.Document{

}

const leadSchem = new Schema<iLeadDocument>({
    
    leadOwner: String,
    salutation: String,
    firstName: String,
    lastName: String,
    company: String,
    email: String,
    title: String,
    rating: String,
    followUp: Boolean,
    status: String,
    numberOfEmployees: Number,
    leadSource: String,
    annualRevenue: Number,
    industry: String,
    description: String,
})


export const LeadModel = model<iLeadDocument>('Lead',leadSchem)