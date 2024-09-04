"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalesOrder = void 0;
const uuid_1 = require("uuid");
class SalesOrder {
    constructor(date, total) {
        this._id = (0, uuid_1.v4)();
        this._date = date;
        this._total = total;
    }
    get id() {
        return this._id;
    }
    get date() {
        return this._date;
    }
    get total() {
        return this._total;
    }
}
exports.SalesOrder = SalesOrder;
