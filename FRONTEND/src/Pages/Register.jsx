import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { RegisterUser } from "../API/CarApi";

const Register = () => {

  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    address: "",
    phoneNo: "",
    licenceNo: "",
    licenceImg: "",
    role: "user",
  });

  // HANDLE CHANGE
  const handleChange = (e) => {

    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // HANDLE SUBMIT
  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const res = await RegisterUser(form);

      console.log(res);

      if (res.success) {

        alert("Registration Successful");

        navigate("/");
      }

    } catch (error) {

      console.log("ERROR :", error);
    }
  };

  return (

    <div className="min-h-screen bg-black flex items-center justify-center p-5 text-white">

      <div className="w-full max-w-5xl grid lg:grid-cols-2 bg-[#0b0b0b] rounded-3xl overflow-hidden border border-zinc-800">

        {/* LEFT SIDE */}
        <div className="hidden lg:flex flex-col justify-center p-10 bg-[#070707]">

          <h1 className="text-5xl font-bold leading-tight">
            Create
            <span className="text-lime-500 block">
              Account
            </span>
          </h1>

          <p className="text-zinc-400 mt-4">
            Join DriveX premium car rental.
          </p>

          <img
            src="https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=1200&auto=format&fit=crop"
            alt="car"
            className="rounded-2xl mt-8"
          />
        </div>

        {/* RIGHT SIDE */}
        <form
          onSubmit={handleSubmit}
          className="p-8 space-y-4"
        >

          <h2 className="text-4xl font-bold mb-5">
            Register
          </h2>

          {/* NAME */}
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full p-4 rounded-xl bg-black border border-zinc-700 outline-none focus:border-lime-500"
          />

          {/* EMAIL */}
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full p-4 rounded-xl bg-black border border-zinc-700 outline-none focus:border-lime-500"
          />

          {/* PASSWORD */}
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            required
            className="w-full p-4 rounded-xl bg-black border border-zinc-700 outline-none focus:border-lime-500"
          />

          {/* ADDRESS */}
          <input
            type="text"
            name="address"
            placeholder="Address"
            value={form.address}
            onChange={handleChange}
            required
            className="w-full p-4 rounded-xl bg-black border border-zinc-700 outline-none focus:border-lime-500"
          />

          {/* PHONE */}
          <input
            type="text"
            name="phoneNo"
            placeholder="Phone Number"
            value={form.phoneNo}
            onChange={handleChange}
            required
            className="w-full p-4 rounded-xl bg-black border border-zinc-700 outline-none focus:border-lime-500"
          />

          {/* LICENCE NUMBER */}
          <input
            type="text"
            name="licenceNo"
            placeholder="Licence Number"
            value={form.licenceNo}
            onChange={handleChange}
            required
            className="w-full p-4 rounded-xl bg-black border border-zinc-700 outline-none focus:border-lime-500"
          />

          {/* LICENCE IMAGE URL */}
          <input
            type="text"
            name="licenceImg"
            placeholder="Licence Image URL"
            value={form.licenceImg}
            onChange={handleChange}
            required
            className="w-full p-4 rounded-xl bg-black border border-zinc-700 outline-none focus:border-lime-500"
          />

          {/* BUTTON */}
          <button
            type="submit"
            className="w-full bg-lime-500 text-black font-bold py-4 rounded-xl hover:bg-lime-600 transition"
          >
            Create Account
          </button>

          {/* LOGIN LINK */}
          <p className="text-center text-zinc-400">

            Already have account?

            <Link to="/">
              <span className="text-lime-500 ml-2 cursor-pointer">
                Login
              </span>
            </Link>

          </p>

        </form>
      </div>
    </div>
  );
};

export default Register;