import React, { useState } from "react";
import { Upload } from "lucide-react";
import { Link } from "react-router-dom";

const Register = () => {
  const [form, setForm] = useState({});

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]:
        e.target.type === "file"
          ? e.target.files[0]
          : e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
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

          {[
            ["name", "Full Name"],
            ["email", "Email"],
            ["password", "Password"],
            ["address", "Address"],
            ["phoneNo", "Phone Number"],
            ["licenceNo", "Licence Number"],
          ].map(([name, placeholder]) => (
            <input
              key={name}
              type={name === "password" ? "password" : "text"}
              name={name}
              placeholder={placeholder}
              onChange={handleChange}
              className="w-full p-4 rounded-xl bg-black border border-zinc-700 outline-none focus:border-lime-500"
            />
          ))}

          {/* FILE INPUT */}
          <input
            type="file"
            name="licenceImg"
            id="fileUpload"
            onChange={handleChange}
            className="hidden"
          />

          <label
            htmlFor="fileUpload"
            className="w-full flex items-center justify-center gap-3 p-4 rounded-xl bg-black border border-zinc-700 text-zinc-400 cursor-pointer hover:border-lime-500"
          >
            <Upload size={20} />
            Choose Licence Image
          </label>
<Link to='/'>
          <button className="w-full bg-lime-500 text-black font-bold py-4 rounded-xl hover:bg-lime-600">
            Create Account
          </button>
</Link>
          <p className="text-center text-zinc-400">
            Already have account?
            <span className="text-lime-500 ml-2 cursor-pointer">
              Login
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;