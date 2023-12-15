// BookingConfirmation.js
import React from "react";
// import bookingSuccessfulLogo from './booking-successful-logo.png'; // Replace with your actual logo path
import "./BookingConfirmation.css"; // Create a separate CSS file for styling
import Navbar from "./Navbar";

const BookingConfirmation = () => {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="confirmation-container">
        {/* <img src={bookingSuccessfulLogo} alt="Booking Successful Logo" /> */}
        <h1>Booking Confirmed!</h1>
        <p>
          Your flight booking has been successfully confirmed. Thank you for
          choosing our services.
        </p>
      </div>
    </>
  );
};

export default BookingConfirmation;
