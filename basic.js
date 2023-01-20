// Problem: 1
function radianToDegree(radian) {
if (typeof radian == "number") {
let degree;
degree = radian * (180 / 3.141592);
return degree.toFixed(2);
}
else {
return "Please enter number";
}
}



// Problem: 2
function isJavaScriptFile(fileName) {
if (typeof fileName == "string") {
const lastThreeDigit = fileName.slice(-3);
if (lastThreeDigit == ".js") {
return true;
}
else {
return false;
}
}
else {
return "Please enter file name";
}
}



// Problem: 3
function oilPrice(diesel, petrol, octane) {
if (typeof diesel == "number" && typeof petrol == "number" && typeof octane == "number") {
let total;
total = diesel * 114 + petrol * 130 + octane * 135;
return total;
}
else {
return "Please enter number";
}
}



// Problem: 4
function publicBusFare(people) {
if (typeof people == "number") {
let bus, microBus, publicBus;
if (people > 50) {
microBus = people % 50;
if (microBus >= 11) {
publicBus = microBus % 11;
return publicBus * 250;
}
else if (microBus < 11) {
publicBus = microBus * 250;
return publicBus;
}
}
else if (people == 50) {
return 0;
}
}
else {
return "Please enter number";
}
}



// Problem: 5
function isBestFriend(firstPerson, secondPerson) {
if (typeof firstPerson == "object" && typeof secondPerson == "object") {
if (
firstPerson.name.toUpperCase() == secondPerson.friend.toUpperCase() &&
firstPerson.friend.toUpperCase() == secondPerson.name.toUpperCase()
) {
return true;
} else {
return false;
}
}
else {
return "Please enter an objects";
}
}