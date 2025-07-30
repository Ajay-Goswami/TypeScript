"use strict";
// User System: Abstract Class + Getters/Setters
// Abstract Class:
//   - Cannot be instantiated directly
//   - Can contain abstract methods (without body)
//   - Child class MUST implement abstract methods
class UserBase {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    // Concrete method
    greet() {
        console.log(`Hello, ${this.name}`);
    }
}
// Subclass: AdminUser
// Implements the abstract method and adds more features
class AdminUser extends UserBase {
    constructor(name, age, password) {
        super(name, age);
        this._password = password;
    }
    // Implementing abstract method
    getRole() {
        return "Admin";
    }
    // Getter: read-only access to masked password
    get password() {
        return "*".repeat(this._password.length); // hide actual password
    }
    // Setter: update password securely
    set password(newPassword) {
        if (newPassword.length < 6) {
            console.log("Password too short! Must be 6+ characters.");
        }
        else {
            this._password = newPassword;
            console.log(" Password updated.");
        }
    }
}
// const base = new UserBase("Ajay", 25); ❌ Error: Cannot create instance of abstract class
const admin = new AdminUser("Ajay Goswami", 25, "supersecret");
// Abstract method call
console.log(`Role: ${admin.getRole()}`); // "Admin"
admin.greet(); // Hello, Ajay Goswami
// Get password (masked)
console.log(`Password: ${admin.password}`); // "***********"
// Set new password
admin.password = "abc"; // ❌ Too short
admin.password = "newstrongpass"; //  Updated
// Get again
console.log(`Updated Password: ${admin.password}`); // **************
