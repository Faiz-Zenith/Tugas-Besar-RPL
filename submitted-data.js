document.addEventListener('DOMContentLoaded', function () {
    displayData();

    document.getElementById('flightList').addEventListener('click', function (event) {
        if (event.target.classList.contains('delete-flight')) {
            deleteFlight(event.target.dataset.id);
        }
    });

    document.getElementById('hotelList').addEventListener('click', function (event) {
        if (event.target.classList.contains('delete-hotel')) {
            deleteHotel(event.target.dataset.id);
        }
    });
});

function displayData() {
    const flights = JSON.parse(localStorage.getItem('flights')) || [];
    const hotels = JSON.parse(localStorage.getItem('hotels')) || [];

    const flightList = document.getElementById('flightList');
    flightList.innerHTML = '';
    flights.forEach((flight, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            Flight from ${flight.source} to ${flight.destination} on ${flight.date}. Seats available: ${flight.seatsAvailable}
            <button class="delete-flight" data-id="${index}">Delete</button>
        `;
        flightList.appendChild(li);
    });

    const hotelList = document.getElementById('hotelList');
    hotelList.innerHTML = '';
    hotels.forEach((hotel, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            Hotel in ${hotel.location} from ${hotel.checkInDate} to ${hotel.checkOutDate} for ${hotel.numberOfGuests} guests.
            <button class="delete-hotel" data-id="${index}">Delete</button>
        `;
        hotelList.appendChild(li);
    });
}

function deleteFlight(index) {
    const flights = JSON.parse(localStorage.getItem('flights')) || [];
    flights.splice(index, 1);
    localStorage.setItem('flights', JSON.stringify(flights));
    displayData();
}

function deleteHotel(index) {
    const hotels = JSON.parse(localStorage.getItem('hotels')) || [];
    hotels.splice(index, 1);
    localStorage.setItem('hotels', JSON.stringify(hotels));
    displayData();
}
