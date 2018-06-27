class User {

    constructor(name, age) {
      // invokes the setter
      this.name = name;
      this.age = age;
    }
  
    get name() {
      return this._name;
    }
  
    set name(value) {
      if (value.length < 4) {
        console.log("Name is too short.");
        return;
      }
      this._name = value;
    }
  
  }
  
  let user = new User("John", 12);
  console.log(user); // John
  
  user = new User(""); // Name too short.
  var xyz = {
    "name":"Sidd"
  }
  console.log(xyz);