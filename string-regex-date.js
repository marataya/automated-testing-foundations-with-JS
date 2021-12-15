const str = 'ahb acb aeb aeeb adcb axeb'
const str1 = '2+3 223 22+23'
const matches = str.matchAll('a[a-zA-z]{1}b','g')
console.log(matches)
for (const el of matches) {
    console.log('found ' + el[0] + ' at ' + el.index)
}

console.log(str1.match(/\d\+\d{1}/))

function monthName(monthNo) {
    switch (monthNo) {
        case 1:
            return 'Jan'; break
        case 2:
            return 'Feb'; break
        case 3:
            return 'Mar'; break
        case 4:
            return 'Apr'; break
        case 5:
            return 'May'; break
        case 6:
            return 'Jun'; break
        case 7:
            return 'Jul'; break
        case 8:
            return 'Aug'; break
        case 9:
            return 'Sep'; break
        case 10:
            return 'Oct'; break
        case 11:
            return 'Nov'; break
        default:
            return 'Dec'
    }
}

let now = new Date()
console.log('Now is '+ now.getDate() + " " + monthName(now.getMonth()) + " " + now.getFullYear())