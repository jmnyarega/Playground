## Factory Method
 - It is a creational design pattern that provides an interface for creating objects in a superclass, but allows
   superclass to alter the type of objects that will be created.
   
### Coding problem

- Imagine that you’re creating a logistics management application. The first version of your app can only handle transportation by trucks, so the bulk of your code lives inside the Truck class.

- After a while, your app becomes pretty popular. Each day you receive dozens of requests from sea transportation companies to incorporate sea logistics into the app.

- At present, most of your code is coupled to the Truck class. Adding Ships into the app would require making changes to the entire codebase. Moreover, if later you decide to add another type of transportation to the app, you will probably need to make all of these changes again.


Trucks ( All code lives under this object)
  - move
  - load
  - name
  - ...
  - ships ❌ -> you have to make changes to the entire code.

## Solution 1
   - [solution here](./solution.ts)

```md
- The Factory Method pattern suggests that you replace direct object construction calls (using the new operator) with calls to a special factory method.
- Don’t worry: the objects are still created via the new operator, but it’s being called from within the factory method. Objects returned by a factory method are often referred to as products.
```
Logistics [ planDelivery(), createTransport() ]
  - RoadLogistics [ createTransport() ]
  - SeaLogistics [ createTransport() ] ✅

### Limitation
 - Truck and Ship classes should implement the Transport interface, which declares a method called deliver.
   Each class implements this method differently: trucks deliver cargo by land, ships deliver cargo by sea.
   The factory method in the RoadLogistics class returns truck objects, whereas the factory method in the SeaLogistics class returns ships.
   
## Solution 2
  - [solution here](./composition.ts)
  - Object [Composition](https://en.wikipedia.org/wiki/Object_composition).
