"use strict";
// STATIC Example: Ticket Booking System
// static properties/methods belong to the class, not instances.
// Useful to maintain shared data like total tickets booked.
// getTotalBookings() gives total tickets without needing an object.
class Ticket {
    constructor(passengerName, source, destination) {
        this.passengerName = passengerName;
        this.source = source;
        this.destination = destination;
        this.ticketId = Ticket._nextTicketId++; // auto-increment ID
        Ticket._totalTickets++; // count total bookings
    }
    // Show ticket details
    showTicket() {
        console.log(`Ticket ID: ${this.ticketId}`);
        console.log(`Passenger: ${this.passengerName}`);
        console.log(`From: ${this.source} → To: ${this.destination}`);
        console.log("-------------------------------");
    }
    // Static method to get total bookings
    static getTotalBookings() {
        return Ticket._totalTickets;
    }
}
Ticket._totalTickets = 0; // shared across all instances
Ticket._nextTicketId = 1001;
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
