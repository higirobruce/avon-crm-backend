"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateLead = exports.getLeadById = exports.saveLead = exports.getAllLeads = void 0;
const leads_1 = require("../models/leads");
function getAllLeads() {
    return __awaiter(this, void 0, void 0, function* () {
        //TODO
        //get all the leads from the DB
        //Use of mongoose find
        let leads = yield leads_1.LeadModel.find({});
        return leads;
    });
}
exports.getAllLeads = getAllLeads;
// TODO
function saveLead(lead) {
    return __awaiter(this, void 0, void 0, function* () {
        // const lead:Lead = new Lead('Lead Owner1', "Miss", 'Bruce', 'Higiro', 'CVL', 'higirobru@gmail.com', 'Sofware Eng', 'Cold', false,'New',10, "Advertisment", 2, "Chemical industries", "kdfdj");
        // const lead2:Lead = new Lead('Lead Owner2', "Mr", 'Yves', 'Nshuti', 'INYANGE', 'bhigiro@cvl.co.rw', 'Finance', 'Hot', false,'Qualified',10, "On Site", 2, "Financial services, professional services", "kdfdj");
        return yield leads_1.LeadModel.create(lead);
    });
}
exports.saveLead = saveLead;
//TODO
function getLeadById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const lead = yield leads_1.LeadModel.findById(id);
        return lead ? lead : null;
    });
}
exports.getLeadById = getLeadById;
//TODO
function updateLead(lead, id) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield leads_1.LeadModel.findByIdAndUpdate(id, {
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
    });
}
exports.updateLead = updateLead;
