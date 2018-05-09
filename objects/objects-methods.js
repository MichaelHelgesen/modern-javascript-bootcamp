let restaurant = {
    name: "Mikke's",
    guestCapacity: 75,
    guestCount: 0,
    checkAvaliability: function (partySize) {
        let seatsLeft = this.guestCapacity - this.guestCount;
        return partySize <= seatsLeft;
    },
    seatParty: function (party) {
        this.guestCount = this.guestCount + party;     
    },
    removeParty: function (remove) {
        this.guestCount = this.guestCount - remove;
    }
}



restaurant.seatParty(72)

console.log(restaurant.checkAvaliability(4));

restaurant.removeParty(5)

console.log(restaurant.checkAvaliability(4)); 