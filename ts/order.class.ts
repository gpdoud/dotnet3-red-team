import {customer} from "./customer.class"

export class Order {
	id: number;
	description: string;
	total: number;
	customerid: number;
	customer: customer;

	constructor(id: number, description: string, total: number, customerid: number, customer: customer){
		this.id = id;
		this.description = description;
		this.total = total;
		this.customerid = customerid;
		this.customer = customer;

	}

	printOut(): void {
		console.log(`${this.id} ${this.description}               ${this.total}     ${ this.customer.name }`);
	}
}






