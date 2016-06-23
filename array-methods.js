var planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];

/* 
 1.) Use the forEach method to add the name of each planet
 to a div element in your HTML with an id of "planets".
*/
// this targets the area on the DOM where the output will be placed:
var el = document.getElementById("planets");


planets.forEach(function(planet){
console.log ("planet", planet);
})
// this line of code outputs the results to the DOM
el.innerHTML= planets;




// 2.) Use the map method to create a new array where the first letter of each planet is capitalized

var newPlanets = planets.map(function(capitalized) {
    return capitalized.charAt(0).toUpperCase() + capitalized.substr(1);
});
console.log("newPlanets", newPlanets);
// // // 


// 3.) Use the filter method to create a new array that contains planets with the letter 'e'
var newPlanets = planets.filter(function(e) {
    return e.includes("e");
});
console.log("newPlanets", newPlanets);


// 4.) Use the reduce method to create a sentence from the words in the following array

var words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"];

var newWords = words.reduce(function(first, second) {
    return first + " " + second
});

console.log("newWords" + " =", newWords);




