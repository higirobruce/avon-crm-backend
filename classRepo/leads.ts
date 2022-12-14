import { IndustryType, LeadRatings, LeadSources, LeadStatuses } from "../utils/myTypes";


export interface iLead {
    leadOwner: string;
    salutation: string;
    firstName: string;
    lastName: string;
    company: string;
    email: string;
    title: string;
    rating: LeadRatings;
    followUp: boolean;
    status: LeadStatuses;
    numberOfEmployees: number;
    leadSource: LeadSources;
    annualRevenue: number;
    industry: IndustryType;
    description: string;
}

export class Lead implements iLead {
    leadOwner: string;
    salutation: string;
    firstName: string;
    lastName: string;
    company: string;
    email: string;
    title: string;
    rating: LeadRatings;
    followUp: boolean;
    status: LeadStatuses;
    numberOfEmployees: number;
    leadSource: LeadSources;
    annualRevenue: number;
    industry: IndustryType;
    description: string;

    constructor(
        leadOwner: string,
        salutation: string,
        firstName: string,
        lastName: string,
        company: string,
        email: string,
        title: string,
        rating: LeadRatings,
        followUp: boolean,
        status: LeadStatuses,
        numberOfEmployees: number,
        leadSource: LeadSources,
        annualRevenue: number,
        industry: IndustryType,
        description: string) {
        this.leadOwner = leadOwner;
        this.salutation = salutation;
        this.firstName = firstName;
        this.lastName = lastName;
        this.company = company;
        this.email = email;
        this.title = title;
        this.rating = rating;
        this.followUp = followUp;
        this.status = status;
        this.numberOfEmployees = numberOfEmployees;
        this.leadSource = leadSource;
        this.annualRevenue = annualRevenue;
        this.industry = industry;
        this.description = description;
    }

    getLead(): Lead {
        return this;
    }

    setLead(lead: Lead) {
        this.leadOwner = lead.leadOwner;
        this.salutation = lead.salutation;
        this.firstName = lead.firstName;
        this.lastName = lead.lastName;
        this.company = lead.company;
        this.email = lead.email;
        this.title = lead.title;
        this.rating = lead.rating;
        this.followUp = lead.followUp;
        this.status = lead.status;
        this.numberOfEmployees = lead.numberOfEmployees;
        this.leadSource = lead.leadSource;
        this.annualRevenue = lead.annualRevenue;
        this.industry = lead.industry;
        this.description = lead.description;
    }

    toJson() {
        return {
            "leadOwner": this.leadOwner,
            "salutation": this.salutation,
            "firstName": this.firstName,
            "company": this.company,
            "email": this.email,
            "title": this.title,
            "rating": this.rating,
            "followUp": this.followUp,
            "status": this.status,
            "numberOfEmployees": this.numberOfEmployees,
            "leadSource": this.leadSource,
            "annualRevenue": this.annualRevenue,
            "industry": this.industry,
            "description": this.description,
        }
    }

}
