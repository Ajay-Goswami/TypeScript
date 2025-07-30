// COMPOSITION Example

// Composition means a class is made up of other classes.
// Computer uses CPU, RAM, and SSD_Storage as components.
// It's a "has-a" relationship (Computer has a CPU, RAM, Storage).

class CPU {
  info(): string {
    return "Intel Core i7";
  }
}

class RAM {
  size(): string {
    return "16GB DDR4";
  }
}

class SSD_Storage {
  capacity(): string {
    return "1TB SSD";
  }
}

// Computer is composed of CPU, RAM, and Storage
class Computer {
  cpu: CPU;
  ram: RAM;
  storage: SSD_Storage;

  constructor(cpu: CPU, ram: RAM, storage: SSD_Storage) {
    this.cpu = cpu;
    this.ram = ram;
    this.storage = storage;
  }

  specs(): void {
    console.log("Computer Specs:");
    console.log(`CPU: ${this.cpu.info()}`);
    console.log(`RAM: ${this.ram.size()}`);
    console.log(`Storage: ${this.storage.capacity()}`);
  }
}

// Create parts and assemble the computer
const myComputer = new Computer(new CPU(), new RAM(), new SSD_Storage());
myComputer.specs();
