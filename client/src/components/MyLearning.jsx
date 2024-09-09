import React from "react";
import Course from "./Course";

const myLearning = [
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
    _id: "sdsdklfnvsdknfvsfvsd",
    title: "The Complete 2024 Web Development Bootcamp",
    coursePicture:
      "https://miro.medium.com/v2/resize:fit:640/format:webp/0*cHiJgQy2Q-zXovKv.jpg",
    creator: {
      name: "Patel MernStack",
      profilePhoto:
        "https://pics.craiyon.com/2023-11-26/oMNPpACzTtO5OVERUZwh3Q.webp",
    },
    price: 1199,
     level:"Medium"
  },
  {
    _id: "sdsdklfnvsdknfvkdsfd",
    title: "The Complete 2024 Web Development Bootcamp",
    coursePicture:
      "https://miro.medium.com/v2/resize:fit:640/format:webp/0*cHiJgQy2Q-zXovKv.jpg",
    creator: {
      name: "Patel MernStack",
      profilePhoto:
        "https://pics.craiyon.com/2023-11-26/oMNPpACzTtO5OVERUZwh3Q.webp",
    },
    price: 1199,
     level:"Advanced"
  },
];

const MyLearning = () => {
  return (
    <div className="max-w-4xl mx-auto my-10">
      <h1 className="font-bold text-2xl">MY LEARNING</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-5">
        {
          myLearning.map((course) => (
            <Course key={course._id} course={course}/>
          ))
        }
      </div>
    </div>
  );
};

export default MyLearning;
