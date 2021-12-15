const movies = ['Braveheart', 'Saving Private Ryan', 'Mr Bean']

console.log("Movies:")
for (let i = 0; i < movies.length; i++) {
    console.log(movies[i])
}

const carManufacturers = ['Ford', 'Toyota', 'Volkswagen']
console.log(carManufacturers.toString())

const friends = ['Vova', 'Raha', 'Slavik']

for (let i = 0; i < friends.length; i++) {
    friends[i] = 'hello ' + friends[i];

}

console.log(friends.toString())

Math.random
const numArr = [7, 8, 6, 11]

console.log(numArr)

console.log(Boolean(numArr))

console.log([1,6,7,8,3,4,5,6].sort((a,b) => b-a))
console.log([1,6,7,8,3,4,5,6].filter(x => x>3))

function findElInArr(x, arr) {
    return (arr.indexOf(x) === -1 ? "Not found" : arr.indexOf(x))
}
const arr = [0,4,5,1]
console.log(findElInArr(-4, arr))

let a = 15
while(a>=10) {
    console.log(a--)
}

let n = 20

function isPrimeNumber(num) {
    if (num < 0 ) num = -num
    for(i = 2; i < num; i++)
        if (num % i === 0) return false
    return true
}

console.log('Prime numbers:')
for (let i = 1; i < n; i++) {
    if(isPrimeNumber(i)) console.log(i)
    
}

console.log('Odd numbers:')
for (let i = 1; i < n; i++) {
    if(i % 2 === 0) console.log(i)
    
}