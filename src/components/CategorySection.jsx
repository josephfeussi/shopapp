import React from "react";
import image3 from "../assets/images/img3.jpg";
import image4 from "../assets/images/img4.jpg";
import image5 from "../assets/images/img5.jpg";

const CategorySection = () => {
  const categories = [
    {
      title: "Men",
      imageUrl: image3,
    },
    {
      title: "Women",
      imageUrl: image4,
    },
    {
      title: "Kids",
      imageUrl: image5,
    },
  ];

  return (
    <div className="container mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 cursor-pointer">
        {categories.map((category, index)=> (
            <div key={index} className="relative h-64 transform transition-transform duration-300 hover:scale-105">
                <img src={category.imageUrl} alt="" className="w-full h-full object-cover rounded-lg shadow-md" />
                <div className="absolute top-20 left-12">
                    <p className="text-xl font-bold"> {category.title}</p>
                    <p className="text-gray-6"> View All</p>
                </div>
            </div>
        ))}
    </div>
  );
};

export default CategorySection;
