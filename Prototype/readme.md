## Prototype
 - _Means an object that supports cloning_
 - Refers to creating duplicate object while keeping performance in mind.
 - Lets you copy existing objects without making your code dependent on their classes.
 - It delegates the cloning process to the actual objects that are being cloned.
 - When your objects have dozens of fields & hundreds of possible configurations, cloning them might serve as an
   alternative to sub-classing.
 - It is not based on inheritance.
   
### How it works
  - You create a set of objects, configured in various ways.
  - When you need an object like the one you've configured, you just clone a prototype instead of constructing a new
    object.
    
### Analogy
 - The process of mitotic cell division(biology)
 - After mitotic division, a pair of identical cells are formed.
 - The original cell acts as a prototype & takes an active role in creating the copy.

### Structure
  - The prototype interface declares the cloning methods. In most cases it is a single clone method.
  - The _concrete prototype_ class implements the cloning method(s). In addition to copying the original objects' data
    to the clone, thus method may also handle some edge cases of the cloning process process related to cloning linked
    objects, untangling recursive dependencies etc.
  - The client can produce a copy of any object that follows the prototype interface.

### Applicability
  - When your code shouldn't depend on concrete classes of object that you need to copy.
    - This happens a lot when your code works with objects passed to you from 3rd-party code via some interface. The
      concrete classes of these objects are unknown, and you couldn't depend on them even if you wanted to.
    - The Prototype pattern provides the client code with a general interface for working with all objects that support cloning. This interface makes the client code independent from the concrete classes of objects that it clones.
  - When you want to reduce the number of subclasses that only differ in their creation.
    - The Prototype pattern lets you use a set of pre-built objects, configured in various ways, as prototypes.

### Pros
  1. You can clone objects without coupling to their concrete classes.
  2. You can get rid of repeated initialization code in favour of cloning pre-built prototypes.
  3. You can produce complex objects more conveniently.
  4. You can get an alternative to inheritance when dealing with configuration presets for complex objects.
