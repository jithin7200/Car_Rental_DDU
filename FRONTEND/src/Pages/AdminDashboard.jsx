import React, { useEffect, useState } from "react";
import {
  LayoutDashboard,
  CarFront,
  Users,
  CalendarCheck,
  IndianRupee,
  Search,
  Bell,
  User,
  Pencil,
  Trash2,
  Plus,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
const AdminDashboard = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetchCars();
  }, []);

  const fetchCars = async () => {
    const res = await fetch(
      "http://localhost:5000/car/getCars"
    );

    const data = await res.json();

    setCars(data);
  };

  const stats = [
    {
      title: "Total Cars",
      value: cars.length,
      icon: <CarFront />,
    },
    {
      title: "Users",
      value: 245,
      icon: <Users />,
    },
    {
      title: "Bookings",
      value: 89,
      icon: <CalendarCheck />,
    },
    {
      title: "Revenue",
      value: "₹45K",
      icon: <IndianRupee />,
    },
  ];

  const menu = [
    {
      name: "Dashboard",
      icon: <LayoutDashboard />,
    },
    {
      name: "Cars",
      icon: <CarFront />,
    },
    {
      name: "Users",
      icon: <Users />,
    },
    {
      name: "Bookings",
      icon: <CalendarCheck />,
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white flex">

      {/* Sidebar */}
      <div className="w-64 bg-[#071018] border-r border-lime-500/10 p-6">

        <h1 className="text-4xl font-bold mb-10">
          Drive<span className="text-lime-400">X</span>
        </h1>

        <div className="space-y-3">
          {menu.map((item, i) => (
            <button
              key={i}
              className={`w-full flex items-center gap-4 p-4 rounded-2xl text-lg ${i === 0
                  ? "bg-lime-600"
                  : "hover:bg-[#0d1b27]"
                }`}
            >
              {item.icon}
              {item.name}
            </button>
          ))}
        </div>
      </div>

      {/* Main */}
      <div className="flex-1 p-8">

        {/* Top */}
        <div className="flex justify-between items-center mb-10">

          <div>
            <h1 className="text-5xl font-bold">
              Admin Dashboard
            </h1>

            <p className="text-gray-400 mt-2">
              Manage your rental system
            </p>
          </div>

          <div className="flex items-center gap-4">

            <div className="bg-[#071018] border border-gray-800 rounded-2xl px-4 py-3 flex items-center gap-3">
              <Search />
              <input
                type="text"
                placeholder="Search..."
                className="bg-transparent outline-none"/>
            </div>

            <button className="bg-[#071018] p-4 rounded-2xl">
              <Bell />
            </button>

            <button className="bg-[#071018] p-4 rounded-2xl">
              <User />
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-4 gap-5 mb-10">
          {stats.map((item, i) => (
            <div
              key={i}
              className="bg-[#071018] border border-gray-800 p-6 rounded-3xl" >
              <div className="flex justify-between">

                <div>
                  <p className="text-gray-400">
                    {item.title}
                  </p>

                  <h2 className="text-5xl font-bold mt-4">
                    {item.value}
                  </h2>
                </div>

                <div className="bg-lime-500/10 text-lime-400 h-fit p-4 rounded-2xl">
                  {item.icon}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Table */}
        <div className="bg-[#071018] border border-gray-800 rounded-3xl p-6">

          {/* Header */}
          <div className="flex justify-between items-center mb-8">

            <div>
              <h2 className="text-3xl font-bold">
                Cars Management
              </h2>

              <p className="text-gray-400">
                Manage all cars
              </p>
            </div>
            <Link to='/addCar'>
              <button className="bg-lime-600 px-6 py-3 rounded-2xl flex items-center gap-3">
                <Plus />
                Add Car
              </button>
            </Link>
          </div>

          {/* Table */}
          <table className="w-full">

            <thead>
              <tr className="text-left text-gray-400 border-b border-gray-800">
                <th className="pb-5">Car</th>
                <th>Brand</th>
                <th>Fuel</th>
                <th>Price</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {cars.map((car) => (
                <tr
                  key={car._id}
                  className="border-b border-gray-900 hover:bg-[#0d1b27]"
                >

                  <td className="py-5">
                    <div className="flex items-center gap-4">

                      <img
                        src={car.image}
                        alt=""
                        className="w-24 h-16 object-cover rounded-xl"
                      />

                      <div>
                        <h3 className="font-semibold">
                          {car.brand} {car.model}
                        </h3>

                        <p className="text-gray-400 text-sm">
                          {car.year}
                        </p>
                      </div>
                    </div>
                  </td>

                  <td>{car.brand}</td>

                  <td>{car.fuelType}</td>

                  <td className="text-lime-400 font-bold">
                    ₹{car.rentPerDay}
                  </td>

                  <td>
                    <span
                      className={`px-4 py-2 rounded-xl text-sm ${car.available
                          ? "bg-lime-600/20 text-lime-400"
                          : "bg-red-500/20 text-red-400"
                        }`}
                    >
                      {car.available
                        ? "Available"
                        : "Booked"}
                    </span>
                  </td>

                  <td>
                    <div className="flex gap-3">

                      <button className="bg-blue-500 p-3 rounded-xl">
                        <Pencil size={18} />
                      </button>

                      <button className="bg-red-500 p-3 rounded-xl">
                        <Trash2 size={18} />
                      </button>

                    </div>
                  </td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;