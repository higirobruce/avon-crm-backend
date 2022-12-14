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
exports.updateAccount = exports.getAccountById = exports.saveAccount = exports.getAllAccounts = void 0;
const accounts_1 = require("../models/accounts");
function getAllAccounts() {
    return __awaiter(this, void 0, void 0, function* () {
        //TODO
        //get all the accounts from the DB
        //Use of mongoose find
        let accounts = yield accounts_1.AccountModel.find({});
        return accounts;
    });
}
exports.getAllAccounts = getAllAccounts;
// TODO
function saveAccount(account) {
    return __awaiter(this, void 0, void 0, function* () {
        // const lead:Lead = new Lead('Lead Owner1', "Miss", 'Bruce', 'Higiro', 'CVL', 'higirobru@gmail.com', 'Sofware Eng', 'Cold', false,'New',10, "Advertisment", 2, "Chemical industries", "kdfdj");
        // const lead2:Lead = new Lead('Lead Owner2', "Mr", 'Yves', 'Nshuti', 'INYANGE', 'bhigiro@cvl.co.rw', 'Finance', 'Hot', false,'Qualified',10, "On Site", 2, "Financial services, professional services", "kdfdj");
        return yield accounts_1.AccountModel.create(account);
    });
}
exports.saveAccount = saveAccount;
//TODO
function getAccountById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const lead = yield accounts_1.AccountModel.findById(id);
        return lead ? lead : null;
    });
}
exports.getAccountById = getAccountById;
//TODO
function updateAccount(account, id) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield accounts_1.AccountModel.findByIdAndUpdate(id, {
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
    });
}
exports.updateAccount = updateAccount;
