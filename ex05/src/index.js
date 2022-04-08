var myPetsArray = [
 myPets = {
        animalType: "Dog",
         name: "Pujdo"
    }, 

     myPets = {
        animalType: "Cat",
         name: "Maca"
    },

     myPets ={
        animalType: "Bird",
         name: "Tweety"
    }
];


function myPetsFunction(pets){
    return pets.name;
}


console.log(myPetsFunction(myPetsArray[1]));
module.exports = myPetsFunction;
module.exports.myPets = myPetsArray;