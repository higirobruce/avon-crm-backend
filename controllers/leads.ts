import { iLead, Lead } from "../classRepo/leads";
import { iLeadDocument, LeadModel } from "../models/leads";



export async function getAllLeads(): Promise<iLeadDocument[]> {
    //TODO
    //get all the leads from the DB
    //Use of mongoose find

    let leads = await LeadModel.find({});

    return leads;
}


// TODO
export async function saveLead(lead: Lead) {
    // const lead:Lead = new Lead('Lead Owner1', "Miss", 'Bruce', 'Higiro', 'CVL', 'higirobru@gmail.com', 'Sofware Eng', 'Cold', false,'New',10, "Advertisment", 2, "Chemical industries", "kdfdj");
    // const lead2:Lead = new Lead('Lead Owner2', "Mr", 'Yves', 'Nshuti', 'INYANGE', 'bhigiro@cvl.co.rw', 'Finance', 'Hot', false,'Qualified',10, "On Site", 2, "Financial services, professional services", "kdfdj");

    return await LeadModel.create(lead);
}

//TODO
export async function getLeadById(id: string): Promise<iLeadDocument | null> {
    const lead = await LeadModel.findById(id);

    return lead ? lead : null;
}


//TODO
export async function updateLead(lead: Lead, id: string) {

    return await LeadModel.findByIdAndUpdate(id, {
        $set: {
            leadOwner: lead.leadOwner,
            salutation: lead.salutation,
            firstName: lead.firstName,
            company: lead.company,
            email: lead.email,
            title: lead.title,
            rating: lead.rating,
            followUp: lead.followUp,
            status: lead.status,
            numberOfEmployees: lead.numberOfEmployees,
            leadSource: lead.leadSource,
            annualRevenue: lead.annualRevenue,
            industry: lead.industry,
            description: lead.description,
        }
    });
}