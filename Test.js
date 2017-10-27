var assert = require ('assert');

function createTraitor () {
}

describe ("The boardgame Ninja and how it operates", function () {
    describe ("the components", function () {
        describe ("Figures", function () {
            it ("traitor can be created", function () {
                var traitorFigure = createTraitor();
                assert (typeof traitorFigure !== "undefined","Traitor figure should not be undifined");
            });
        });  
    });  
});


// This "describe" test group walks through and tests the various types found in Javascript
describe ("learningTypes", function () {

    // This test case shows an example of using the type "number"
    // The tests within test for both value and type
    it ("number", function () {

        // Create a variable "one" with the value 5 (which is a "number" type)
        var one = 5;

        // Test that our variable "one" indeed is equal to 5
        assert (one === 5);

        // Test that our variable "one" indeed is the "number" type
        assert (typeof one === "number");
    });


    // This test case shows an example of using the type "string"
    // The tests within test for both value and type
    it ("string", function () { 

        // Create a variable "two" with the value "Hello" (which is a "string" type)        
        var two = "Hello";

        // Test that our variable "two" indeed is equal to "Hello"
        assert (two === "Hello");

        // Test that our variable "two" indeed is the "string" type
        assert (typeof two === "string");
    });
    

    // This test case shows an example of using the type "array" (see Note below)
    // The tests within test for values of particular items within the array;
    // also, there are tests to confirm that the type is indeed an array.
    //
    // Arrays are lists of values that have keys associated with them.
    // These keys are always number and always start with 0
    // Another name for "key" is "index"
    //
    // Arrays are created with square brackets []
    // Array items are separated by commas ,
    //
    // Note: Arrays in Javascript are stupid because they decided that
    // arrays are really just objects that use numbers as the keys.
    it ("array", function () {

        // Create a variable "three" that is a list of odd numbers 1 through 9 (which is an "array" type)
        var three = [1, 3, 5, 7, 9];

        // These test below are not valid because of the way arrays are stored
        // within the memory of the computer. Our variable "three" is established
        // in one particular location in memory, but our comparison array (on the 
        // right side of the ===) is stored in a different location. Thus
        // Javascript sees them as two separate values.
        // assert (three === [1, 3, 5, 7, 9]);

        // The test below is valid because of the same reason above; also it is logically
        // invalid because we are comparing an odd numbered array and an even numbered array.
        // assert ( three !== [0, 2, 4, 8, 10]);

        // Test that the 3rd index (the 4th item in the array) is equal to the "number" 7
        assert (three[3] === 7);

        // Test that the 1st index (the 2nd item in the array) is NOT equal to the "number" 5
        assert (three[1] !== 5);

        // Test the typeof our variable "three". Since Javascript sees arrays as "object" types,
        // The test below passes.
        assert (typeof three === "object");

        // Javascript creates "helper" functions for dealing with arrays. Array.isArray() will return
        // true or false depending on if the passed value is an array or not.
        assert (Array.isArray (three) === true);
    }); 
    
    // This test case shows an example of using the type "boolean"
    // The tests within test for both value and type
    //
    // Booleans can only be one of two values: true or false
    it ("boolean", function () {

        // Create a variable "four" with the value false (which is a "boolean" type)        
        var four = false;
        
        // Test that our variable "four" indeed is equal to false
        assert (four === false);

        // Test that our variable "four" indeed is NOT equal to true        
        assert (four !== true);
        
        // Test that our variable "four" indeed is the "boolean" type
        assert (typeof four === "boolean");
    });
    
    // This test case shows an example of using the type "object"
    // The tests within test for values of particular items within the object;
    // also, there are tests to confirm that the type is indeed an object.
    //
    // Objects are created with standalone curly braces {}
    // Object items are declared with a key and a value separated by a colon :
    // Subsequent items are separated by commas ,
    //
    // Objects are lists of values that have keys associated with them.
    // These keys are customizable and can be strings or whatever you would like.
    // Most often, they are strings.
    it ("object", function () {

        // Create a variable "five" that is a key-value paired list
        // of the first three months of the year and their abbreviations.
        // The abbreviations are the keys, and the values are the full month words.
        var five = {
            "Jan": "January",
            "Feb": "February",
            "Mar": "March"
        };

        // The test below are not valid because of the way objects are stored
        // within the memory of the computer. Our variable "five" is established
        // in one particular location in memory, but our comparison object (on the 
        // right side of the ===) is stored in a different location. Thus
        // Javascript sees them as two separate values.
        /* assert (five === {
            "Jan": "January",
            "Feb": "Febuary",
            "Mar": "March"
        });
        */

        // Test that the value associated with the "Jan" index is equal to the string "January"
        assert (five["Jan"] === "January"); 

        // Test that our variable "five" indeed is the "object" type        
        assert (typeof five === "object");
    });
});
