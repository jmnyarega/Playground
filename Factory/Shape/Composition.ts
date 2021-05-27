const circle = () => ({
  draw: () => console.log("This is a circle"),
});

const square = () => ({
  draw: () => console.log("This is a square"),
});

const rectangle = () => ({
  draw: () => console.log("This is a rectangle"),
});

const Factory = (shape: string) => {
  const shapes = {
    circle: circle(),
    rectangle: rectangle(),
    square: square(),
  };
  return { [shape]: shapes[shape] };
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
