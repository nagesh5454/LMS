import React from "react";
import { Card, CardContent } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Link } from "react-router-dom";

const Course = ({ course }) => {
  return (
    <Card
      key={course._id}
      className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg"
    >
      <img
        src={course.coursePicture}
        alt={course.title}
        className="w-full h-46 object-cover"
      />
      <CardContent className="px-5 py-2 space-y-2">
        <Link to={`/course/${course._id}/overview`}>
          <h1 className="hover:underline font-bold text-lg text-gray-800">{course.title}</h1>
        </Link>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Avatar>
              <AvatarImage src={course.creator.profilePhoto} />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <h1 className="font-semibold text-sm text-gray-800">
              {course.creator.name}
            </h1>
          </div>
          <Badge>{course.level}</Badge>
        </div>
        <div className="text-lg font-semibold text-gray-800">
          <span>₹{course.price}</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default Course;
