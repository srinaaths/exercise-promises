function orderFood(hasToken, time) {
    return new Promise((resolve, reject) => {
        if(hasToken && time > 9 && time <= 17)
            resolve('The food is here')
        else {
            reject('no food')
        }
    })
}

const orderFoodByCallbackPromisified = Promise.promisfy(orderFoodByCallback);

const serve = () => console.log('food is served');
const deny = () => console.log('nooo food');

function orderFoodByCallback(hasToken, time, serve, deny) {
    if(hasToken && time < 17)
        serve();
    else
        deny();
}

orderFood(true, 13)
.then(res => console.log(res))
.catch(err => console.log(err))

orderFoodByCallback(true, 19, serve, deny);