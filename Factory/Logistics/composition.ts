const RoadTransport = () => ({
  createTransport: () => console.log("Roard Transport created."),
});

const SeaTransport = () => ({
  createTransport: () => console.log("Sea Transport created."),
});

const AirTransport = () => ({
  createTransport: () => console.log("Air Transport created."),
});

const logistics = {
  SeaTransport: SeaTransport(),
  RoadTransport: RoadTransport(),
  AirTransport: AirTransport(),
};

const Factory = (logistic: string) => ({
  [logistic]: logistics[logistic],
});

const r = Factory("RoadTransport").RoadTransport;
r.createTransport();

const s = Factory("SeaTransport").SeaTransport;
s.createTransport();

const a = Factory("AirTransport").AirTransport;
a.createTransport();
