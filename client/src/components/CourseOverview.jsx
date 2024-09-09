import { BadgeInfo, CheckCircle2, CirclePlay } from "lucide-react";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import DemoVideo from "@/assets/food_intro.mp4";
import { Progress } from "./ui/progress";

const content = [
  {
    _id: "dskjfvlksdfvsdjfv",
    title: "Introduction",
    description:
      "Learn Javascript online and supercharge your web design with this Javascript for beginners training course",
    creator: "Patel MernStack",
    updatedAt: "07/2024",
    videoUrl: DemoVideo,
    isCompleted:true,
  },
  {
    _id: "dskjfvlksdfvsdjgy",
    title: "Setup vs code",
    description:
      "Learn Javascript online and supercharge your web design with this Javascript for beginners training course",
    creator: "Shivani",
    updatedAt: "07/2024",
    videoUrl: DemoVideo,
    isCompleted:false
  },
  {
    _id: "dskjfvlksdfvsder",
    title: "How web browser works?",
    description:
      "Learn Javascript online and supercharge your web design with this Javascript for beginners training course",
    creator: "Pranav Tyagi",
    updatedAt: "07/2024",
    videoUrl: DemoVideo,
    isCompleted:false
  },
];

const CourseOverview = () => {
  const params = useParams();
  const [progress, setProgress] = React.useState(13)
  const enrolled = true; 

 
  useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500)
    return () => clearTimeout(timer)
  }, [])
  
  return (
    <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row gap-10 m-10">
      {/* Lecture Sidebar */}
      <div className="flex flex-col w-full md:w-[20%] border-r border-gray-200 space-y-4">
        <h2 className="font-semibold text-xl">Course Lectures</h2>
        <Progress value={progress} className="w-full" />
        <h1>70% completed</h1>
        {content.map((lecture) => (
          <div key={lecture._id} className="space-y-2">
            <div
              className={`${
                lecture.isCompleted ? "text-[#0ead69]" : null
              } flex items-center gap-1 px-3 py-2 hover:bg-gray-100 rounded-lg cursor-pointer transition`}
            >
            { lecture.isCompleted ? <CheckCircle2 size={18} /> : <CirclePlay size={18}/> }
              <h1 className="text-base font-medium">{lecture.title}</h1>
            </div>
            <Separator />
          </div>
        ))}
      </div>
      {/* Course Content */}
      <div className="space-y-6 flex-1">
        {/* Video Section */}
        <div className="relative overflow-hidden md:rounded-lg">
          <video src={DemoVideo} controls className="w-full md:rounded-lg" />
        </div>

        {/* Course Details */}
        <div>
          <h1 className="font-bold text-3xl text-gray-800">
            Javascript for Beginners
          </h1>
          <p className="text-lg text-gray-600 mt-2">
            Learn Javascript online and supercharge your web design with this
            Javascript for beginners training course.
          </p>
          <h1 className="mt-4 text-lg text-gray-700">
            Created By: <span className="font-semibold">Patel Mernstack</span>
          </h1>
          <div className="flex text-sm items-center gap-2 text-gray-500 mt-2">
            <BadgeInfo size={16} />
            <p>
              Last Updated <span>07/2024</span>
            </p>
          </div>
        </div>

        {/* Call to Action */}
        {enrolled ? (
          <Button className="px-6 py-2 rounded-full">Mark As Completed</Button>
        ) : (
          <Button className=" px-6 py-2 rounded-full">Enroll in Course</Button>
        )}
      </div>
    </div>
  );
};

export default CourseOverview;
