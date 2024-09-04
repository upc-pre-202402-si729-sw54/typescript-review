"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sales_order_1 = require("./sales/domain/model/sales-order");
console.log('Thank you for using WebStorm 💙');
let salesOrder = new sales_order_1.SalesOrder(new Date(), 100);
console.log(salesOrder.id);
console.log(salesOrder.date);
console.log(salesOrder.total);
