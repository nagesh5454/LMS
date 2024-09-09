import React from "react";

import Course from "./Course";

const courses = [
  {
    _id: "sdsdklfnvsdknfvkdsfv",
    title: "Frontend Development Full Course for Beginners 2024",
    coursePicture:
      "https://miro.medium.com/v2/resize:fit:640/format:webp/0*cHiJgQy2Q-zXovKv.jpg",
    creator: {
      name: "Patel MernStack",
      profilePhoto:
        "https://pics.craiyon.com/2023-11-26/oMNPpACzTtO5OVERUZwh3Q.webp",
    },
    price: 2999,
    level:"Biggner"
  },
  {
    _id: "sdsdklfnvsdknfvkdsfvsd",
    title: "The Complete 2024 Web Development Bootcamp",
    coursePicture:
      "https://miro.medium.com/v2/resize:fit:640/format:webp/0*cHiJgQy2Q-zXovKv.jpg",
    creator: {
      name: "Patel MernStack",
      profilePhoto:
        "https://pics.craiyon.com/2023-11-26/oMNPpACzTtO5OVERUZwh3Q.webp",
    },
    price: 1199,
     level:"Biggner"
  },
  {
    _id: "sdsdklfnvsdknfvkdsfres",
    title: "MERN Stack Full Course for Beginners 2024",
    coursePicture:
      "https://miro.medium.com/v2/resize:fit:640/format:webp/0*cHiJgQy2Q-zXovKv.jpg",
    creator: {
      name: "Patel MernStack",
      profilePhoto:
        "https://pics.craiyon.com/2023-11-26/oMNPpACzTtO5OVERUZwh3Q.webp",
    },
    price: 1999,
     level:"Medium"
  },
  {
    _id: "sdsdklfnvsdknfvkdsfre",
    title: "Machine Learning for Beginners 2024",
    coursePicture:
      "https://miro.medium.com/v2/resize:fit:640/format:webp/0*cHiJgQy2Q-zXovKv.jpg",
    creator: {
      name: "Patel MernStack",
      profilePhoto:
        "https://pics.craiyon.com/2023-11-26/oMNPpACzTtO5OVERUZwh3Q.webp",
    },
    price: 2349,
     level:"Advanced"
  } 
];

const Courses = () => {
  return (
    <div className="max-w-7xl mx-auto p-4"> 
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {
          courses.map((course) => (
            <Course key={course._id} course={course}/>
          ))
        }
      </div>
    </div>
  );
};

export default Courses;
