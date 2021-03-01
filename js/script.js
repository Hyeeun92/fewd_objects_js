var hotel = {
    // Object properties
    name: 'Clayton',
    rooms: 110,
    booked: 25,
    gym: true,
    roomTypes: ['double', 'twin', 'suite', 'king'],
    facility:['Gym - 24hours', 'Breakfast : 7am - 10am', 'Restaurant : 8am - 10pm'],
    checkAvailablity: function() {
        return this.rooms - this.booked;
    }
};

var elName = document.getElementById('hotelName');
elName.textContent = hotel.name;

var elRooms = document.getElementById('rooms');
elRooms.textContent = hotel.checkAvailablity();

var elFacility1 = document.getElementById('hotelFacility1');
elFacility1.textContent = hotel.facility[0];
var elFacility2 = document.getElementById('hotelFacility2');
elFacility2.textContent = hotel.facility[1];
var elFacility3 = document.getElementById('hotelFacility3');
elFacility3.textContent = hotel.facility[2];

