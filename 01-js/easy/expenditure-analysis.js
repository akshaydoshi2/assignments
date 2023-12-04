/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  let categoryTotals = {};

  for(let i = 0; i < transactions.length; i++){
    const cat = transactions[i]['category'];
    const price = transactions[i]['price'];

    if(!categoryTotals[cat]){
      categoryTotals[cat] = price;
    }else{
      categoryTotals[cat] += price;
    }
  }

  const res = Object.keys(categoryTotals).map(cat => ({
    "category":cat,
    "totalSpent": categoryTotals[cat]
  }));
  
  return res;
}

module.exports = calculateTotalSpentByCategory;
