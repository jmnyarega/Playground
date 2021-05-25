// ==================================
// Interfaces
// ==================================
interface Ichair {
  hasLegs: () => number;
}

interface Isofa {
  hasLegs: () => number;
}

interface ICtable {
  hasLegs: () => number;
}

interface IFurnitureFactory {
  createChair(legs: number): Ichair;
  createCoffeeTable(legs: number): ICtable;
  createSofa(legs: number): Isofa;
}

// ==================================
// Classes
// ==================================

class VictorianFactory implements IFurnitureFactory {
  createChair(legs: number) {
    return {
      hasLegs: () => legs,
    };
  }
  createCoffeeTable(legs: number) {
    return {
      hasLegs: () => legs,
    };
  }
  createSofa(legs: number) {
    return {
      hasLegs: () => legs,
    };
  }
}
class ModernFactory implements IFurnitureFactory {
  createChair(legs: number) {
    return {
      hasLegs: () => legs,
    };
  }
  createCoffeeTable(legs: number) {
    return {
      hasLegs: () => legs,
    };
  }
  createSofa(legs: number) {
    return {
      hasLegs: () => legs,
    };
  }
}
class ArtDecoFactory implements IFurnitureFactory {
  createChair(legs: number) {
    return {
      hasLegs: () => legs,
    };
  }
  createCoffeeTable(legs: number) {
    return {
      hasLegs: () => legs,
    };
  }
  createSofa(legs: number) {
    return {
      hasLegs: () => legs,
    };
  }
}

const modern_chair = new ModernFactory();

modern_chair.createSofa(45);
modern_chair.createCoffeeTable(3);
modern_chair.createChair(20);
