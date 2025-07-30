"use strict";
// COMPOSITION Example
// Composition means a class is made up of other classes.
// Computer uses CPU, RAM, and SSD_Storage as components.
// It's a "has-a" relationship (Computer has a CPU, RAM, Storage).
class CPU {
    info() {
        return "Intel Core i7";
    }
}
class RAM {
    size() {
        return "16GB DDR4";
    }
}
class SSD_Storage {
    capacity() {
        return "1TB SSD";
    }
}
// Computer is composed of CPU, RAM, and Storage
class Computer {
    constructor(cpu, ram, storage) {
        this.cpu = cpu;
        this.ram = ram;
        this.storage = storage;
    }
    specs() {
        console.log("Computer Specs:");
        console.log(`CPU: ${this.cpu.info()}`);
        console.log(`RAM: ${this.ram.size()}`);
        console.log(`Storage: ${this.storage.capacity()}`);
    }
}
// Create parts and assemble the computer
const myComputer = new Computer(new CPU(), new RAM(), new SSD_Storage());
myComputer.specs();
