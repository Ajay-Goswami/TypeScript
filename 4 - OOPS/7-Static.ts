// STATIC Example: Ticket Booking System

// static properties/methods belong to the class, not instances.
// Useful to maintain shared data like total tickets booked.
// getTotalBookings() gives total tickets without needing an object.

class Ticket {
  private static _totalTickets: number = 0; // shared across all instances
  private static _nextTicketId: number = 1001;

  public readonly ticketId: number;
  public passengerName: string;
  public source: string;
  public destination: string;

  constructor(passengerName: string, source: string, destination: string) {
    this.passengerName = passengerName;
    this.source = source;
    this.destination = destination;
    this.ticketId = Ticket._nextTicketId++; // auto-increment ID
    Ticket._totalTickets++; // count total bookings
  }

  // Show ticket details
  public showTicket(): void {
    console.log(`Ticket ID: ${this.ticketId}`);
    console.log(`Passenger: ${this.passengerName}`);
    console.log(`From: ${this.source} → To: ${this.destination}`);
    console.log("-------------------------------");
  }

  // Static method to get total bookings
  public static getTotalBookings(): number {
    return Ticket._totalTickets;
  }
}

// Booking Tickets
const t1 = new Ticket("Riya", "Delhi", "Jaipur");
const t2 = new Ticket("Kabir", "Mumbai", "Goa");
const t3 = new Ticket("Sneha", "Chennai", "Bangalore");

// Show individual tickets
t1.showTicket();
t2.showTicket();
t3.showTicket();

// Get total bookings
console.log(`Total Tickets Booked: ${Ticket.getTotalBookings()}`); // Output: 3
