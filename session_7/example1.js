function User(name) {
    this.name = name;
  }

    
  User.prototype.sayHi = function() {
    console.log(this.name);
  }
  
  let user = new User("Sidd");
  user.sayHi();
  var user2 = new User("Deval");
  user2.sayHi();

  console.log(User === User.prototype.constructor);
  
  User.prototype.sayHello = function() {
    console.log("Hello "+this.name);
  }
  User.prototype.sidd = "Sidd"
  user2.sayHello();
  console.log(user2.sidd)
  console.log(user.sidd)