import React, { useEffect,useState } from 'react';
import { initializeApp } from "firebase/app";
import { getFirestore,addDoc, collection} from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCwNJksuNN3-W79mPKdrQZ1OfVRQA4vm6o",
  authDomain: "hackathon-8d1d8.firebaseapp.com",
  databaseURL: "https://hackathon-8d1d8-default-rtdb.firebaseio.com",
  projectId: "hackathon-8d1d8",
  storageBucket: "hackathon-8d1d8.appspot.com",
  messagingSenderId: "12011905017",
  appId: "1:12011905017:web:929f273e446f333d8b2728",
  measurementId: "G-Q4RV1881K4"
};
const fireBaseApp = initializeApp(firebaseConfig);
const db =getFirestore(fireBaseApp) ;
const colRef = collection(db,'Reservation')
addReservation.addEventListener('submit',(e)=>{
  e.preventDefault()
  addDoc(colRef,{
    Nom :lastName.value,
    prenom : firstName.value,
    email : email.value ,
    telephone : phoneNumber.value,
    date_reservation : selectedDate
  })
  })

function ReservationForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [roomType, setRoomType] = useState('');
  const [numberOfPeople, setNumberOfPeople] = useState('');
  const [price, setPrice] = useState(0);
  const [nationalId, setNationalId] = useState('');
  const [hasVehicle, setHasVehicle] = useState(false);
  const [carRegistration, setCarRegistration] = useState('');
  const [showPopup, setShowPopup] = useState(false); // State for controlling popup visibility
  
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
  
  return (
    
<div>
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
    {/* Popup */}
    {showPopup && (
      <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex justify-center items-center">
        <div className="bg-white rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Réservation réussie !</h2>
          <p>Votre réservation a été soumise avec succès.</p>
          <button onClick={() => setShowPopup(false)} className="mt-4 bg-blue text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue focus:ring-opacity-50">Fermer</button>
        </div>
      </div>
     
    )}
     </div>
  );}


export default ReservationForm;