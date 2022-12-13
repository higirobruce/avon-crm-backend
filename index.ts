import { Lead } from './classRepo/leads';
import express, {Express,Request, Response } from 'express'



const PORT = process.env.CRM_PORT ? process.env.CRM_PORT  : 8765

const app:Express = express();

app.listen(PORT, ()=>{
    const lead:Lead = new Lead('2320d328-7ac5-11ed-a1eb-0242ac120002','Lead Owner1', "Miss", 'Bruce', 'Higiro', 'CVL', 'higirobru@gmail.com', 'Sofware Eng', 'Cold', false,'New',10, "Advertisment", 2, "Chemical industries", "kdfdj");
    const lead2:Lead = new Lead('2d1ad90a-7ac5-11ed-a1eb-0242ac120002','Lead Owner2', "Mr", 'Yves', 'Nshuti', 'INYANGE', 'bhigiro@cvl.co.rw', 'Finance', 'Hot', false,'Qualified',10, "On Site", 2, "Financial services, professional services", "kdfdj");
    lead.setLead(lead2);
    console.log(lead.toJson());
    console.log(`App listening on port ${PORT}`)
})