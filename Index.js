var prompt = require('prompt');

var calorieCloseEnough = [];
var carbs = [];
var fat = [];
var foodStats= [];


var compFunc = function (a, b) {
    var len = a.length > b.length ? b.length : a.length;

    for(var i=0; i<len; ++i) {
        if(a[i] - b[i] !== 0)
            return a[i] - b[i];
    }

    return (a.length - b.length);
};


  var Menu =[
  {"Name": "Bacon Clubhouse Burger", "Calories": "740", "Protein": "40", "Carbohydrates": "51", "Fat": "41", "Image":"http://www.mcdonalds.com/content/dam/McDonalds/item/s-mcdonalds-Bacon-Clubhouse-Burger.png" },
  {"Name": "Big Breakfast with Hotcakes", "Calories": "1090", "Protein": "36", "Carbohydrates": "111", "Fat": "56", "Image":"http://www.mcdonalds.com/content/dam/McDonalds/item/s-mcdonalds-Big-Breakfast-with-Hotcakes-Regular-Size-Biscuit-.png" },
  {"Name": "Bacon, Egg & Cheese McGriddles", "Calories": "460", "Protein":"19", "Carbohydrates":"48", "Fat":"21", "Image":"http://www.mcdonalds.com/content/dam/McDonalds/item/s-mcdonalds-Bacon-Egg-Cheese-McGriddles.png" },
  {"Name": "Cheeseburger", "Calories": "460", "Protein": "19", "Carbohydrates": "48", "Fat": "21", "Image":"http://www.mcdonalds.com/content/dam/McDonalds/item/s-mcdonalds-Cheeseburger.png" },
  {"Name": "Double Cheeseburger", "Calories": "440", "Protein": "25", "Carbohydrates": "35", "Fat": "22", "Image":"http://www.mcdonalds.com/content/dam/McDonalds/item/s-mcdonalds-Double-Cheeseburger.png" },
  {"Name": "Double Quarter Pounder with Cheese", "Calories": "780", "Protein": "50", "Carbohydrates": "43", "Fat": "45", "Image":"http://www.mcdonalds.com/content/dam/McDonalds/item/s-mcdonalds-Double-Quarter-Pounder-with-Cheese.png" },
  {"Name": "Filet-O-Fish", "Calories": "390", "Protein": "15", "Carbohydrates": "39", "Fat": "19", "Image":"http://www.mcdonalds.com/content/dam/McDonalds/item/s-mcdonalds-Filet-O-Fish.png" },
  {"Name": "Hotcakes and Sausage", "Calories": "520", "Protein" : "15", "Carbohydrates": "61", "Fat": "24", "Image":"http://www.mcdonalds.com/content/dam/McDonalds/item/s-mcdonalds-Hotcakes-and-Sausage-.png" },
  {"Name": "McChicken", "Calories": "370", "Protein": "14", "Carbohydrates": "40", "Fat": "17", "Image":"http://www.mcdonalds.com/content/dam/McDonalds/item/s-mcdonalds-McChicken-.png" },
  {"Name": "Premium Southwest Salad with Buttermilk Crispy Chicken", "Calories": "510", "Protein": "28", "Carbohydrates": "43", "Fat": "26", "Image":"http://www.mcdonalds.com/content/dam/McDonalds/item/s-mcdonalds-Premium-Southwest-Salad-with-Crispy-Chicken.png" },
  {"Name": "Ranch Snack Wrap (Grilled)", "Calories": "290", "Protein": "19", "Carbohydrates": "25", "Fat": "13", "Image": "http://www.mcdonalds.com/content/dam/McDonalds/item/s-mcdonalds-Ranch-Snack-Wrap-Grilled.png"},
  {"Name": "Hamburger", "Calories": "250", "Protein": "12", "Carbohydrates": "32", "Fat": "8", "Image": "http://www.mcdonalds.com/content/dam/McDonalds/item/s-mcdonalds-Hamburger.png"},
  {"Name": "Fries", "Calories": "230", "Protein": "2", "Carbohydrates": "30", "Fat": "11", "Image": "http://www.mcdonalds.com/content/dam/McDonalds/item/s-mcdonalds-Small-French-Fries.png"}

]




for (i = 0; i < 13; i++) {
  carbs.push([parseInt(Menu[i].Carbohydrates),i])
}

for (i = 0; i < 13; i++) {
  fat.push([parseInt(Menu[i].Fat),i])
}

carbs.sort(compFunc)
fat.sort(compFunc)


prompt.start();

prompt.get(['calories'], function(err, result){
  if(!err){
    for(i = 0; i < 13; i++) {
      y = Math.abs(parseInt(result.calories)-Menu[i].Calories)
      if (y < 30) {
      calorieCloseEnough.push([y,Menu[i].Calories,i])
      foodStats.push([fat[i][0], carbs[i][0],Menu[i].Calories,i ])
      calorieCloseEnough.sort(compFunc)         
      }   
    }
  console.log(foodStats)
  }
});














































