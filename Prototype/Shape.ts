abstract class Shape {
  private id: string;
  protected type: string;

  public getType = () => this.type;
  public getId = () => this.id;

  public setId = (id: string) => (this.id = id);
  public setType = (type: string) => (this.type = type);

  public clone(): this {
    let clone = null;

    try {
      clone = Object.create(this);
    } catch (error) {
      console.log(error);
    }
    return clone;
  }
}

class Rectangle extends Shape {
  constructor() {
    super();
    this.type = "Rectangle";
  }
}

class Square extends Shape {
  constructor() {
    super();
    this.type = "Square";
  }
}

class Circle extends Shape {
  constructor() {
    super();
    this.type = "Circle";
  }
}

class ShapeCache {
  public shapeMap = {};

  getShape(id: string): Shape {
    const cachedShape = this.shapeMap[id];
    return cachedShape.clone();
  }

  loadCache() {
    const circle = new Circle();
    circle.setId("1");
    this.shapeMap[circle.getId()] = circle;

    const square = new Square();
    square.setId("2");
    this.shapeMap[square.getId()] = square;

    const rectangle = new Rectangle();
    rectangle.setId("3");
    this.shapeMap[rectangle.getId()] = rectangle;
  }
}

const load = new ShapeCache();
load.loadCache();

// Circle
const c = load.getShape("1");
console.log(` Shape: ${c.getType()}`);

// Square
const s = load.getShape("2");
console.log(` Shape: ${s.getType()}`);

// Rectangle
const r = load.getShape("3");
console.log(` Shape: ${r.getType()}`);
