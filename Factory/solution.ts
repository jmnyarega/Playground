/*
 * Logistics management application
 */

interface Logistics {
  planDelivery: (date: string, delivery: string) => void;
  createTransport: () => string;
}

class SeaLogistics implements Logistics {
  shipNumber: string;
  mileage: string;
  plan: Array<object> = [];

  constructor(shipNumber: string, mileage: string) {
    this.shipNumber = shipNumber;
    this.mileage = mileage;
  }

  createTransport = () => "Sea Transport";

  planDelivery = (date: string, delivery: string) => {
    const p = { date, delivery };
    this.plan.push(p);
  };
}

class RoadLogistics implements Logistics {
  regNumber: string;
  mileage: number;
  plan: Array<object> = [];

  constructor(regNumber: string, mileage: number) {
    this.regNumber = regNumber;
    this.mileage = mileage;
  }

  createTransport = () => "Road Transport";

  planDelivery = (date: string, delivery: string) => {
    const p = { date, delivery };
    this.plan.push(p);
  };
}

class AirLogistics implements Logistics {
  airNumber: string;
  mileage: string;
  plan: Array<object> = [];

  constructor(airNumber: string, mileage: string) {
    this.airNumber = airNumber;
    this.mileage = mileage;
  }

  createTransport = () => "Air Transport";

  planDelivery = (date: string, delivery: string) => {
    const p = { date, delivery };
    this.plan.push(p);
  };
}

// ROAD
const road = new RoadLogistics("123RN", 1230);
road.createTransport();
road.planDelivery("12/09/2021", "Supplies 1");
road.planDelivery("12/20/2021", "Supplies 2");
console.log({
  type: road.createTransport(),
  plan: road.plan,
  mileage: road.mileage,
  RegNumber: road.regNumber,
});

// SEA
const sea = new SeaLogistics("123SN", "123KM");
sea.createTransport();
sea.planDelivery("12/10/2021", "Machinery 1");
sea.planDelivery("12/21/2021", "Machinery 2");
console.log({
  type: sea.createTransport(),
  plan: sea.plan,
  mileage: sea.mileage,
  shipNumber: sea.shipNumber,
});

// Air
const air = new AirLogistics("123AN", "300000miles");
air.createTransport();
air.planDelivery("12/11/2021", "Perishables 1");
air.planDelivery("12/22/2021", "Perishables 2");
console.log({
  type: air.createTransport(),
  plan: air.plan,
  mileage: air.mileage,
  airNumber: air.airNumber,
});
