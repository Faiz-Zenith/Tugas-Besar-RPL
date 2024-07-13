// Menghandle submit form pencarian penerbangan
flightSearchForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const source = document.getElementById('source').value;
    const destination = document.getElementById('destination').value;
    const date = document.getElementById('date').value;

    const flights = JSON.parse(localStorage.getItem('flights')) || [];
    flights.push({ source, destination, date, seatsAvailable: Math.floor(Math.random() * 200) });
    localStorage.setItem('flights', JSON.stringify(flights));

    searchFlights(source, destination, date);
});

