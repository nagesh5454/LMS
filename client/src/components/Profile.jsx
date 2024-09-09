import React, { useRef, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
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
];

const Profile = () => {
  const [profilePhoto, setProfilePhoto] = useState("");
  const profileRef = useRef(null);

  const onChangeHandler = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const fileReader = new FileReader();
      fileReader.onloadend = () => {
        setProfilePhoto(fileReader.result); // Set the preview of the uploaded image
      };
      fileReader.readAsDataURL(file); // Read the file as a data URL
    }
  };
  return (
    <div className="max-w-4xl mx-auto my-10">
      <h1 className="font-bold text-2xl">PROFILE</h1>
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8 my-5">
        <div className="flex flex-col items-center">
          <Avatar
            onClick={() => profileRef.current.click()}
            className="h-32 w-32 mb-4 cursor-pointer"
          >
            <AvatarImage src={profilePhoto} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <input
            className="hidden"
            ref={profileRef}
            type="file"
            accept="image/*"
            onChange={onChangeHandler}
          />
        </div>
        <div className="w-full md:w-auto">
          <div className="mb-2">
            <h2 className="font-semibold text-gray-900 dark:text-gray-100">
              Name:
              <span className="font-normal text-gray-700 dark:text-gray-300 ml-2">
                Patel MernStack
              </span>
            </h2>
          </div>
          <div className="mb-2">
            <h2 className="font-semibold text-gray-900 dark:text-gray-100">
              Email:
              <span className="font-normal text-gray-700 dark:text-gray-300 ml-2">
                patelmernstack@example.com
              </span>
            </h2>
          </div>
          <div className="mb-2">
            <h2 className="font-semibold text-gray-900 dark:text-gray-100">
              Location:
              <span className="font-normal text-gray-700 dark:text-gray-300 ml-2">
                Mumbai, India
              </span>
            </h2>
          </div>
          <Button size="sm">Update Profile</Button>
        </div>
      </div>
      <div>
        <h1 className="font-medium text-lg">Courses you're enrolled in</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-5">
          {myLearning.map((course) => (
            <Course key={course._id} course={course} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
