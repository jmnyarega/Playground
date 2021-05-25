## Abstract Factory
- It is a creational design pattern that lets you produce families of related object without specifying their concrete
  class.
  
## Structure
  - Abstract Products declare interfaces for a set of distinct but related products which make up a product family.
  - The Abstract Factory interface declares a set of methods for creating each of the abstract products.
  - Concrete Factories implement creation methods of the abstract factory. Each concrete factory corresponds to a specific variant of products and creates only those product variants.
  - Although concrete factories instantiate concrete products, signatures of their creation methods must return corresponding abstract products. This way the client code that uses a factory doesn’t get coupled to the specific variant of the product it gets from a factory. The Client can work with any concrete factory/product variant, as long as it communicates with their objects via abstract interfaces.
  
## Problem

> Imagine that you're creating a furniture shop simulator. Your code consists of classes that represent.
  1. A family a related products, say `Chair` + `Sofa` + `CoffeeTable`
  2. Several variants of this family. For family, products `Chair` + `Sofa` + `CoffeeTable` are available in these
     variants: `Modern`, `Victorian`, `ArtDeco`.
> You need a way to create individual furniture objects so that they match other objects of the same family.
Customers get quite mad when they receive non-matching furniture.

## Solution

- [Here](./index.ts)
- Declare interfaces for each distinct products of the product family(`Sofa`, `Chair`, `CoffeeTable`). Then you make all
  variants of products family(`Sofa`, `Chair` & `CoffeeTable`). Then you can make variants of products follow those
  interfaces.
  Example: All Chair variants can implement the `Chair` interface; all coffee table can implement the `coffeeTable`
  interface, and so on.
