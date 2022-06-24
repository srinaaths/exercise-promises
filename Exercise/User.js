import { genFunction } from "./Generator.js";

function User (name) {
    this.name = name;
    this.id = genFunction.next();
}

let u1 = new User('user1')