const circle = () => ({
  draw: () => console.log("This is a circle"),
});

const square = () => ({
  draw: () => console.log("This is a square"),
});

const rectangle = () => ({
  draw: () => console.log("This is a rectangle"),
});

const Factory = (shape: string) => ({
  [shape]: shapes[shape],
});

const shapes = {
  circle: circle(),
  rectangle: rectangle(),
  square: square(),
};

// circle
const c = Factory("circle").circle;
c.draw();

// rectangle
const r = Factory("rectangle").rectangle;
r.draw();

// square
const s = Factory("square").square;
s.draw();
