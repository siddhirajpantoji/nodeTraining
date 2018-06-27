function makeClass(phrase) {
    // declare a class and return it
    return class {
      sayHi() {
        console.log(phrase);
      };
    };
  }
  
  let User = makeClass("Hello");
//  console.log(User);
  new User().sayHi(); // Hello


  class Actor {
    static staticMethod() {
      console.log(this === Actor);
    }
  }
  
  Actor.staticMethod(); // true