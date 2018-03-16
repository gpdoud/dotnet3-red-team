import {Order} from "./order.class"
import {customer} from "./customer.class"


let customerData: any[] = [
    { id: 10, name: "MAX Technical Training", creditLimit: 10000 },
    { id: 20, name: "Kroger", creditLimit: 100000 },
    { id: 30, name: "Great American Insurance", creditLimit: 200000 },
    { id: 40, name: "Western and Southern", creditLimit: 300000 },
    { id: 50, name: "LCS", creditLimit: 50000 }
  ];
  let orderData: any = [
    { id: 100, description: "Order 100", total: 1543.67, customerId: 30 },
    { id: 200, description: "Order 200", total: 7364.33, customerId: 20 },
    { id: 300, description: "Order 300", total: 4524.25, customerId: 40 },
    { id: 400, description: "Order 400", total: 4843.03, customerId: 10 },
    { id: 500, description: "Order 500", total: 6483.47, customerId: 10 },
    { id: 600, description: "Order 600", total: 8374.15, customerId: 40 },
    { id: 700, description: "Order 700", total: 4927.66, customerId: 50 },
    { id: 800, description: "Order 800", total: 6362.32, customerId: 30 },
    { id: 900, description: "Order 900", total: 4722.55, customerId: 40 }
  ];


   let Orders: Order[] = [];
  
  // for (const c of customerData) {
  //    for (const c of customerData) {
       
  //    }
  //    let customer: customer = new customer(c.id, c.name, c.creditLimit);

  // }
  
  
  for(const o of orderData){

      for(const c of customerData){
        if(c.id == o.customerId){
          var mycust: customer = new customer(c.id, c.name, c.creditLimit);
        }
      }
      let order: Order = new Order(o.id, o.description, o.total, o.customerId, mycust;
      Orders.push(order);
  }

  console.log(`-Id-Description------------- Total---- -Customer-------------------------`);
  
  for (const o of Orders) {
    
    o.printOut();
  }
