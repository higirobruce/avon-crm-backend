import { Account } from "../classRepo/accounts";
import { AccountModel, iAccountDocument } from "../models/accounts";



export async function getAllAccounts(): Promise<iAccountDocument[]> {
    //TODO
    //get all the accounts from the DB
    //Use of mongoose find

    let accounts = await AccountModel.find({});

    return accounts;
}


// TODO
export async function saveAccount(account: Account) {
    // const lead:Lead = new Lead('Lead Owner1', "Miss", 'Bruce', 'Higiro', 'CVL', 'higirobru@gmail.com', 'Sofware Eng', 'Cold', false,'New',10, "Advertisment", 2, "Chemical industries", "kdfdj");
    // const lead2:Lead = new Lead('Lead Owner2', "Mr", 'Yves', 'Nshuti', 'INYANGE', 'bhigiro@cvl.co.rw', 'Finance', 'Hot', false,'Qualified',10, "On Site", 2, "Financial services, professional services", "kdfdj");

    return await AccountModel.create(account);
}

//TODO
export async function getAccountById(id: string): Promise<iAccountDocument | null> {
    const lead = await AccountModel.findById(id);

    return lead ? lead : null;
}


//TODO
export async function updateAccount(account: Account, id: string) {

    return await AccountModel.findByIdAndUpdate(id, {
        $set: {
            "accountOwner": account.accountOwner,
            "lead": account.lead,
            "parentAccount": account.parentAccount,
            "phone": account.phone,
            "type": account.type,
            "employees": account.employees,
            "annualRevenue": account.annualRevenue,
            "industry": account.industry,
            "description": account.description,
            "billingStreet": account.billingStreet,
            "billingCity": account.billingCity,
            "billingCountry": account.billingCountry,
            "billingState": account.billingState,
            "billingZipPostalCode": account.billingZipPostalCode,
            "shippingStreet": account.shippingStreet,
            "shippingCity": account.shippingCity,
            "shippingCountry": account.shippingCountry,
            "shippingState": account.shippingState,
            "shippingZipPostalCode": account.shippingZipPostalCode,
        }
    });
}