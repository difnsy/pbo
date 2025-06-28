class User {
    constructor(name) {
        this.name = name; //public
    }

    sayHello() {
        console.log('Halo, saya ${this.name}');
    }
}
 const user1 = new User('Dani');
 console.log(user1.name);