"use strict";
exports.__esModule = true;
var mountains = [
    { Name: "Kilimanjaro", Height: 19341 },
    { Name: "Everest", Height: 29029 },
    { Name: "Denali", Height: 20310 },
];
function findNameOfTallestMountain(mountains) {
    var maximum = 0;
    var result = "";
    mountains.forEach(function (m) {
        if (m.Height > maximum) {
            maximum = m.Height;
            result = m.Name;
        }
    });
    return result;
}
var tallest = findNameOfTallestMountain(mountains);
console.log(tallest);
var products = [
    { Name: "Candy", Price: 2 },
    { Name: "Soda", Price: 3 },
    { Name: "Chips", Price: 4 },
    { Name: "Coffee", Price: 5 },
];
function calcAverageProductPrice(products) {
    var total = 0;
    products.forEach(function (p) {
        total += p.Price;
    });
    var average = (total / (products.length));
    return Number(average.toFixed(2));
}
var totalAvg = calcAverageProductPrice(products);
console.log(totalAvg);
var inventory = [
    { Product: { Name: "motor", Price: 10.00 }, Quantity: 10 },
    { Product: { Name: "sensor", Price: 12.50 }, Quantity: 4 },
    { Product: { Name: "LED", Price: 1.00 }, Quantity: 20 },
];
function calcInventoryValue(inventory) {
    var totalValue = 0;
    inventory.forEach(function (i) {
        totalValue += i.Product.Price * i.Quantity;
    });
    return totalValue;
}
var valTotal = calcInventoryValue(inventory);
console.log(valTotal);
