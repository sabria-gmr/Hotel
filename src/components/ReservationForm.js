import React, { useState } from 'react';

function ReservationForm() {
  const [location, setLocation] = useState('');
  const [roomType, setRoomType] = useState('');
  const [numberOfPeople, setNumberOfPeople] = useState('');
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Logique de gestion de la soumission du formulaire
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
      <div className="mb-4">
        <label htmlFor="location" className="block text-sm font-medium text-gray-700">Location:</label>
        <input type="text" id="location" value={location} onChange={(e) => setLocation(e.target.value)} required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" />
      </div>
      <div className="mb-4">
        <label htmlFor="roomType" className="block text-sm font-medium text-gray-700">Room Type:</label>
        <select id="roomType" value={roomType} onChange={(e) => setRoomType(e.target.value)} required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50">
          <option value="">Select room type</option>
          <option value="single">Single</option>
          <option value="double">Double</option>
          <option value="suite">Suite</option>
        </select>
      </div>
      <div className="mb-4">
        <label htmlFor="numberOfPeople" className="block text-sm font-medium text-gray-700">Number of People:</label>
        <input type="number" id="numberOfPeople" value={numberOfPeople} onChange={(e) => setNumberOfPeople(e.target.value)} required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" />
      </div>
      <div className="mb-4">
        <label htmlFor="checkInDate" className="block text-sm font-medium text-gray-700">Check-in Date:</label>
        <input type="date" id="checkInDate" value={checkInDate} onChange={(e) => setCheckInDate(e.target.value)} required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" />
      </div>
      <div className="mb-4">
        <label htmlFor="checkOutDate" className="block text-sm font-medium text-gray-700">Check-out Date:</label>
        <input type="date" id="checkOutDate" value={checkOutDate} onChange={(e) => setCheckOutDate(e.target.value)} required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" />
      </div>
      <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50">Réserver</button>
    </form>
  );
}

export default ReservationForm;
