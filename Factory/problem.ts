/*
 * Logistics management application
 */

class Logistics {
  regNumber: string;
  roadMileage: number;
  plan: object;

  constructor(regNumber: string, roadMileage: number) {
    this.regNumber = regNumber;
    this.roadMileage = roadMileage;
    this.plan = {};
  }

  planDelivery = (date: string, delivery: string) => {
    this.plan[date] = delivery;
  };
}

// Truck object
const truck = new Logistics("1234RM", 500);
truck.planDelivery("12-03-2021", "Cocaine to Mombasa");
truck.planDelivery("14-03-2021", "Cocaine to Limuru");
console.log(truck);

// Ship Object
const sea = new Logistics("1234RM", null); // roadMileage does not apply
sea.planDelivery("12-03-2021", "Cocaine to Mombasa");
sea.planDelivery("14-03-2021", "Cocaine to Limuru");
console.log(sea);

/*
 * At this point, the code is coupled to the (Truck class) Most of the attributes are Truck related. Creating a sea
 * object breaks the code.
 */
