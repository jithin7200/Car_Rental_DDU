import React, { useState } from "react";
import {
  Menu,
  X,
  CarFront,
  User,
  LogOut,
} from "lucide-react";

import { Link } from "react-router-dom";

export default function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-[#050816] border-b border-zinc-800 text-white px-6 lg:px-12 py-4 sticky top-0 z-50">

      <div className="flex items-center justify-between">

        {/* LOGO */}
        <Link to="/" className="flex items-center gap-3">

          <div className="bg-green-500/20 p-2 rounded-xl">
            <CarFront className="text-green-400" size={30} />
          </div>

          <div>
            <h1 className="text-2xl font-bold">
              Drive<span className="text-green-400">X</span>
            </h1>

            <p className="text-xs tracking-widest text-zinc-400">
              CAR RENTAL
            </p>
          </div>
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-8 text-lg">

          <Link
            to="/"
            className="hover:text-green-400 transition"
          >
            Home
          </Link>

          <Link
            to="/cars"
            className="hover:text-green-400 transition"
          >
            Cars
          </Link>

          <Link
            to="/about"
            className="hover:text-green-400 transition"
          >
            About
          </Link>

          <Link
            to="/contact"
            className="hover:text-green-400 transition"
          >
            Contact
          </Link>
        </div>

        {/* RIGHT SIDE */}
        <div className="hidden md:flex items-center gap-4">

          {/* PROFILE */}
          <button className="flex items-center gap-2 border border-zinc-700 hover:border-green-400 px-4 py-2 rounded-xl transition">
            <User size={18} />
            Profile
          </button>

          {/* LOGOUT */}
          <button className="flex items-center gap-2 bg-green-500 hover:bg-green-600 px-5 py-2 rounded-xl font-semibold transition">
            <LogOut size={18} />
            Logout
          </button>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <X size={30} />
          ) : (
            <Menu size={30} />
          )}
        </button>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden mt-6 flex flex-col gap-5 text-lg bg-[#0a0f1f] p-6 rounded-2xl border border-zinc-800">

          <Link
            to="/"
            className="hover:text-green-400"
          >
            Home
          </Link>

          <Link
            to="/cars"
            className="hover:text-green-400"
          >
            Cars
          </Link>

          <Link
            to="/about"
            className="hover:text-green-400"
          >
            About
          </Link>

          <Link
            to="/contact"
            className="hover:text-green-400"
          >
            Contact
          </Link>

          <hr className="border-zinc-700" />

          <button className="flex items-center gap-2 border border-zinc-700 hover:border-green-400 px-4 py-3 rounded-xl transition">
            <User size={18} />
            Profile
          </button>

          <button className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 px-5 py-3 rounded-xl font-semibold transition">
            <LogOut size={18} />
            Logout
          </button>
        </div>
      )}
    </nav>
  );
}