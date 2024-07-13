// Fungsi untuk mencari penerbangan berdasarkan kriteria
function searchFlights(source, destination, date) {
    // Mengambil data penerbangan dari file JSON
    fetch('flights.json')
        .then(response => response.json())
        .then(data => {
            // Memfilter data berdasarkan kriteria pencarian
            const filteredFlights = data.filter(flight =>
                flight.source.toLowerCase().includes(source.toLowerCase()) &&
                flight.destination.toLowerCase().includes(destination.toLowerCase()) &&
                flight.date === date
            );

            // Menampilkan hasil pencarian
            displayFlightResults(filteredFlights);
        })
        .catch(error => console.error('Error fetching flights data:', error));
}

// Fungsi untuk menampilkan hasil pencarian penerbangan
function displayFlightResults(flights) {
    const flightResults = document.getElementById('flightResults');
    flightResults.innerHTML = '';

    flights.forEach(flight => {
        const flightCard = document.createElement('div');
        flightCard.classList.add('flight-card');
        flightCard.innerHTML = `
            <h3>Flight from ${flight.source} to ${flight.destination}</h3>
            <p>Date: ${flight.date}</p>
            <p>Seats available: ${flight.seatsAvailable}</p>
        `;
        flightResults.appendChild(flightCard);
    });
}

// Fungsi untuk mencari hotel berdasarkan kriteria
function searchHotels(location, checkInDate, checkOutDate, numberOfGuests) {
    // Mengambil data hotel dari file JSON
    fetch('hotels.json')
        .then(response => response.json())
        .then(data => {
            // Memfilter data berdasarkan kriteria pencarian
            const filteredHotels = data.filter(hotel =>
                hotel.location.toLowerCase().includes(location.toLowerCase())
            );

            // Menampilkan hasil pencarian
            displayHotelResults(filteredHotels);
        })
        .catch(error => console.error('Error fetching hotels data:', error));
}

// Fungsi untuk menampilkan hasil pencarian hotel
function displayHotelResults(hotels) {
    const hotelResults = document.getElementById('hotelResults');
    hotelResults.innerHTML = '';

    hotels.forEach(hotel => {
        const hotelCard = document.createElement('div');
        hotelCard.classList.add('hotel-card');
        hotelCard.innerHTML = `
            <h3>${hotel.name}</h3>
            <p>Location: ${hotel.location}</p>
            <p>Price: ${hotel.price} per night</p>
            <p>Available rooms: ${hotel.availableRooms}</p>
        `;
        hotelResults.appendChild(hotelCard);
    });
}

// Menghandle submit form pencarian penerbangan
const flightSearchForm = document.getElementById('flightSearchForm');
flightSearchForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const source = document.getElementById('source').value;
    const destination = document.getElementById('destination').value;
    const date = document.getElementById('date').value;

    searchFlights(source, destination, date);
});

// Menghandle submit form pencarian hotel
const hotelSearchForm = document.getElementById('hotelSearchForm');
hotelSearchForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const location = document.getElementById('hotelLocation').value;
    const checkInDate = document.getElementById('checkInDate').value;
    const checkOutDate = document.getElementById('checkOutDate').value;
    const numberOfGuests = document.getElementById('numberOfGuests').value;

    searchHotels(location, checkInDate, checkOutDate, numberOfGuests);
});
