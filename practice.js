//First Function To Calculate Age in Dog Years
const calculateAgeInDogYears = (ageOfPerson) => {
    const ageInDogYears = ageOfPerson/7
    
    return ageInDogYears
}

const dogAge = calculateAgeInDogYears(56)
console.log(dogAge)

//Best In Show Function:
//"takes a string" = parameter called dogBreed
//"argument" of "schnauzer" = value of dogBreed will be "dogbreed"
// "log the string" = do something outside the function
// "if and only if" = logical operator added (optional)

const bestInShow = (dogBreed) => {
    return "my favorite dog breed is" ${dogBreed}
}

favoriteBreed = bestInShow("schnauzer")
console.log(favoriteBreed)

//Addition Practice:

const add = (num1,num2) => {
    const sum = num1 + num2
    return sum
}

sumOf1and2 = add(1,2)
console.log(sumOf1and2)

//Self-driving Cars:
//optional loop: invoke function 1 time

const go = (direction,speed) => {
    if (speed >= 75){
        return `SLOW DOWN!!`
    } else {
    return `the car is moving ${direction} at ${speed} mph`
    }
}

go("forwards",45)
go("backwards",8)
go("circles", 12)

//evens or odds:
const evenOrOdd = (number) => {
    if(number%2 === 0){
        return "even"
    }
    return "odd"
}
const checkNum = evenOrOdd(2)
console.log(checkNum)

//double functions:
const words = [
    "The", "killing", "complex", "houses",
    "married", "kittens", "and", "single",
    "soldiers", "and", "their", "kleptomaniacal",
    "families"
]
//function that filters out words that start with 'k'

const filteredWords = (array) => {
    for (let i =0; i < array.length; i++){
        for (word of array){
            if (word.startswith('k')){
                array.splice(i,1);
            }
        }
    }
    return array
}

const wordsWithNoK = filteredWords(words)

const makeSentence = (array) => {
    newSentence = array.join(' ')

    return newSentence
}

console.log(makeSentence(wordsWithNoK))

//piano:
const catchAFish = () => {
    let chance = math.random()*3)
    if (chance <= 1){
        return "Sven hooked a tuna!  :)"} 
    else{
        return "Sven came up empty-handed.  :("
    }
}

console.log(catchAFish())
//fast food
const orderHappyMeal = (sandwich,side,drink,dessert) => {
    newOrder = []
    newOrder.push({
        "sandwich": sandwich,
        "side":side,
        "drink":drink,
        "dessert":dessert})
    
    return newOrder
}

console.log(orderHappyMeal("Big Mac","Fries","Coke","Apple Pie"))

//chores
