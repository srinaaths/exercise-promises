import pkg from "bluebird"
const {Promise} = pkg;
import { orderFoodByCallback, logFunction } from "./app.js";

var orderFoodFunction = Promise.promisify(orderFoodByCallback);

function sampleCallbackFunction(data, callback) {

}

function callbackFunction (err, data) {
    // setTimeout(() => {
    //     console.log('hello')
    // }, 2000);
    if(err)
        console.log(err);
    else
        console.log('hello');
}

const promiseFunc = Promise.promisify(callbackFunction);

promiseFunc().then(data => console.log(data)).catch(err => console.log(err))