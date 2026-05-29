import React from "react";
import {
  Fuel,
  Gauge,
  MapPin,
  Users,
  Settings,
  ShieldCheck,
  Calendar,
} from "lucide-react";

const CarDetails = () => {
  const car = {
    name: "Mercedes C-Class",
    model: "C200",
    year: 2023,
    fuelType: "Petrol",
    transmission: "Automatic",
    seats: 5,
    rentPerDay: 6800,
    mileage: "16 km/l",
    location: "Kochi",
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70",
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-10">

      {/* Main Card */}
      <div className="bg-[#071018] border border-gray-800 rounded-[40px] overflow-hidden grid grid-cols-2 max-w-7xl w-full">

        {/* LEFT IMAGE */}
        <div className="relative">

          <img
            src={car.image}
            alt=""
            className="w-full h-full object-cover"
          />

          <div className="absolute top-8 left-8 bg-lime-500 text-black px-5 py-2 rounded-2xl font-bold">
            Available
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="p-12 flex flex-col justify-between">

          <div>
            <p className="text-lime-400 text-lg mb-3">
              Premium Collection
            </p>

            <h1 className="text-6xl font-bold mb-4">
              {car.name}
            </h1>

            <p className="text-gray-400 text-xl">
              Luxury performance with premium comfort
            </p>

            {/* PRICE */}
            <div className="bg-black/20 border border-gray-800 rounded-3xl p-6 mt-8">
              <h2 className="text-5xl font-bold text-lime-400">
                ₹{car.rentPerDay}

                <span className="text-2xl text-gray-400 ml-2">
                  /day
                </span>
              </h2>
            </div>

            {/* FEATURES */}
            <div className="grid grid-cols-2 gap-5 mt-8">

              <Feature
                icon={<Fuel />}
                title="Fuel"
                value={car.fuelType}
              />

              <Feature
                icon={<Settings />}
                title="Transmission"
                value={car.transmission}
              />

              <Feature
                icon={<Users />}
                title="Seats"
                value={`${car.seats} Seats`}
              />

              <Feature
                icon={<Gauge />}
                title="Mileage"
                value={car.mileage}
              />

              <Feature
                icon={<MapPin />}
                title="Location"
                value={car.location}
              />

              <Feature
                icon={<Calendar />}
                title="Year"
                value={car.year}
              />
            </div>
          </div>

          {/* BOTTOM */}
          <div className="mt-10">

            <div className="flex items-center gap-3 text-lime-400 mb-6">
              <ShieldCheck />
              <p>100% Secure Booking</p>
            </div>

            <button className="w-full bg-lime-600 hover:bg-lime-500 py-5 rounded-2xl text-xl font-semibold transition">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

/* FEATURE CARD */
const Feature = ({ icon, title, value }) => (
  <div className="bg-black/20 border border-gray-800 rounded-3xl p-5 flex items-center gap-4">

    <div className="bg-lime-500/10 text-lime-400 p-4 rounded-2xl">
      {icon}
    </div>

    <div>
      <p className="text-gray-400 text-sm">
        {title}
      </p>

      <h3 className="text-lg font-semibold">
        {value}
      </h3>
    </div>
  </div>
);

export default CarDetails;