import React, { useState } from "react";
import {
  CarFront,
  LayoutDashboard,
  Users,
  CalendarCheck,
  FileText,
  Settings,
  LogOut,
  PlusCircle,
  List,
  Upload,
} from "lucide-react";

import AdminSidebar from "../Components/Sidebar";

const AddCar = () => {
  const [form, setForm] = useState({});

  const handleChange = (e) =>
    setForm({
      ...form,
      [e.target.name]:
        e.target.files?.[0] || e.target.value,
    });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  const menu = [
    ["Dashboard", <LayoutDashboard />],
    ["Cars", <CarFront />],
    ["Users", <Users />],
    ["Bookings", <CalendarCheck />],
    ["Reports", <FileText />],
    ["Settings", <Settings />],
  ];

  const fields = [
    "name",
    "brand",
    "model",
    "year",
    "seats",
    "rentPerDay",
    "mileage",
    "location",
  ];

  return (
    <div className="min-h-screen bg-black text-white flex">

      {/* Sidebar */}
   
 <AdminSidebar/>


      {/* Main */}
      <div className="flex-1 p-8">

        <h1 className="text-5xl font-bold mb-2">
          Add New Car
        </h1>

        <p className="text-gray-400 mb-10">
          Fill car details
        </p>

        <form
          onSubmit={handleSubmit}
          className="bg-[#071018] border border-gray-800 p-8 rounded-3xl"
        >

          {/* Inputs */}
          <div className="grid grid-cols-4 gap-5">

            {fields.map((item, i) => (
              <input
                key={i}
                type="text"
                name={item}
                placeholder={item}
                onChange={handleChange}
                className="bg-black/20 border border-gray-700 p-4 rounded-2xl outline-none focus:border-lime-400"
              />
            ))}

            {/* Fuel */}
            <select
              name="fuelType"
              onChange={handleChange}
              className="bg-black/20 border border-gray-700 p-4 rounded-2xl"
            >
              <option>Fuel Type</option>
              <option>Petrol</option>
              <option>Diesel</option>
              <option>Electric</option>
            </select>

            {/* Transmission */}
            <select
              name="transmission"
              onChange={handleChange}
              className="bg-black/20 border border-gray-700 p-4 rounded-2xl"
            >
              <option>Transmission</option>
              <option>Manual</option>
              <option>Automatic</option>
            </select>

            {/* Availability */}
            <select
              name="available"
              onChange={handleChange}
              className="bg-black/20 border border-gray-700 p-4 rounded-2xl"
            >
              <option>Availability</option>
              <option>true</option>
              <option>false</option>
            </select>
          </div>

          {/* Upload + Description */}
          <div className="grid grid-cols-2 gap-5 mt-8">

            {/* Upload */}
            <label className="border border-dashed border-gray-700 rounded-3xl h-60 flex flex-col items-center justify-center cursor-pointer hover:border-lime-400">

              <Upload
                size={45}
                className="text-lime-400 mb-4"
              />

              <p>Upload Car Image</p>

              <input
                type="file"
                name="image"
                hidden
                onChange={handleChange}
              />
            </label>

            {/* Description */}
            <textarea
              rows="10"
              name="description"
              placeholder="Description..."
              onChange={handleChange}
              className="bg-black/20 border border-gray-700 rounded-3xl p-5 outline-none focus:border-lime-400"
            />
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-5 mt-8">

            <button
              type="button"
              className="border border-gray-700 px-8 py-4 rounded-2xl"
            >
              Cancel
            </button>

            <button className="bg-lime-600 hover:bg-lime-500 px-10 py-4 rounded-2xl flex items-center gap-3">
              <CarFront />
              Add Car
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCar;