import React from "react";
import {
  FaHeadset,
  FaLock,
  FaMoneyBillWave,
  FaShippingFast,
  FaTag,
} from "react-icons/fa";

const InfoSection = () => {
  const infoItems = [
    {
      icon: <FaShippingFast className="text-3xl text-red-600" />,
      title: "Free shipping",
      description: "Get your orders delivered with no extra cost",
    },
    {
      icon: <FaHeadset className="text-3xl text-red-600" />,
      title: "Free shipping",
      description: "Get your orders delivered with no extra cost",
    },
    {
      icon: <FaMoneyBillWave className="text-3xl text-red-600" />,
      title: "Free shipping",
      description: "Get your orders delivered with no extra cost",
    },
    {
      icon: <FaLock className="text-3xl text-red-600" />,
      title: "Free shipping",
      description: "Get your orders delivered with no extra cost",
    },
    {
      icon: <FaTag className="text-3xl text-red-600" />,
      title: "Free shipping",
      description: "Get your orders delivered with no extra cost",
    },
  ];
  return (
    <div className="bg-white pb-8 pt-12">
      <div className="conatiner mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {infoItems.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center p-4 border rounded-lg shadow-md 
          transform transition-transform duration-300 hover:scale-105 cursor-pointer"
          >
            {item.icon}
            <h3 className="mt-4 tet-xl font-semibold">{item.title}</h3>
            <p className="mt-2 text-gray-600"> {item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfoSection;
