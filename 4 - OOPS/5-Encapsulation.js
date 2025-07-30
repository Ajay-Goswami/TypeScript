"use strict";
// ENCAPSULATION Example: Student Marks System
// Encapsulation hides internal properties using private.
// We use getters/setters to control read/write access.
// Validation is added in the setter to keep data safe.
class Student {
    constructor(name, marks) {
        this._name = name;
        this._marks = 0; // default marks
        this.marks = marks; // setter handles validation
    }
    // Getter for marks (read-only access)
    get marks() {
        return this._marks;
    }
    // Setter for marks (validates the input)
    set marks(value) {
        if (value < 0 || value > 100) {
            console.log("Marks must be between 0 and 100");
        }
        else {
            this._marks = value;
        }
    }
    // Getter for name
    get name() {
        return this._name;
    }
    // Method to calculate grade based on marks
    getGrade() {
        if (this._marks >= 90)
            return "A+";
        else if (this._marks >= 75)
            return "A";
        else if (this._marks >= 60)
            return "B";
        else if (this._marks >= 40)
            return "C";
        else
            return "F (Fail)";
    }
}
// Using the Encapsulated Class
const student1 = new Student("Ajay Goswami", 88);
console.log(`Student: ${student1.name}`);
console.log(`Marks: ${student1.marks}`);
console.log(`Grade: ${student1.getGrade()}`);
// Invalid marks (should not update)
student1.marks = 150; // Shows warning
// Valid update
student1.marks = 95;
console.log(`Updated Marks: ${student1.marks}`);
console.log(`Updated Grade: ${student1.getGrade()}`);
// Direct access not allowed:
// student1._marks = 100;  // Error: '_marks' is private
