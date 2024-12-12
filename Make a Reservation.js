
document.addEventListener("DOMContentLoaded", () => {
 
    const reservationForm = document.querySelector("form");


    reservationForm.addEventListener("submit", (event) => {
    
        event.preventDefault();


        if (validateForm()) {
           
            alert("Reservation submitted successfully! We look forward to hosting you in Hawaii!");
            
            reservationForm.reset();
        }
    });
});

/**
 * 
 * @returns {boolean} 
 */
function validateForm() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const checkIn = document.getElementById("check-in").value;
    const checkOut = document.getElementById("check-out").value;
    const guests = document.getElementById("guests").value;
    const roomType = document.getElementById("room-type").value;

    if (!name || !email || !checkIn || !checkOut || !guests || !roomType) {
        alert("Please fill in all the fields.");
        return false;
    }

   
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    const checkInDate = new Date(checkIn);
    const checkOutDate = new Date(checkOut);
    if (checkInDate >= checkOutDate) {
        alert("Check-out date must be after the check-in date.");
        return false;
    }

    if (guests <= 0 || guests > 10) {
        alert("Number of guests must be between 1 and 10.");
        return false;
    }

    return true;
}   