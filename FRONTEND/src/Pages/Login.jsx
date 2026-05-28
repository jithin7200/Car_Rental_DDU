import React, { useState } from "react";
import {
  Eye,
  EyeOff,
  ShieldCheck,
  CarFront,
  Headphones,
} from "lucide-react";

import { Link, useNavigate } from "react-router-dom";
import { LoginUser } from "../API/CarApi";

export default function Login() {

  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  // HANDLE INPUT CHANGE
  const handelChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // HANDLE LOGIN
  const handelSubmit = async (e) => {
    e.preventDefault();

    try {

      const res = await LoginUser(form);

      console.log(res);

      if (res.success) {

        console.log("Login Successful");

        navigate("/get");

      } else {

        console.log("Invalid Credentials");
      }

    } catch (error) {

      console.log("ERROR :", error);
    }
  };

  const features = [
    {
      icon: ShieldCheck,
      title: "100% Secure",
      desc: "Safe & Trusted",
    },
    {
      icon: CarFront,
      title: "Premium Cars",
      desc: "Wide Selection",
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      desc: "We're Here For You",
    },
  ];

  const socials = ["Google", "Facebook", "Apple"];

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-6">

      <div className="w-full max-w-7xl min-h-[90vh] rounded-[35px] overflow-hidden border border-zinc-800 grid lg:grid-cols-2 bg-[#050816]">

        {/* LEFT SIDE */}
        <div
          className="relative p-10 flex flex-col justify-between bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1974&auto=format&fit=crop')",
          }}
        >
          {/* OVERLAY */}
          <div className="absolute inset-0 bg-black/60" />

          {/* BLUR EFFECT */}
          <div className="absolute top-40 left-40 w-72 h-72 bg-green-500/20 blur-[120px]" />

          <div className="relative z-10">

            {/* LOGO */}
            <div className="flex items-center gap-3">

              <div className="bg-green-500/20 p-3 rounded-xl">
                <CarFront className="text-green-400" size={34} />
              </div>

              <div>
                <h1 className="text-4xl font-bold">
                  Drive<span className="text-green-400">X</span>
                </h1>

                <p className="text-sm tracking-wider text-zinc-300">
                  PREMIUM CAR RENTAL
                </p>
              </div>
            </div>

            {/* TEXT */}
            <div className="mt-16">

              <p className="text-green-400 font-semibold mb-4">
                WELCOME BACK
              </p>

              <h1 className="text-6xl font-bold leading-tight">
                Drive Your <br />
                <span className="text-green-400">Dream Car</span>
              </h1>

              <p className="mt-6 max-w-md text-lg text-zinc-300 leading-8">
                Explore premium cars and enjoy a seamless rental
                experience with DriveX.
              </p>
            </div>
          </div>

          {/* FEATURES */}
          <div className="relative z-10 flex flex-wrap gap-6">

            {features.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="flex items-center gap-3">

                <div className="bg-green-500/20 p-3 rounded-full">
                  <Icon className="text-green-400" size={22} />
                </div>

                <div>
                  <h3 className="font-semibold">{title}</h3>
                  <p className="text-sm text-zinc-400">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="relative flex items-center justify-center p-8 bg-[#050816]">

          <div className="absolute top-32 right-32 w-80 h-80 bg-green-500/10 blur-[120px]" />

          <div className="relative z-10 w-full max-w-xl rounded-[30px] border border-zinc-800 bg-[#0a0f1f]/80 p-10 backdrop-blur-xl">

            {/* TOP */}
            <div className="flex justify-end mb-10 text-zinc-300">

              Don’t have an account?

              <Link to="/register">
                <span className="ml-2 text-green-400 cursor-pointer">
                  Sign Up
                </span>
              </Link>
            </div>

            <h1 className="text-5xl font-bold">
              Welcome Back!
            </h1>

            <p className="mt-3 text-lg text-zinc-400">
              Login to continue your journey
            </p>

            {/* FORM */}
            <form
              onSubmit={handelSubmit}
              className="mt-10 space-y-6"
            >

              {/* EMAIL */}
              <div>

                <label className="block mb-2 text-lg">
                  Email Address
                </label>

                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handelChange}
                  placeholder="Enter your email"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-500 bg-white text-black outline-none focus:border-green-500"
                />
              </div>

              {/* PASSWORD */}
              <div>

                <label className="block mb-2 text-lg">
                  Password
                </label>

                <div className="relative">

                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={form.password}
                    onChange={handelChange}
                    placeholder="Enter your password"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-500 bg-white text-black outline-none focus:border-green-500"
                  />

                  {/* SHOW PASSWORD */}
                  <button
                    type="button"
                    onClick={() =>
                      setShowPassword(!showPassword)
                    }
                    className="absolute right-4 top-1/2 -translate-y-1/2"
                  >
                    {showPassword ? (
                      <EyeOff
                        className="text-gray-500"
                        size={20}
                      />
                    ) : (
                      <Eye
                        className="text-gray-500"
                        size={20}
                      />
                    )}
                  </button>
                </div>
              </div>

              {/* OPTIONS */}
              <div className="flex items-center justify-between text-sm">

                <label className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    className="accent-green-500"
                  />

                  Remember me
                </label>

                <button
                  type="button"
                  className="text-green-400 hover:underline"
                >
                  Forgot Password?
                </button>
              </div>

              {/* LOGIN BUTTON */}
              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-green-500 hover:bg-green-600 text-xl font-semibold transition"
              >
                Login Now →
              </button>

            </form>

            {/* DIVIDER */}
            <div className="flex items-center gap-4 my-10">

              <div className="flex-1 h-px bg-zinc-800" />

              <p className="text-zinc-400">
                Or login with
              </p>

              <div className="flex-1 h-px bg-zinc-800" />
            </div>

            {/* SOCIAL LOGIN */}
            <div className="grid grid-cols-3 gap-4">

              {socials.map((item) => (
                <button
                  key={item}
                  className="py-4 rounded-2xl border border-zinc-700 hover:border-green-400 transition"
                >
                  {item}
                </button>
              ))}
            </div>

            {/* FOOTER */}
            <div className="flex items-center justify-center gap-3 mt-10 text-zinc-400">

              <ShieldCheck
                className="text-green-400"
                size={20}
              />

              <p>
                Your data is protected with our security system
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}