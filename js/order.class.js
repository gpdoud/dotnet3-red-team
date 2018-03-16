"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
();
var Order = /** @class */ (function () {
    function Order(id, description, total, customerid, customer) {
        this.id = id;
        this.description = description;
        this.total = total;
        this.customerid = customerid;
        this.customer = customer;
    }
    Order.prototype.printOut = function () {
        console.log("id=" + this.id + ", description=" + this.description + ",\n\t\t\ttotal=" + this.total + ", customerid=" + this.customerid + ", customer=$[this.customer}");
    };
    return Order;
}());
exports.Order = Order;
