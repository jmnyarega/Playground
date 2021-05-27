interface Ishape {
  draw?: () => void;
}

/*
 * Superclass
 * ==============
 *
 */

class Circle implements Ishape {
  draw = () => {
    console.log("This is a Circle");
  };
}

class Square implements Ishape {
  draw = () => {
    console.log("This is a Square");
  };
}

class Rectangle implements Ishape {
  draw = () => {
    console.log("This is a Rectangle");
  };
}

/*
 * Subclass
 * ==============
 *
 */

class ShapeFactory {
  shape: string;
  constructor(shape: string) {
    this.shape = shape;
  }

  getShape = (): Ishape => {
    if (this.shape === "Circle") {
      return new Circle();
    } else if (this.shape === "Square") {
      return new Square();
    } else if (this.shape === "Rectangle") {
      return new Rectangle();
    } else {
      throw new Error(
        `${this.shape} is not a valid shape [ Circle, Square, Rectangle ]`
      );
    }
  };
}

const c = new ShapeFactory("Circle").getShape();
c.draw();

// Square
const s = new ShapeFactory("Square").getShape();
s.draw();

// Rectangle
const r = new ShapeFactory("Rectangle").getShape();
r.draw();
