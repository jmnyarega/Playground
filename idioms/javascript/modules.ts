/*
 * Mostly used to keep independent pieces of code from each other
 *
 *  - make code easy to mantain
 *  - enscapulation
 *
 *  Ways to create modules
 *  1. iffe (closures)
 *  2. classes ( export & imports )
 *
 */

// IFFE <before es6>
(function sweetModule(document: { name: string }) {
  // declare private variables & methods
  return {
    // declare public variables & methods
    obj: document.name,
  };
})({ name: "josiah" });

// lib/person.js

// classes
export class Person {
  username: string;

  constructor(username: string) {
    this.username = username;
  }

  getName() {
    return this.username;
  }
}
