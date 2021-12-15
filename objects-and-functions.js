car = {}
car.color= 'black'
car.color= 'green'
car.power = 54
car.getPower = function() {
    console.log('car\'s power: ' + this._power)
}
console.log(car)
car.getPower()

const applesAndPears = (apples, pears) => {
    return apples + pears
}

console.log('applesAndPears: ', applesAndPears(5,4))

const name = 'Steve Jobs'

function helloUserName(name) {
    console.log('hello ' + name)
}

helloUserName(name)

function getVarType(variable) {
    console.log(typeof variable)
}

getVarType(name)

function isPrimeNumber(num) {
    if (num < 0 ) num = -num
    for(i = 2; i < num; i++)
        if (num % i === 0) return false
    return true
}

console.log(isPrimeNumber(0))
