interface Shape {
  draw: () => void;
}

class Rectangle implements Shape {
  draw = () => {
    console.log("Creats a rectangle");
  };
}

class Square implements Shape {
  draw = () => {
    console.log("Creats a square");
  };
}

class Circle implements Shape {
  draw = () => {
    console.log("Creats a circle");
  };
}

class RoundedRectangle implements Shape {
  draw = () => {
    console.log("Creats a rounded rectangle");
  };
}

class RoundedSquare implements Shape {
  draw = () => {
    console.log("Creats a rounded square");
  };
}

class RoundedCircle implements Shape {
  draw = () => {
    console.log("Creats a rounded circle");
  };
}

abstract class AbstractFactory {
  abstract getShape(): Shape;
}

class ShapeFactory extends AbstractFactory {
  shape: string;
  constructor(shape: string) {
    super();
    this.shape = shape;
  }

  getShape = () => {
    if (this.shape === "Circle") {
      return new Circle();
    } else if (this.shape === "Rectangle") {
      return new Rectangle();
    } else if (this.shape === "Square") {
      return new Square();
    } else {
      throw new Error(`${this.shape} is not a valid shape`);
    }
  };
}

class RoundedShapeFactory extends AbstractFactory {
  shape: string;
  constructor(shape: string) {
    super();
    this.shape = shape;
  }

  getShape = () => {
    if (this.shape === "Circle") {
      return new RoundedCircle();
    } else if (this.shape === "Rectangle") {
      return new RoundedRectangle();
    } else if (this.shape === "Square") {
      return new RoundedSquare();
    } else {
      throw new Error(`${this.shape} is not a valid shape`);
    }
  };
}

/*
 *
 * NORMAl
 *
 */

// circle
const c = new ShapeFactory("Circle").getShape();
c.draw();

// rectangle
const r = new ShapeFactory("Rectangle").getShape();
r.draw();

// square
const s = new ShapeFactory("Square").getShape();
s.draw();

/*
 *
 * ROUNDED
 *
 */

// rounded circle
const rc = new RoundedShapeFactory("Circle").getShape();
rc.draw();

// rounded rectangle
const rr = new RoundedShapeFactory("Rectangle").getShape();
rr.draw();

// rounded square
const rs = new RoundedShapeFactory("Square").getShape();
rs.draw();
