import { Contact } from "../classRepo/contacts";
import { iLead, Lead } from "../classRepo/leads";
import { ContactModel, iContactDocument } from "../models/contacts";

export async function getAllContacts(): Promise<iContactDocument[]> {
    //TODO
    //get all the leads from the DB
    //Use of mongoose find

    let leads = await ContactModel.find({});

    return leads;
}


// TODO
export async function saveContact(contact:Contact) {
    
    return await ContactModel.create(contact);
}

//TODO
export async function getContactById(id: string): Promise<iContactDocument | null> {
    const lead = await ContactModel.findById(id);

    return lead ? lead : null;
}


//TODO
export async function updateContact(contact:Contact, id: string) {

    return await ContactModel.findByIdAndUpdate(id, {
        $set: {
            "salutation": contact.salutation,
            "firstName": contact.firstName,
            "lastName": contact.lastName,
            "email": contact.email,
            "phone": contact.phone,
            "mobile": contact.mobile,
            "title": contact.title,
            "account": contact.account,
            "reportsTo": contact.reportsTo,
            "mailingStreet": contact.mailingStreet,
            "mailingCity": contact.mailingCity,
            "mailingCountry": contact.mailingCountry,
            "mailingState": contact.mailingState,
            "mailingZipPostalCode": contact.mailingZipPostalCode,
            "otherStreet": contact.otherStreet,
            "otherCity": contact.otherCity,
            "otherCountry": contact.otherCountry,
            "otherState": contact.otherState,
            "otherZipPostalCode": contact.otherZipPostalCode,
        }
    });
}