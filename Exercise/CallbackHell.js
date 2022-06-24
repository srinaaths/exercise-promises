const orderFood = (customer) => {
    checkReqdItems(customer, () => {
        prepareFood(customer, () => {
            serveFood();
        })
    })
}

const checkReqdItems = (customer, cb) => {
    console.log('checkd all items');
    cb();
}
const prepareFood = (customer, cb) => {
    console.log('preparing');
    cb();
}
const serveFood = () => {
    console.log('serving food');
}

orderFood("user")

const orderFoodPromise = (customer) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(), 1000);
        // resolve();
    })
}

const checkReqdItemsPromise = (customer) => {
    console.log('checkd all items');
}
const prepareFoodPromise = (customer)=> {
    console.log('preparing');
}
const serveFoodPromise = () => {
    console.log('serving food');
}
orderFoodPromise()
.then(() => checkReqdItemsPromise())
.then(() => prepareFoodPromise())
.then(() => serveFoodPromise())