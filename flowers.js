const flowers = [
    {
        id: 1,
        color: "white",
        species: "lily",
        price: .99
    },
    {
        id: 2,
        color: "red",
        species: "rose",
        price: "1.99"
    }
]

const addFlower = (flowerObject) => {
    /*
        This function should add an `id` property
        to the object that was sent to the function.
        The value of the `id` property should be 1
        greater than the current maximum `id` in the
        array.

        Once the `id` property has been added to the,
        object, the object should then be put into the
        `flowers` array.
    */
    const lastFlower = flowers.length -1;
    const maxId = lastFlower.id + 1;

    console.log(lastFlower)
    console.log(maxId)
    
    const maxFlowerObject = maxId + 1;

    flowerObject.id = maxFlowerObject

    flowers.push(flowerObject)
}


const findExpensiveFlowers = () => {
    const expensiveFlowers = []  // Do not change this code


    /*
        Write a for..of loop that iterate the array
        of flowers, and if the price of a flower is
        greater than or equal to 1.00, it should be
        added to the `expensiveFlowers` array.
    */
    for (const flower of flowers) {
        if (flower.price >= 1.00) {
            expensiveFlowers.push(flower)
        }
    };



    return expensiveFlowers  // Do not change this code
}




// Do not touch this code
module.exports = {
    findExpensiveFlowers, addFlower
}

