## Singleton
  - Singleton is a creational design pattern that lets you ensure that a class has only one instance, while providing a global access point to this instance. 
  - Singleton solves two problems at the same time, violating the _single responsibility principle_:
    - Ensure a class has one instance. To control access to shared resource i.e database file. This behaviour is
      impossible to implement with a regular constructor since a constructor call **must** always return a new object by
      design.
    - Provide a global access point to that instance.

## How to implement
 - Add a private static field to the class for storing the singleton instance
 - Declare a public static creation method for getting the singleton instance
 - Implement “lazy initialization” inside the static method. It should create a new object on its first call and put it into the static field. The method should always return that instance on all subsequent calls.
 - Make a default constructor private, to prevent other objects from using the new operator with the Singleton class.
 - Create a static creation method that acts as a constructor. Under the hood, this method calls the private constructor
   to create an object & saves it in a static field. All the following calls to this method return the _cached_ object.
   
## Analogy
  - The government is an excellent example of the Singleton pattern.
  - A country can have only one official government.
  - Regardless of the personal identities of the individuals who form governments, the title, `The Government of X`, is a global point of access that identifies the group of people in charge.

### Structure
  - The Singleton class declares the static method `getInstance` that returns the same instance of its own class.
  - The Singleton constructor should be hidden from the client code. Calling the `getInstance` method should be the
    only way of getting the singleton object.
    
### Applicability
  - Use the singleton pattern when a class in your program should have just a single instance available to all clients;
    for example, a single database object shared by different parts of the program.
      - The Singleton pattern disables all other means of creating objects of a class except for the special creation method. This method either creates a new object or returns an existing one if it has already been created.
  - When you need stricter control over global variables.

### Pros
 - You can be sure that a class has only a single instance.
 - You can gain a global access point to that instance.
 - The singleton object is initialized only when it's requested for the first time.

### Cons
 - Violets the SRP. *The patterns solves two problems at the same time*.
 - Can mask bad design, i.e when components of the program know too much about each other.
 - Requires special treatment in multithreaded environment so that multiple threads won't create a singleton of object
   several times.
 -  It may be difficult to unit test the client code of the Singleton because many test frameworks rely on inheritance when producing mock objects. Since the constructor of the singleton class is private and overriding static methods is impossible in most languages, you will need to think of a creative way to mock the singleton. Or just don’t write the tests. Or don’t use the Singleton pattern.
