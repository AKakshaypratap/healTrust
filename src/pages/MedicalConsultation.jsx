import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const MedicalConsultation = () => {
  // State to track whether to show doctors list
  const [showDoctors, setShowDoctors] = useState(false);

  // Sample list of doctors with images
  const doctors = [
    { id: 1, name: "Dr. Ayesha Sharma", specialty: "Cardiologist", experience: "10 Years", image: "/images/doctors/doctor-2.jpeg" },
    { id: 2, name: "Dr. Rajesh Mehta", specialty: "Dermatologist", experience: "8 Years", image: "/images/doctors/doctor-1.jpeg" },
    { id: 3, name: "Dr. Pooja Verma", specialty: "Pediatrician", experience: "12 Years", image: "/images/doctors/doctor-4.webp" },
    { id: 4, name: "Dr. Sameer Khan", specialty: "Neurologist", experience: "15 Years", image: "/images/doctors/doctor-3.webp" },
    { id: 5, name: "Dr. Neha Agarwal", specialty: "Gynecologist", experience: "9 Years", image: "/images/doctors/doctor-5.jpeg" },
    { id: 6, name: "Dr. Vikram Das", specialty: "Orthopedic Surgeon", experience: "11 Years", image: "/images/doctors/doctor-6.jpeg" },
  ];

  return (
    <div className="bg-blue-50 min-h-screen flex flex-col">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-center p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Medical Consultation</h2>

        <div className="flex flex-wrap justify-center gap-8">
          {/* AI Consultation Card */}
          <div className="bg-white p-6 rounded-lg shadow-md w-80 text-center hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-gray-800">🤖 Via AI Consultation</h3>
            <p className="text-gray-600 mt-2">Get an instant diagnosis and treatment plan using AI.</p>
            <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
              Consult Now
            </button>
          </div>

          {/* Doctor Appointment Card */}
          <div className="bg-white p-6 rounded-lg shadow-md w-80 text-center hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-gray-800">🩺 Book Doctor Appointment</h3>
            <p className="text-gray-600 mt-2">Schedule a consultation with a verified doctor.</p>
            <button
              className="mt-4 bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition"
              onClick={() => setShowDoctors(!showDoctors)}
            >
              {showDoctors ? "Hide Doctors" : "Book Now"}
            </button>
          </div>
        </div>

        {/* Doctors List (Shown when button is clicked) */}
        {showDoctors && (
          <div className="mt-8 w-full max-w-4xl bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-gray-800 text-center">Available Doctors</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
              {doctors.map((doctor) => (
                <div key={doctor.id} className="bg-gray-100 p-4 rounded-lg shadow flex flex-col items-center">
                  <img src={doctor.image} alt={doctor.name} className="h-32 w-32 rounded-full object-cover mb-4" />
                  <p className="text-lg font-semibold text-gray-800">{doctor.name}</p>
                  <p className="text-gray-600">{doctor.specialty}</p>
                  <p className="text-gray-500">{doctor.experience} Experience</p>
                  <button className="mt-3 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
                    Book Appointment
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default MedicalConsultation;
