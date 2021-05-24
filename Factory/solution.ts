/*
 * Logistics management application
 */

class Logistics {
  plan: object;
  constructor() {
    this.plan = {};
  }

  planDelivery = (date: string, delivery: string) => {
    this.plan[date] = delivery;
  };

  createTransport = () => {
    console.log("Transport created.");
  };
}

class SeaLogistics extends Logistics {
  shipNumber: string;
  mileage: string;

  constructor(shipNumber: string, mileage: string) {
    super();
    this.shipNumber = shipNumber;
    this.mileage = mileage;
  }

  createTransport = () => {
    console.log("Sea Transport");
  };
}

class RoadLogistics extends Logistics {
  RegNumber: string;
  mileage: number;

  constructor(RegNumber: string, mileage: number) {
    super();
    this.RegNumber = RegNumber;
    this.mileage = mileage;
  }

  createTransport = () => {
    console.log("Road Transport");
  };
}

class AirLogistics extends Logistics {
  RegNumber: string;
  mileage: string;

  constructor(RegNumber: string, mileage: string) {
    super();
    this.RegNumber = RegNumber;
    this.mileage = mileage;
  }

  createTransport = () => {
    console.log("Air Transport");
  };
}

// ROAD
const road = new RoadLogistics("123RN", 1230);
road.createTransport();
road.planDelivery("12/09/2021", "Supplies");
console.log(road);

// SEA
const sea = new SeaLogistics("123SN", "123KM");
sea.createTransport();
sea.planDelivery("12/10/2021", "Machinery");
console.log(sea);

// Air
const air = new AirLogistics("123AN", "300000miles");
air.createTransport();
air.planDelivery("12/11/2021", "Perishables");
console.log(air);
