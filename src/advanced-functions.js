//=============================================
// ------------------------------------ TASK №1
//=============================================
const cache = (func) => {
    const cache = {};
    return function () {
        const stamp = JSON.stringify(arguments);
        if (!(stamp in cache)) {
            cache[stamp] = func.apply(this, arguments);
        }
        return cache[stamp];
  }
}

//=============================================
// ------------------------------------ TASK №2
//=============================================
const forwardBackwardSteps = {
  step: 0,
  forward() {
    ++this.step
    return this
  },
  backward() {
    --this.step
    return this
  },
  revealStep() {
    console.log(this.step)
  }
};

//=============================================
// ------------------------------------ TASK №3
//=============================================
function applyAll(func , ...arg){
    return func.call(arg)
}

function sum () {
    let result = 0;
    for (let i = 0 ; i < +this.length ; i++){
        result += +this[i]
    }
    return result
}

function mul(){
    let result = 1;
    for (let i = 0 ; i < this.length ; i++){
        result *= this[i]
    }
    return result
}

//=============================================

module.exports = {cache, forwardBackwardSteps, applyAll, sum, mul}
