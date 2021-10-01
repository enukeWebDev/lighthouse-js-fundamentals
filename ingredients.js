const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
let items = 0;
while (items < 8) {
  console.log(ingredients[items]);
  items++;
}

// Write a for loop that prints out the contents of ingredients:
for (let i = 0; i < ingredients.length; i++) {
  console.log(ingredients[i]);
}

//Write any loop (while or for) that prints out the contents of ingredients backwards:
let lists = 8;
while (lists >= 0) {
  console.log(ingredients[lists]);
  lists--;
}

for (let j = ingredients.length; j >= 0; j--) {
  console.log(ingredients[j]);
}