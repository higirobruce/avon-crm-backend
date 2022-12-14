"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LeadModel = void 0;
const mongoose_1 = require("mongoose");
const leadSchem = new mongoose_1.Schema({
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
});
exports.LeadModel = (0, mongoose_1.model)('Lead', leadSchem);
