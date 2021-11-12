const shoppingList = [{
    id: 1,
    item: "Oatmilk",
    price: 2.94
},
{   
    id: 2,
    item: "Wheat Bread",
    price: 2.99
},
{  
    id: 3,
    item: "Coffee",
    price: 9.99
},
{
    id: 4,
    item: "Waffles",
    price: 2.37
},
{
    id: 5,
    item: "Turkey Bacon",
    price: 8.99
}
]
const addToShoppingList = (newItemObject) => {
    const lastIndex = shoppingList.length - 1
    const currentLastItem = shoppingList[lastIndex]
    const maxId = currentLastItem.id
    const newId = maxId + 1
    
    newItemObject.id = newId
    shoppingList.push(newItemObject)
    newItemObject.dateCreated = Date()
}

addToShoppingList([{
    item: "Eggs",
    price: 3.99
},
{ 
    item: "Pears",
    price: 5
  },
  {
    item: "Apples",
    price: 6
  },
  {
    item: "Turkey Sausage",
    price: 7
  },
  {
    item: "Ice Cream Bars",
    price: 6
  }
])
for (const expensiveItem of shoppingList) {
        if (expensiveItem.price > 8) {
        console.log(`The ${expensiveItem.item} is way too much. It costs $${expensiveItem.price}.`);
    }
}
