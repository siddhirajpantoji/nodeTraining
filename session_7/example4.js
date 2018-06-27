class User {

    constructor(name) {
      // invokes the setter
      this.name = name;
    }
}
Object.defineProperties(User.prototype, {
    name: {
      get() {
        return this._name
      },
      set(value) {
        if (value.length < 4) {
            console.log("Name is too short.");
            return;
          }
          this._name = value;
      }
    }
  });


  let user = new User("John");
  console.log(user.name); // John
  
  user = new User(""); // Name too short.
  