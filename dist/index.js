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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const PORT = process.env.CRM_PORT ? process.env.CRM_PORT : 8765;
//Set up default mongoose connection
var mongoDB = "mongodb://riskAdmin:risk%40CVL2020@localhost:27017/avon-crm?authSource=admin";
// var mongoDB =
//   "mongodb+srv://mongo-admin:2tij6e0anAgKU6tb@myfreecluster.kxvgw.mongodb.net/construck-playground?retryWrites=true&w=majority";
// "mongodb+srv://root:Beniyak1@cluster0.8ycbagi.mongodb.net/construck?retryWrites=true&w=majority";
// var mongoDB = "";
// mongoDB = process.env.CONS_MONGO_DB;
mongoose_1.default.connect(mongoDB);
//Get the default connection
var db = mongoose_1.default.connection;
//Bind connection to error event (to get notification of connection errors)
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => console.log("connected to db"));
const app = (0, express_1.default)();
app.listen(PORT, () => __awaiter(void 0, void 0, void 0, function* () {
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
    console.log(`App listening on port ${PORT}`);
}));
