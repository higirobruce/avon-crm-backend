
import { Lead } from './classRepo/leads';
import express, { Express, Request, Response } from 'express'
import { getAllLeads, getLeadById, saveLead, updateLead } from './controllers/leads';

import mongoose, {SchemaTypes} from 'mongoose'
import { LeadModel } from './models/leads';
import { getAllAccounts, saveAccount } from './controllers/accounts';
import { Account } from './classRepo/accounts';
import { Contact } from './classRepo/contacts';
import { saveContact } from './controllers/contacts';


const PORT = process.env.CRM_PORT ? process.env.CRM_PORT : 8765

//Set up default mongoose connection
var mongoDB =
    "mongodb://riskAdmin:risk%40CVL2020@localhost:27017/avon-crm?authSource=admin";


// var mongoDB =
//   "mongodb+srv://mongo-admin:2tij6e0anAgKU6tb@myfreecluster.kxvgw.mongodb.net/construck-playground?retryWrites=true&w=majority";
// "mongodb+srv://root:Beniyak1@cluster0.8ycbagi.mongodb.net/construck?retryWrites=true&w=majority";

// var mongoDB = "";
// mongoDB = process.env.CONS_MONGO_DB;

mongoose.connect(mongoDB);
//Get the default connection
var db = mongoose.connection;
//Bind connection to error event (to get notification of connection errors)
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.on("error", console.error.bind(console, "MongoDB connection error:"));

db.once("open", () => console.log("connected to db"));

const app: Express = express();

app.listen(PORT, async () => {
    // const lead: Lead = new Lead('Lead Owner1', "Miss", 'Bruce', 'Higiro', 'CVL', 'higirobru@gmail.com', 'Sofware Eng', 'Cold', false, 'New', 10, "Advertisment", 2, "Chemical industries", "kdfdj");
    // const lead2: Lead = new Lead('Lead Owner2', "Mr", 'Yves', 'Nshuti', 'INYANGE', 'bhigiro@cvl.co.rw', 'Finance', 'Hot', false, 'Qualified', 10, "On Site", 2, "Financial services, professional services", "kdfdj");

    // const account: Account = new Account("Owner1", "6398543209792daf8667bd3b",
    //    "6398543209792daf8667bd3b", "0783575582", "http://shapeherd.com", "Customer",
    //     100, 500000000, "Education", "Description of the account", "Street1", "",
    //     "Rwanda", "Kigali", "89009", "", "", "Rwanda", "Kigali", "890393")

    // await saveAccount(account);

    // let accounts = await getAllAccounts();

    // console.log(accounts[0]?.accountOwner);

    // const contact = new Contact("Mr","Bruce","Higiro","brucehigiro@gmail.com","07839488499","07837883733","Senior Marketing Officer",
    // "63989071c97eff1e39ca756f","63989071c97eff1e39ca756f","Mailing Street","","","","","Other Street","","","","");

    // await saveContact(contact);


    console.log(`App listening on port ${PORT}`)
})