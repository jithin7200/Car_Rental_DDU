import React, { useState } from "react";
import {
  MapPin,
  CreditCard,
  ShieldCheck,
} from "lucide-react";

const BookingPage = () => {
  const car = {
    name: "Mercedes C-Class",
    location: "Kochi",
    rentPerDay: 3800,
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70",
  };

  const [form, setForm] = useState({
    pickupDate: "",
    returnDate: "",
    pickupTime: "",
    pickupLocation: "",
    dropLocation: "",
    days: 1,
  });

  const handleChange = (e) =>
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

  const total =
    car.rentPerDay * Number(form.days);

  const inputs = [
    ["Pickup Date", "pickupDate", "date"],
    ["Return Date", "returnDate", "date"],
    ["Pickup Time", "pickupTime", "time"],
    ["Total Days", "days", "number"],
    [
      "Pickup Location",
      "pickupLocation",
      "text",
    ],
    [
      "Drop Location",
      "dropLocation",
      "text",
    ],
  ];

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-10">

      <div className="bg-[#071018] border border-gray-800 rounded-[40px] overflow-hidden grid grid-cols-2 max-w-7xl w-full">

        {/* LEFT */}
        <div className="relative">

          <img
            src={car.image}
            alt=""
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/40" />

          <div className="absolute bottom-10 left-10">

            <p className="text-lime-400 mb-3">
              Premium Collection
            </p>

            <h1 className="text-6xl font-bold mb-4">
              {car.name}
            </h1>

            <div className="flex items-center gap-3 text-lime-400 text-xl">
              <MapPin />
              {car.location}
            </div>

            <div className="mt-8 bg-black/40 border border-gray-700 rounded-3xl p-6 w-80">

              <div className="flex justify-between mb-4">
                <p className="text-gray-400">
                  Rent Per Day
                </p>

                <p className="text-lime-400 font-bold">
                  ₹{car.rentPerDay}
                </p>
              </div>

              <div className="flex justify-between">
                <p className="text-gray-400">
                  Security
                </p>

                <p>Protected</p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="p-12">

          <p className="text-lime-400 mb-3">
            Booking Section
          </p>

          <h2 className="text-5xl font-bold mb-3">
            Book Your Car
          </h2>

          <p className="text-gray-400 mb-10">
            Enter booking details
          </p>

          {/* INPUTS */}
          <div className="grid grid-cols-2 gap-5">

            {inputs.map(([label, name, type], i) => (
              <div key={i}>
                <label className="block mb-3">
                  {label}
                </label>

                <input
                  type={type}
                  name={name}
                  value={form[name]}
                  onChange={handleChange}
                  placeholder={label}
                  className="w-full bg-black/20 border border-gray-700 rounded-2xl p-4 outline-none focus:border-lime-400"
                />
              </div>
            ))}
          </div>

          {/* PRICE */}
          <div className="bg-black/20 border border-gray-700 rounded-3xl p-6 mt-10">

            <div className="flex justify-between mb-4">
              <p className="text-gray-400">
                Rent Per Day
              </p>

              <p className="text-lime-400">
                ₹{car.rentPerDay}
              </p>
            </div>

            <div className="flex justify-between mb-4">
              <p className="text-gray-400">
                Total Days
              </p>

              <p>{form.days}</p>
            </div>

            <div className="border-t border-gray-700 pt-4 flex justify-between text-3xl font-bold">

              <p>Total</p>

              <p className="text-lime-400">
                ₹{total}
              </p>
            </div>
          </div>

          {/* SECURITY */}
          <div className="flex items-center gap-3 text-lime-400 mt-6 mb-6">
            <ShieldCheck />
            <p>100% Secure Booking</p>
          </div>

          {/* BUTTON */}
          <button className="w-full bg-lime-600 hover:bg-lime-500 py-5 rounded-2xl text-xl font-semibold flex items-center justify-center gap-3">

            <CreditCard />

            Confirm Booking
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;