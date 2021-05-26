## Abstract Factory
- It is a creational design pattern that lets you produce families of related object without specifying their concrete
  class.
- Abstract Factory patterns work around a super-factory which creates other factories.
- This factory is also called as factory of factories.
- In Abstract Factory pattern an interface is responsible for creating a factory of related objects without explicitly
  specifying their classes.
  
## Structure
  - Abstract Products declare interfaces for a set of distinct but related products which make up a product family.
  - The Abstract Factory interface declares a set of methods for creating each of the abstract products.
  - Concrete Factories implement creation methods of the abstract factory. Each concrete factory corresponds to a specific variant of products and creates only those product variants.
  - Although concrete factories instantiate concrete products, signatures of their creation methods must return corresponding abstract products. This way the client code that uses a factory doesn’t get coupled to the specific variant of the product it gets from a factory. The Client can work with any concrete factory/product variant, as long as it communicates with their objects via abstract interfaces.
  
### code example
 - [Here](./Shape)
 
### Applicability
  - Use the Abstract Factory when your code needs to work with various families of related products, but don't want it
    to depend on the concrete classes of those products - they migth be unknown beforehand or you simply want to allow
    for the future extensibility.
      - The Abstract Factory provides you with an interface for creating objects from each class of the product family
      - As long as your code creates objects via this interface, you don’t have to worry about creating the wrong variant of a product which doesn’t match the products already created by your app.

### How to implement
  - Map out a matrix of distinct product types versus variants of these products.
  - Declare abstract product interfaces for all product types. Then make all concrete product classes implement these
    interfaces.
  - Declare the abstract factory interface with a set of creation methods for all abstract products.
  - Create factory initialization code somewhere in the app. It should instantiate one of the concrete factory classes, depending on the application configuration or the current environment. Pass this factory object to all classes that construct products.

  - Scan through the code and find all direct calls to product constructors. Replace them with calls to the appropriate creation method on the factory object.


### Pros
  - You can be sure that the products you're getting from a factory are compatible with each other.
  - You avoid tight coupling between concrete products & client code.
  - Single Responsibility principle. You can extract the product code into one place, making the easier to support.
  - Open/Closed principle. You can introduce new variants of products without breaking existing client code.

### Cons
  - The code may become more complicated than it should be, since a lot of new interfaces and classes are introduced a
    long with the pattern.
