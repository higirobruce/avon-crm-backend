"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const leads_1 = require("./classRepo/leads");
const express_1 = __importDefault(require("express"));
const PORT = process.env.CRM_PORT ? process.env.CRM_PORT : 8765;
const app = (0, express_1.default)();
app.listen(PORT, () => {
    const lead = new leads_1.Lead('2320d328-7ac5-11ed-a1eb-0242ac120002', 'Lead Owner1', "Miss", 'Bruce', 'Higiro', 'CVL', 'higirobru@gmail.com', 'Sofware Eng', 'Cold', false, 'New', 10, "Advertisment", 2, "Chemical industries", "kdfdj");
    const lead2 = new leads_1.Lead('2d1ad90a-7ac5-11ed-a1eb-0242ac120002', 'Lead Owner2', "Mr", 'Yves', 'Nshuti', 'INYANGE', 'bhigiro@cvl.co.rw', 'Finance', 'Hot', false, 'Qualified', 10, "On Site", 2, "Financial services, professional services", "kdfdj");
    lead.setLead(lead2);
    console.log(lead.toJson());
    console.log(`App listening on port ${PORT}`);
});
