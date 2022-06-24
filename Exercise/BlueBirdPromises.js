import pkg from "bluebird"
const {Promise} = pkg;
import { orderFoodByCallback, logFunction } from "./app.js";

// orderFoodByCallback(true, 15, () => console.log('served'), () => console.log('denied'));

var orderFoodFunction = Promise.promisify(orderFoodByCallback);

console.log(orderFoodFunction(true, 15));