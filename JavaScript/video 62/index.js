/* Create a business name generator by combining list of adjectives and shop name and another word

Adjectives:
Crazy 
Amazing
Fire 

Shop Name:
Engine
Foods
Garments

Another Word:
Bros
Limited
Hub

*/
function getInt(max){
    return Math.floor(Math.random()*3);
}
let adjNum = getInt(3);
let shopNum = getInt(3);
let wordNum = getInt(3);
let adjective = {
    "0": "Crazy",
    "1": "Amazing",
    "2": "Fire"
}
let shopName = {
    "0": "Engine",
    "1": "Food",
    "2": "Garment"
}
let anotherWord = {
    "0": "Bros",
    "1": "Limited",
    "2": "Hub"
}
let brandName = adjective[adjNum]+shopName[shopNum]+anotherWord[wordNum];
console.log(brandName);