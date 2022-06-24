function *genId() {
    let i = 1;
    while(true) {
        yield i++;
    }
}

export let genFunction = genId();