// import React, { useEffect, useState } from 'react'
// import { getdata } from '../API/CarApi'
// import Navbar from "../Components/Navbar";

// const GetCar = () => {

//     const [data, setData] = useState([])

//     useEffect(() => {

//         const fetchData = async () => {
//             const res = await getdata()
//             setData(res.data)
//         }
//         fetchData()
//     }, [])
//     return (
//         <>
//             <Navbar />
//             {data.map((i, index) => (
//                 <div key={index}>
//                     <h1>{i.name}</h1>
//                     <p>{i.brand}</p>
//                     <p>{i.model}</p>
//                     <p>{i.year}</p>
//                     <p>{i.fuelType}</p>
//                     <p>{i.transmission}</p>
//                     <p>{i.seats}</p>
//                     <p>{i.rentPerDay}</p>
//                     <p>{i.mileage}</p>
//                     <p>{i.image}</p>

//                     <p>{i.available}</p>
//                     <p>{i.location}</p>
//                     <p>{i.description}</p>

//                 </div>
//             ))
//             }
//         </>

//     )
// }

// export default GetCar



import React, { useEffect, useState } from "react";
import {
  Search,
  Fuel,
  Users,
  Settings,
  MapPin,
  ShieldCheck,
  Headphones,
  CarFront,
  ChevronDown,
  ArrowRight,
  Zap,
} from "lucide-react";

import Navbar from "../Components/Navbar";

