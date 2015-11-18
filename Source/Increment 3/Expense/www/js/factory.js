// A constructor for defining new cars
function Expense(options) {
  // some defaults
  this.name = options.name || "Expense";
  this.amount = options.amount || "";
  this.date = options.date || "11/05/2015";
}

// A constructor for defining new trucks
/*function Truck(options) {
  this.state = options.state || "used";
  this.wheelSize = options.wheelSize || "large";
  this.color = options.color || "blue";
}*/
 
// Define a skeleton vehicle factory
function ExpenseFactory() {}
// Define the prototypes and utilities for this factory
 
// Our default vehicleClass is Car
ExpenseFactory.prototype.expenseClass = Expense;
 
// Our Factory method for creating new Vehicle instances
ExpenseFactory.prototype.createExpense = function ( options ) {
 
  return new this.expenseClass( options );
};
 
 //Create an instance of our factory that makes cars
//var carFactory = new VehicleFactory();
/*var car = carFactory.createVehicle( {
            vehicleType: "car",
            color: "yellow",
            doors: 6 } );*/
 
// Test to confirm our car was created using the vehicleClass/prototype Car
// Outputs: true
//console.log(car instanceof Car);
 
// Outputs: Car object of color "yellow", doors: 6 in a "brand new" state
//console.log(car);*/