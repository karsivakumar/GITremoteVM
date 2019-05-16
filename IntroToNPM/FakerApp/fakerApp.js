var faker = require('faker'); // includes the faker npm package into the app

console.log("====================");
console.log(" WELCOME TO MY SHOP ");
console.log("====================");

for (var i=0; i<10; i++) {
console.log(faker.commerce.productName() + " - $" + faker.commerce.price());
}