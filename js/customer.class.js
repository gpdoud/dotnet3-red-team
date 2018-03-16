"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var customer = /** @class */ (function () {
    function customer(Id, name, creditlimit) {
        this.Id = Id;
        this.name = name;
        this.creditlimit = creditlimit;
    }
    customer.prototype.printOut = function () {
        console.log("Id =" + this.Id + ",name =" + this.name + ",creditlimit=" + this.creditlimit);
    };
    return customer;
}());
exports.customer = customer;
