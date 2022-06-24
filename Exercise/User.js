import { genFunction } from "./Generator.js";

function User (name) {
    this.name = name;
    this.id = genFunction.next();
}

let u1 = new User('user1')
let u2 = new User('user1')
let u3 = new User('user1')

console.log(u1, u2, u3);