// Menghandle submit form pencarian hotel
document.getElementById('hotelBookingForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const location = document.getElementById('hotelLocation').value;
    const checkInDate = document.getElementById('checkInDate').value;
    const checkOutDate = document.getElementById('checkOutDate').value;
    const numberOfGuests = document.getElementById('numberOfGuests').value;

    const hotels = JSON.parse(localStorage.getItem('hotels')) || [];
    hotels.push({ location, checkInDate, checkOutDate, numberOfGuests });
    localStorage.setItem('hotels', JSON.stringify(hotels));
});