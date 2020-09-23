/*****************************
 * CODING CHALLENGE 4
 */

/*
Let's remember the first coding challenge where Mark and John compared their BMIs. Let's now implement the same functionality with objects and methods.
1. For each of them, create an object with properties for their full name, mass, and height
2. Then, add a method to each object to calculate the BMI. Save the BMI to the object and also return it from the method.
3. In the end, log to the console who has the highest BMI, together with the full name and the respective BMI. Don't forget they might have the same BMI.
Remember: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).
GOOD LUCK 😀
*/

var mark = {
  fullName: 'mark mullzer',
  mass: 78,
  height: 1.69,
  calculateBMI: function() {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  }
};

var john = {
  fullName: 'john jones',
  mass: 110,
  height: 1.95,
  calculateBMI: function() {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  }
};

var johnBMI = john.calculateBMI();
var markBMI = mark.calculateBMI();

if (johnBMI > markBMI) {
  console.log(
    `${john.fullName} (${johnBMI}) has higher bmi than ${mark.fullName}`
  );
} else if (markBMI > johnBMI) {
  console.log(
    `${mark.fullName} (${markBMI}) has higher bmi than ${john.fullName}`
  );
} else {
  console.log('Both have the same BMI');
}
