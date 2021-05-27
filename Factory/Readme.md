## Factory Method
- It is a creational design pattern that provides an interface for creating objects in a superclass, but allows
   superclass to alter the type of objects that will be created.
- In Factory pattern, we create object without exposing the creation logic to the client and refer to newly created object using a common interface.
   
## Structure

> The Creator class declares the factory method that returns _new product objects_.
> You can declare the factory method as abstract to force all subclasses to implement their own versions of the method.
  As an alternative, the base factory method can return some default product type.
> The factory method helps to decouple this logic from the concrete product classes.
> Note that the factory method doesn’t have to create new instances all the time. It can also return existing objects from a cache, an object pool, or another source.
   
### Code example
- [Here](./Shape)

### Applicability
  -  Use Factory method when you don't know beforehand the exact types and dependencies of the objects your code should
     work with.
        - It separates product construction code from the code that actually uses the product.
        - Therefore, it is easier to extend the product construction code independently from the rest of the code.
        - Example, to add a new product type to the application, you will need to create a new creator subclass & override the
          factory method in it.
          
  - Use Factory method when you want to provide users of your library or framework with a way to extend its internals. 
  - Use Factory method when you want to save system resources by re-using existing objects instead of rebuilding them
    each time <composition does not apply>
    

### Pros
  - You avoid tight coupling between the creator and the concrete products.
  - Single Responsibility principle. You can move the product creation code into one place in the program, making the
    code easier to support.
  - Open/Closed principle. You can introduce new types of products into the program without breaking existing client
    code.
    
### Cons
  - The code may become more complicated since you need to introduce a lot of new subclasses to implement the pattern.
    The best case scenario is when you're introducing the pattern into an existing hierarchy of creator classes.
