(import {customer} from "./customer.class"

export class Order {
	id: number;
	description: string;
	total: number;
	customerid: number;
	customer: customer;

	constructor(id: number, description: string, total: number, customerid: number, customer: string){
		this.id = id;
		this.description = description;
		this.total = total;
		this.customerid = customerid;
		this.customer= customer;

	}

	printOut(): void {
		console.log(`id=${this.id}, description=${this.description},
			total=${this.total}, customerid=${this.customerid}, customer=$[this.customer}`);
	}
}






