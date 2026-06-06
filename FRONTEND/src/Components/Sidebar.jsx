import React from "react";
import {
  LayoutDashboard,
  CarFront,
  Users,
  CalendarCheck,
} from "lucide-react";

const AdminSidebar = () => {
  const menu = [
    {
      name: "Dashboard",
      icon: <LayoutDashboard />,
    },
    {
      name: "Add Car",
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
    <div className="w-64 bg-[#071018] border-r border-lime-500/10 p-6">
      <h1 className="text-4xl font-bold mb-10">
        Drive<span className="text-lime-400">X</span>
      </h1>

      <div className="space-y-3">
        {menu.map((item, i) => (
          <button
            key={i}
            className={`w-full flex items-center gap-4 p-4 rounded-2xl text-lg ${
              i === 0
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
  );
};

export default AdminSidebar;