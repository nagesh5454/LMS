import React from "react";
import { Button } from "./ui/button";

const categories = [
  "All course",
  "Web development",
  "Android development",
  "Data Science",
];

const Categories = () => {
    const selectedCategory = null;
    const onClick = () => {

    }
  return (
    <div className="flex flex-wrap px-4 gap-7 justify-center my-10">
      <Button
        variant={selectedCategory === null ? "default" : "outline"}
        onClick={() => onClick(null)}
      >
        All Categories
      </Button>
      {categories.map((category, index) => (
        <Button
          key={index}
          variant={selectedCategory === index ? "default" : "outline"}
          onClick={() => onClick(category.id)}
        >
          {category}
        </Button>
      ))}
    </div>
  );
};

export default Categories;
