/*
 * Logistics management application
 */

interface Logistics {
  planDelivery: (date: string, delivery: string) => void;
  createTransport: () => string;
}

class SeaLogistics implements Logistics {
  plan: Array<object> = [];

  createTransport = () => "Sea Transport";

  planDelivery = (date: string, delivery: string) => {
    const p = { date, delivery };
    this.plan.push(p);
  };
}

class RoadLogistics implements Logistics {
  plan: Array<object> = [];

  createTransport = () => "Road Transport";

  planDelivery = (date: string, delivery: string) => {
    const p = { date, delivery };
    this.plan.push(p);
  };
}

class AirLogistics implements Logistics {
  plan: Array<object> = [];

  createTransport = () => "Air Transport";

  planDelivery = (date: string, delivery: string) => {
    const p = { date, delivery };
    this.plan.push(p);
  };
}

class LogisticsFactory {
  type: string;
  constructor(type: string) {
    this.type = type;
  }

  getLogistic = () => {
    if (this.type === "Sea") {
      return new SeaLogistics();
    } else if (this.type === "Road") {
      return new RoadLogistics();
    } else if (this.type === "Air") {
      return new AirLogistics();
    }
  };
}

// ROAD
const r = new LogisticsFactory("Road").getLogistic();
r.createTransport();
r.planDelivery("12/09/2021", "Supplies 1");
r.planDelivery("12/20/2021", "Supplies 2");
console.log({
  type: r.createTransport(),
  plan: r.plan,
});

// SEA
const s = new LogisticsFactory("Sea").getLogistic();
s.createTransport();
s.planDelivery("12/10/2021", "Machinery 1");
s.planDelivery("12/21/2021", "Machinery 2");
console.log({
  type: s.createTransport(),
  plan: s.plan,
});

// Air
const a = new LogisticsFactory("Air").getLogistic();
a.createTransport();
a.planDelivery("12/11/2021", "Perishables 1");
a.planDelivery("12/22/2021", "Perishables 2");
console.log({
  type: a.createTransport(),
  plan: a.plan,
});
