import React, { useState, useEffect } from 'react';

function ReservationForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [vehicleRegistration, setVehicleRegistration] = useState('');
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [roomType, setRoomType] = useState('');
  const [numberOfPeople, setNumberOfPeople] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [price, setPrice] = useState(0);
  const [nationalId, setNationalId] = useState('');
  const [hasVehicle, setHasVehicle] = useState(false);
  const [carRegistration, setCarRegistration] = useState('');

  // Fonction de calcul du prix
  useEffect(() => {
    // Logique de calcul du prix en fonction du type de chambre et du nombre de personnes
    let calculatedPrice = 0;
    if (roomType === 'single') {
      calculatedPrice = 100 * numberOfPeople;
    } else if (roomType === 'double') {
      calculatedPrice = 150 * numberOfPeople;
    } else if (roomType === 'suite') {
      calculatedPrice = 200 * numberOfPeople;
    }
    setPrice(calculatedPrice);
  }, [roomType, numberOfPeople]);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Logique de gestion de la soumission du formulaire
  };

  return (
    

    <form onSubmit={handleSubmit} className="mx-auto mt-8 p-6 bg-beige_light   rounded-lg shadow-md" style={{ maxWidth: '840px' }}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
        <div>
          <label htmlFor="firstName" className="block text-xl py-2 font-semibold text-blue">Nom:</label>
          <input type="text" id="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} required className="mt-1 block w-full p-2  rounded-md border-beige_light shadow-sm focus:border-beige focus:ring focus:ring-beige focus:ring-opacity-50" />
        </div>
        <div>
          <label htmlFor="lastName" className="block text-xl py-2 font-semibold text-blue">Prenom:</label>
          <input type="text" id="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} required className="mt-1 block w-full p-2  rounded-md border-beige_light shadow-sm focus:border-beige focus:ring focus:ring-beige focus:ring-opacity-50" />
        </div>
      </div>
      <div className="mb-4">
        <label htmlFor="phoneNumber" className="block text-xl py-2 font-semibold text-blue">N°phone:</label>
        <input type="tel" id="phoneNumber" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required className="mt-1 block w-full p-2  rounded-md border-beige_light shadow-sm focus:border-beige focus:ring focus:ring-beige focus:ring-opacity-50" />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-xl py-2 font-semibold text-blue">Email:</label>
        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="mt-1 block w-full p-2  rounded-md border-beige_light shadow-sm focus:border-beige focus:ring focus:ring-beige focus:ring-opacity-50" />
      </div>
      <div className="mb-4">
        <label htmlFor="nationalId" className="block text-xl py-2 font-semibold text-blue">NID:</label>
        <input type="text" id="nationalId" value={nationalId} onChange={(e) => setNationalId(e.target.value)} required className="mt-1 block w-full p-2  rounded-md border-beige_light shadow-sm focus:border-beige focus:ring focus:ring-beige focus:ring-opacity-50" />
      </div>
      <div className="mb-4">
      <label className="block text-xl py-2 font-semibold text-blue">Avez-vous un véhicule ?</label>
        <div className="mt-1 ">
        
          <label htmlFor="hasVehicle" className="inline-flex items-center mr-4">
            <input type="checkbox" id="hasVehicle" checked={hasVehicle} onChange={(e) => setHasVehicle(e.target.checked)} className="mt-1 block w-full p-2  rounded-md border-beige_light shadow-sm focus:border-beige focus:ring focus:ring-beige focus:ring-opacity-50" />
            <span className="ml-2">Oui</span>
          </label>
        </div>
      </div>
      {hasVehicle && (
        <div className="mb-4">
          <label htmlFor="carRegistration" className="block text-xl py-2 font-semibold text-blue">Matricule de véhicule:</label>
          <input type="text" id="carRegistration" value={carRegistration} onChange={(e) => setCarRegistration(e.target.value)} required className="mt-1 block w-full p-2  rounded-md border-beige_light shadow-sm focus:border-beige focus:ring focus:ring-beige focus:ring-opacity-50" />
        </div>
      )}
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="checkInDate" className="block text-xl py-2 font-semibold text-blue"> Check-in Date:</label>
          <input type="date" id="checkInDate" value={checkInDate} onChange={(e) => setCheckInDate(e.target.value)} required className="mt-1 block w-full p-2  rounded-md border-beige_light shadow-sm focus:border-beige focus:ring focus:ring-beige focus:ring-opacity-50" />
        </div>
        <div>
          <label htmlFor="checkOutDate" className="block text-xl py-2 font-semibold text-blue">Check-out Date:</label>
          <input type="date" id="checkOutDate" value={checkOutDate} onChange={(e) => setCheckOutDate(e.target.value)} required className="mt-1 block w-full p-2  rounded-md border-beige_light shadow-sm focus:border-beige focus:ring focus:ring-beige focus:ring-opacity-50" />
          </div>
      </div>
      <div className="mb-4">
        <label htmlFor="roomType" className="block text-xl py-2 font-semibold text-blue">Type de chambre:</label>
        <select id="roomType" value={roomType} onChange={(e) => setRoomType(e.target.value)} required className="mt-1 block w-full p-2 rounded-md bg-white border-beige shadow-sm focus:border-bige focus:ring focus:ring-beige focus:ring-opacity-50">
          <option value="">select</option>
          <option value="single">Single</option>
          <option value="double">Double</option>
          <option value="suite">Suite</option>
        </select>
      </div>
      <div className="mb-4">
        <label htmlFor="numberOfPeople" className="block text-xl py-2 font-semibold text-blue">Num de personnes:</label>
        <input type="number" id="numberOfPeople" value={numberOfPeople} onChange={(e) => setNumberOfPeople(e.target.value)} required className="mt-1 block w-full p-2  rounded-md border-beige_light shadow-sm focus:border-beige focus:ring focus:ring-beige focus:ring-opacity-50" /></div>
      
        
      <div className="mb-4">
        <p className="block text-xl py-2 font-semibold text-blue" >Prix: {price}DA</p>
      </div>
      <button type="submit" className="w-24 bg-blue text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue focus:ring-opacity-50">Réserver</button>
    </form>
  );
}

export default ReservationForm;
