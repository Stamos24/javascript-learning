var personOne = {
    "age": 45,
    "gender": "Male",
    "height": 76,
};

var personTwo = {
    "age": 28,
    "gender": "Female",
    "height": 64,
};

var personThree = {
    "age": 32,
    "gender": "Female",
    "height": 67,
};

var personFour = {
    "age": 21,
    "gender": "Male",
    "height": 72,
};

var personFive = {
    "age": 19,
    "gender": "Male",
    "height": 75,
};

var numberOfPeople = 5;

var sumOfAges = personOne["age"] + personTwo["age"] + personThree["age"] + personFour["age"] + personFive["age"];
var averageAge = sumOfAges / numberOfPeople;
console.log ("The average age is " + averageAge + ".");

var sumOfHeight = personOne["height"] + personTwo["height"] + personThree["height"] + personFour["height"] + personFive["height"];
var averageHeightInInches = sumOfHeight / numberOfPeople;
var averageHeight = {
    "feet": Math.floor(averageHeightInInches / 12),
    "inches": Math.ceil(averageHeightInInches % 12), 
};

console.log ("The average height is " + averageHeightInInches + " inches.");

console.log ("The average height is " + averageHeight["feet"]  + " feet and " + averageHeight["inches"]  + " inches.");