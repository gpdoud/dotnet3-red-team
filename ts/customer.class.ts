export class customer {
	Id: number;
	name: string;
	creditlimit: number;
	constructor (Id:number, name: string,
				 creditlimit:number){
		this.Id = Id;
		this.name = name;
		this.creditlimit = creditlimit;
	}
	printOut(): void {
		console.log(`Id =${this.Id},name =${this.name},creditlimit=${this.creditlimit}`);		
	}	
	}