const CarShowcase = () => {
  const [cars, setCars] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    getCars();
  }, []);

  const getCars = async () => {
    try {
      const res = await fetch("http://localhost:3000/car/getCars", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();

      console.log(data);

      // handle different backend response structures
      if (Array.isArray(data)) {
        setCars(data);
      } else if (Array.isArray(data.cars)) {
        setCars(data.cars);
      } else {
        setCars([]);
      }
    } catch (error) {
      console.log(error);
      setCars([]);
    }
  };

  // Search Filter
  const filteredCars = cars.filter(
    (car) =>
      car.brand?.toLowerCase().includes(search.toLowerCase()) ||
      car.name?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-lime-500/10 blur-[150px] rounded-full"></div>

      {/* Navbar */}
      <Navbar />

      {/* Hero */}
      <section className="relative z-10 text-center py-16 px-5">
        <h1 className="text-5xl md:text-7xl font-black leading-tight">
          Premium{" "}
          <span className="text-lime-400">
            Cars Collection
          </span>
        </h1>

        <p className="text-gray-400 text-lg md:text-xl mt-5">
          Choose your dream car for your next ride
        </p>
      </section>

      {/* Filters */}
      <div className="max-w-[1450px] mx-auto px-5 md:px-8 grid grid-cols-1 md:grid-cols-5 gap-5 mb-10">
        {/* Search */}
        <div className="md:col-span-2 bg-[#071018] border border-gray-800 rounded-2xl flex items-center px-5 py-4">
          <Search className="text-gray-400" />

          <input
            type="text"
            placeholder="Search cars..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="bg-transparent outline-none ml-4 w-full text-lg"
          />
        </div>

        {/* Filter Buttons */}
        {["Fuel Type", "Transmission", "Seats"].map((item, index) => (
          <button
            key={index}
            className="bg-[#071018] border border-gray-800 rounded-2xl px-5 py-4 flex items-center justify-between hover:border-lime-500 transition"
          >
            {item}
            <ChevronDown />
          </button>
        ))}

        {/* Sort */}
        <button className="bg-[#071018] border border-gray-800 rounded-2xl px-5 py-4 flex items-center justify-between hover:border-lime-500 transition">
          Sort by: Latest
          <ChevronDown />
        </button>
      </div>

      {/* Cars */}
      <div className="max-w-[1450px] mx-auto px-5 md:px-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 pb-20">
        {filteredCars.length > 0 ? (
          filteredCars.map((car) => (
            <div
              key={car._id}
              className="bg-[#071018] border border-gray-800 rounded-3xl overflow-hidden hover:border-lime-500/50 hover:shadow-[0_0_40px_rgba(132,204,22,0.15)] transition duration-500"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-full h-[280px] object-cover hover:scale-110 transition duration-700"
                />

                <span
                  className={`absolute top-5 right-5 px-4 py-2 rounded-xl text-sm font-semibold ${
                    car.available
                      ? "bg-lime-600"
                      : "bg-red-500"
                  }`}
                >
                  {car.available ? "Available" : "Booked"}
                </span>
              </div>

              {/* Details */}
              <div className="p-6">
                {/* Title */}
                <div className="flex items-start justify-between">
                  <div>
                    <h2 className="text-3xl font-bold">
                      {car.brand}
                    </h2>

                    <p className="text-gray-400 mt-2">
                      {car.year} • {car.fuelType} •{" "}
                      {car.transmission}
                    </p>
                  </div>

                  <div className="text-right">
                    <h3 className="text-3xl font-bold text-lime-400">
                      ₹ {car.rentPerDay}
                    </h3>

                    <p className="text-gray-400 text-sm">
                      Per Day
                    </p>
                  </div>
                </div>

                {/* Specs */}
                <div className="grid grid-cols-2 gap-5 mt-8 text-gray-300">
                  <div className="flex items-center gap-3">
                    <Fuel size={20} />
                    <span>{car.fuelType}</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <Settings size={20} />
                    <span>{car.transmission}</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <Users size={20} />
                    <span>{car.seats} Seats</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <MapPin size={20} />
                    <span>{car.location}</span>
                  </div>
                </div>

                {/* Mileage */}
                <p className="text-gray-400 mt-6 text-lg">
                  Mileage: {car.mileage}
                </p>

                {/* Button */}
                <button
                  disabled={!car.available}
                  className={`w-full mt-7 py-4 rounded-2xl flex items-center justify-center gap-3 text-lg font-semibold transition ${
                    car.available
                      ? "bg-lime-600 hover:bg-lime-500"
                      : "bg-gray-800 cursor-not-allowed"
                  }`}
                >
                  {car.available ? "Book Now" : "Booked"}

                  {car.available && <ArrowRight />}
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center py-20">
            <h2 className="text-3xl font-bold text-gray-400">
              No Cars Found
            </h2>
          </div>
        )}
      </div>

      {/* Footer Features */}
      <div className="max-w-[1450px] mx-auto px-5 md:px-8 pb-16">
        <div className="bg-[#071018] border border-gray-800 rounded-3xl grid grid-cols-1 md:grid-cols-4 gap-8 p-8">
          
          {/* Secure */}
          <div className="flex items-center gap-4">
            <div className="bg-lime-500/10 p-4 rounded-2xl">
              <ShieldCheck className="text-lime-400" />
            </div>

            <div>
              <h3 className="font-bold text-xl">
                100% Secure
              </h3>

              <p className="text-gray-400">
                Safe & Trusted
              </p>
            </div>
          </div>

          {/* Cars */}
          <div className="flex items-center gap-4">
            <div className="bg-lime-500/10 p-4 rounded-2xl">
              <CarFront className="text-lime-400" />
            </div>

            <div>
              <h3 className="font-bold text-xl">
                Premium Cars
              </h3>

              <p className="text-gray-400">
                Wide Selection
              </p>
            </div>
          </div>

          {/* Support */}
          <div className="flex items-center gap-4">
            <div className="bg-lime-500/10 p-4 rounded-2xl">
              <Headphones className="text-lime-400" />
            </div>

            <div>
              <h3 className="font-bold text-xl">
                24/7 Support
              </h3>

              <p className="text-gray-400">
                We’re Here For You
              </p>
            </div>
          </div>

          {/* Security */}
          <div className="flex items-center gap-4">
            <div className="bg-lime-500/10 p-4 rounded-2xl">
              <Zap className="text-lime-400" />
            </div>

            <div>
              <h3 className="font-bold text-xl">
                Your data is protected
              </h3>

              <p className="text-gray-400">
                Advanced security system
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarShowcase;