//Example of function declaration

function getReminder(){
  console.log("Water the plants.")
}


//Example of function declaration

function greetInSpanish(){
  console.log('Buenas Tardes.')
};

function sayThanks(){
  console.log("Thank you for your purchase! We appreciate your business.")
}


//Calling a function 3 times
sayThanks()
sayThanks()
sayThanks()

//giving a function a pramter
function sayThanks(name) {
  console.log('Thank you for your purchase ' + name + '! We appreciate your business.');
}

// oassing a name to the function
sayThanks("Cole")

//Creating a default paramter

function makeShoppingList(item1 = "milk", item2 = "bread", item3 = "eggs"){
  console.log(`Remember to buy ${item1}`);
  console.log(`Remember to buy ${item2}`);
  console.log(`Remember to buy ${item3}`);
}

//calling the function
makeShoppingList()


//passing 2 paramter to the function below called rows and columns
//returning rows X columns

function monitorCount(rows, columns){
return rows * columns
}

//assigning a variable to monitor and passing 5, 4 as an argument
const numOfMonitors = monitorCount(5, 4);


//login the variable to the console
console.log(numOfMonitors)

//Helper function
function monitorCount(rows, columns) {
  return rows * columns;
}


function costOfMonitors(rows, columns){
  return monitorCount (rows, columns) * 200
}

const totalCost = costOfMonitors(5, 4);

console.log(totalCost)

//Function expression
const plantNeedsWater = function(day){
if (day === "Wednesday"){
  return true;
}else {
  return false;
}
}

console.log(plantNeedsWater("Tuesday"));


//Arrow function

// const plantNeedsWater = function(day) {
//   if (day === 'Wednesday') {
//     return true;
//   } else {
//     return false;
//   }
// };

const plantNeedssWater = day =>{

}

const plantNeedsssWater = (day) => {
  return day === 'Wednesday' ? true : false;
};

const plantNeedWater = day => day === 'Wednesday' ? true : false;
