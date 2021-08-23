//=============================================
// ------------------------------------ TASK №1
//=============================================

const cache = (func) => {
    let cache = {};
    let stringFromArgs;
    return (...args) => {
        let n = args[0];
        if (stringFromArgs === JSON.stringify(args)) {
           return cache[n];
        } else  {
            stringFromArgs = JSON.stringify(args)
            cache[n] = func(...args);
            return cache[n];
        }
    }
}

//=============================================
// ------------------------------------ TASK №2
//=============================================
const forwardBackwardSteps = {
    step: 0,
    forward() {
        this.step++;
        return this;
    },
    backward() {
        this.step--;
        return this;
    },
    revealStep() {
        console.log(this.step);
        return this;
    }
};

//=============================================
// ------------------------------------ TASK №3
//=============================================
const applyAll = (func, ...args) => {
    return func.call(this, ...args);
}
const sum = (...args) => {
    let result = 0;
    for (let i = 0; i < args.length; i++) {
        result += args[i];
    }
    return result;
}

const mul = (...args) => {
    let result = 1;
    for (let i = 0; i < args.length; i++) {
        result *= args[i];
    }
    return result;
}

//=============================================

module.exports = { cache, forwardBackwardSteps, applyAll, sum, mul }
