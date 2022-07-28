let arrayString = [ "banana", "mamão", "amora"];
let arrayNumber = [8, 2, 5];
let arraySortido = ["bananinha", 12, true]
let arrayNum = [42]
let arrayVazio = []

// console.log(arrayString.length)
// console.log(arrayString[3])
// console.log(arrayString)

// console.log(arraySortido.includes(5) )     
// console.log(arraySortido.includes("bananinha") ) 
// console.log(arraySortido.includes(13) )
// console.log(arraySortido.includes(true) )

// console.log(arrayNum)
// console.log(arrayVazio)

// let copiaArrayString = arrayString
// console.log(copiaArrayString)

// copiaArrayString.push("uva")
// console.log(copiaArrayString)
// console.log(arrayString)

//copiado corretamente___________

// let copiaArrayString = arrayString.slice()
// console.log(copiaArrayString)

// copiaArrayString.push("uva")
// console.log("original", arrayString)
// console.log("copia", copiaArrayString)


// copiaArrayString.splice(2,2)
// console.log(copiaArrayString)

// arrayString.sort()
// console.log(arrayString)

// arrayNumber.sort()
// console.log(arrayNumber)


let numbers = [25, 42, 18, 1]
console.log(numbers)

let numbers2 = numbers.slice()

numbers2.sort()
console.log(numbers2)

numbers2.reverse()
console.log(numbers2)

numbers2.pop()
console.log(numbers2)

numbers2.push(6)
console.log(numbers2)

numbers2.splice( 2,1 )
console.log(numbers2)

