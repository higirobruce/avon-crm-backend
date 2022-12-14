"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountModel = void 0;
const mongoose_1 = __importStar(require("mongoose"));
const accountSchem = new mongoose_1.Schema({
    accountOwner: {
        type: String,
        required: true
    },
    lead: {
        type: mongoose_1.default.Schema.Types.ObjectId
    },
    parentAccount: {
        type: String
    },
    phone: {
        type: String
    },
    webSite: {
        type: String
    },
    type: {
        type: String
    },
    employees: {
        type: Number
    },
    annualRevenue: {
        type: Number
    },
    industry: {
        type: String
    },
    description: {
        type: String
    },
    billingStreet: {
        type: String
    },
    billingCity: {
        type: String
    },
    billingCountry: {
        type: String
    },
    billingState: {
        type: String
    },
    billingZipPostalCode: {
        type: String
    },
    shippingStreet: {
        type: String
    },
    shippingCity: {
        type: String
    },
    shippingCountry: {
        type: String
    },
    shippingState: {
        type: String
    },
    shippingZipPostalCode: {
        type: String
    },
});
exports.AccountModel = (0, mongoose_1.model)('Account', accountSchem);
