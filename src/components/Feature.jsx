import React from "react";
import { useNavigate } from "react-router-dom";

const Feature = () => {
    const navigate = useNavigate();
    return (
        <section id="features" className="py-16 bg-white">
            <h2 className="text-center text-3xl font-bold text-gray-800">
                Our Features
            </h2>
            <div className="flex flex-wrap justify-center mt-8">
                <div className="bg-blue-100 p-6 m-4 rounded-lg w-72 text-center shadow-md">
                    <img src="images/donation.png" alt="Ask For Fund" className="w-full h-40 object-cover rounded-lg mb-4" />
                    <h3 className="text-xl font-semibold text-gray-800">
                        🔹Ask For Fund
                    </h3>
                    <p className="text-gray-600 mt-2">
                        Verified campaigns to help patients get medical funding.
                    </p>
                </div> <div className="bg-blue-100 p-6 m-4 rounded-lg w-72 text-center shadow-md" onClick={()=> navigate("/medicalConsultation")}>
                    <img src="images\medical-consulatation.jpg" alt="Medical Consultation" className="w-full h-40 object-cover rounded-lg mb-4" />
                    <h3 className="text-xl font-semibold text-gray-800">
                        🔹Medical Consultation
                    </h3>
                    <p className="text-gray-600 mt-2">
                        AI-powered low-cost online doctor consultations.
                    </p>
                </div>
               
                <div className="bg-blue-100 p-6 m-4 rounded-lg w-72 text-center shadow-md">
                    <img src="images/medicine.jpg" alt="Generic Medicines" className="w-full h-40 object-cover rounded-lg mb-4" />
                    <h3 className="text-xl font-semibold text-gray-800">
                        🔹Generic Medicines
                    </h3>
                    <p className="text-gray-600 mt-2">
                        Helping patients find the best-priced medicines.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Feature;
