export{}

//tallest mountain lab
interface Mountain {
    Name: string;
    Height: number;
}

let mountains: Mountain[] = [
    {Name:"Kilimanjaro", Height: 19341},
    {Name:"Everest", Height: 29029},
    {Name:"Denali", Height: 20310},
];

function findNameOfTallestMountain (mountains: Mountain[]):string{
    let maximum = 0;
    let result = "";
    mountains.forEach((m:Mountain) => {
        if (m.Height > maximum){
            maximum = m.Height;
            result = m.Name
        }

    });
    return result;
}
let tallest:string = findNameOfTallestMountain(mountains);
console.log(tallest);


//products lab

interface Product {
    Name:string;
    Price:number;
}

let products: Product[] = [
    {Name: "Candy", Price: 2},
    {Name: "Soda", Price: 3},
    {Name: "Chips", Price: 4},
    {Name: "Coffee", Price: 5},
];

function calcAverageProductPrice (products: Product[]):number{
    let total = 0;
    products.forEach((p: Product) => {
        total += p.Price;
    })
    let average:number = (total / (products.length))
    return Number(average.toFixed(2));
}

let totalAvg:number = calcAverageProductPrice(products);
console.log(totalAvg);

//inventory lab
interface InventoryItem {
    Product: Product;
    Quantity: number;
}

let inventory: InventoryItem[] = [
    {Product:{Name: "motor", Price: 10.00}, Quantity: 10},
    {Product:{Name: "sensor", Price: 12.50}, Quantity: 4},
    {Product:{Name: "LED", Price: 1.00}, Quantity: 20},
]

function calcInventoryValue (inventory:InventoryItem[]):number{
    let totalValue: number = 0;
    inventory.forEach((i: InventoryItem) =>{
        totalValue += i.Product.Price * i.Quantity;
    })
    return totalValue;
}

let valTotal:number = calcInventoryValue(inventory);
console.log(valTotal);