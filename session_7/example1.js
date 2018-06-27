function User(name) {
    this.name = name;
  }
  
  User.prototype.sayHi = function() {
    console.log(this.name);
  }
  
  let user = new User("Sidd");
  user.sayHi();