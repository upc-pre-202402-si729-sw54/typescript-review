import {SalesOrder} from "./sales/domain/model/sales-order";

console.log('Thank you for using WebStorm 💙')

let salesOrder: SalesOrder = new SalesOrder(new Date(), 100);

console.log(salesOrder.id);
console.log(salesOrder.date);
console.log(salesOrder.total);