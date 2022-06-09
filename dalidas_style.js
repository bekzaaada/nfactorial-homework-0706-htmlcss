let items = [
    "dresses",
    "shorts",
    "trousers",
    "T-shirts",
    "socks"
]
console.log(items.length)
console.log(items.pop())
console.log(items)
let accessories = ["sunglasses", "hat", "gloves"]
let allItems = items.concat(accessories)
console.log(allItems)

let wannaby = "dresses"
let buyed = wannaby  ?? "nothing"
console.log(buyed)

function countAllItem(counting){
    let cnt = 0
    for(let i=0; i<counting.length; i++){
        cnt++
    }
    return cnt
}
console.log("The number of all item in the shop "+ countAllItem(allItems))

function showItem(...accessories){
    alert(accessories[0]);
    alert(accessories[1]);
}
showItem("ring", "earrings")

function canBuy(something){
    return allItems.includes(something)
}
let canCustomerBy = canBuy("bags")
if(canCustomerBy===false){
    console.log("Sorry, we haven't this item in our shop")
}else{
    console.log("We have this item")
}

let itemsWithPrice = new Map()
let justPrice = 7000
for(let i=0; i<allItems.length; i++){
    itemsWithPrice.set(allItems[i], justPrice)
    justPrice+=1000
}

let customersMoney = 8000
let customersChoice = "shorts"
let isEnoughMoney = itemsWithPrice.get(customersChoice) ?? "Not enough money"
if(isEnoughMoney===customersMoney){
    console.log("Your money is enough")
}else{
    console.log(isEnoughMoney)
}

accessories.splice(1,1)

function sumAllPrices(itemsWithPriceMap){
    let sum = 0
    for(let price of itemsWithPriceMap.values()){
        sum+=price
    }
    return sum
}
alert(sumAllPrices(itemsWithPrice))

let lastItems = [
    {id: 1, price: 5000},
    {id: 2, price: 7000},
    {id: 3, price: 10000},
    {id: 4, price: 4000},
   
]
let saleItems = lastItems.filter(item => item.price<10000);
alert("Sale items number" +saleItems.length)

