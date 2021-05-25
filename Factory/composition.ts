/*
 * RoadTransport = regNumber + mileage + planDelivery + createTransport
 * SeaLogistics = seaNumber + mileage + planDelivery + createTransport
 * AirLogistics = airNumber + mileage + planDelivery + createTransport
 */

const RoadTransport = (mileage: string, regNumber: string, plan: object) => {
  return {
    regNumber,
    mileage,
    planDelivery: (date: string, delivery: string) =>
      (plan[date] = { delivery, type: "road" }),
    createTransport: () => console.log("Roard Transport created."),
  };
};

const SeaTransport = (mileage: string, seaNumber: string, plan: object) => {
  return {
    seaNumber,
    mileage,
    planDelivery: (date: string, delivery: string) =>
      (plan[date] = { delivery, type: "sea" }),
    createTransport: () => console.log("Sea Transport created."),
  };
};

const AirTransport = (mileage: string, airNumber: string, plan: object) => {
  return {
    airNumber,
    mileage,
    planDelivery: (date: string, delivery: string) =>
      (plan[date] = { delivery, type: "air" }),
    createTransport: () => console.log("Air Transport created."),
  };
};

let plan = {};

const r = RoadTransport("1200km", "123RN", plan);
r.createTransport();
r.planDelivery("12/09/2021", "Supplier");

const s = SeaTransport("1200miles", "123RN", plan);
s.createTransport();
s.planDelivery("12/11/2021", "perishables");

const a = AirTransport("120000000meters", "123RN", plan);
a.createTransport();
a.planDelivery("12/12/2021", "perishables");
console.log(plan);
