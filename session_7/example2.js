class User {

    constructor(name) {
      this.name = name;
    }
  
    sayHi() {
      console.log(this.name);
    }
  
  }
  
  let user = new User("John"); // Constructor Requires new 
  user.sayHi();
  // proof: User is the "constructor" function
//console.log(User === User.prototype.constructor); // true

// proof: there are two methods in its "prototype"
// console.log(Object.getOwnPropertyNames(User.prototype)); // constructor, sayHi