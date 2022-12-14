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
exports.updateContact = exports.getContactById = exports.saveContact = exports.getAllContacts = void 0;
const contacts_1 = require("../models/contacts");
function getAllContacts() {
    return __awaiter(this, void 0, void 0, function* () {
        //TODO
        //get all the leads from the DB
        //Use of mongoose find
        let leads = yield contacts_1.ContactModel.find({});
        return leads;
    });
}
exports.getAllContacts = getAllContacts;
// TODO
function saveContact(contact) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield contacts_1.ContactModel.create(contact);
    });
}
exports.saveContact = saveContact;
//TODO
function getContactById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const lead = yield contacts_1.ContactModel.findById(id);
        return lead ? lead : null;
    });
}
exports.getContactById = getContactById;
//TODO
function updateContact(contact, id) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield contacts_1.ContactModel.findByIdAndUpdate(id, {
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
    });
}
exports.updateContact = updateContact;
