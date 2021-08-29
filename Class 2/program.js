class Human {
  constructor(name, gender, startYear, endYear) {
    this.name = name;
    this.gender = gender;
    this.startYear = startYear;
    this.endYear = endYear;
  }

  //Declare private variables
  _attendance = 0;

  getRemainingCourseYear() {
    //Getter
    return this.calcYear();
  }

  calcYear() {
    //calculate remaining year using start and end year
    return this.endYear - this.startYear;
  }

  bloodGroup() {
    return console.log("A+");
  }

  updateAttendance() {
    //add a day to the human's attendance
    this._attendance++;
  }
}

const Henna = new Human("Henna", "Female", "2016", "2019");

// console.log(Henna);
console.log(Human("GUN", "Female", "2016", "2019"));
