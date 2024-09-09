import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React, { useState } from "react";
import RichTextEditor from "../RichTextEditor";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "sonner";

const Edit = () => {
  const [input, setInput] = useState({
    title: "",
    subtitle: "",
    description: "",
    category: "",
    courseLevel: "",
    price: "",
    courseThumbnail: "",
  });
  const navigate = useNavigate();

  const changeEventHandler = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };
  const selectCategory = (value) => {
    setInput({ ...input, category: value });
  };
  const selectCourseLevel = (value) => {
    setInput({ ...input, courseLevel: value });
  };
  const selectThumbnail = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const fileReader = new FileReader();
      fileReader.onloadend = () => {
        const result = fileReader.result;
        setInput({ ...input, courseThumbnail: result });
      };
      fileReader.readAsDataURL(file);
    }
  };
  const submitHandler = async (e) => {
    e.preventDefault(); 
    
    try {
      const response = await axios.post("", input, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
      if (response.data.success) {
        toast.success(response.data.message);
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
  return (
    <div className="flex-1 mx-10">
      {/* Top bar  */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-semibold text-xl">Basic Course Details</h1>
        </div>
        <div className="flex gap-2">
          <Button disabled variant="link">
            Publish
          </Button>
          <Button>Remove</Button>
        </div>
      </div>
      {/* Course related input field  */}
      <form onSubmit={submitHandler} className="space-y-4 mt-5">
        <div>
          <Label>Title</Label>
          <Input
            type="text"
            name="title"
            value={input.title}
            onChange={changeEventHandler}
            placeholder="Ex. Fullstack development"
          />
        </div>
        <div>
          <Label>Subtitle</Label>
          <Input
            type="text"
            name="subtitle"
            value={input.subtitle}
            onChange={changeEventHandler}
            placeholder="Ex. Become a MERN Stack developer from Zero to Hero in 2 months"
          />
        </div>
        <div>
          <Label>Description</Label>
          <RichTextEditor input={input} setInput={setInput} />
        </div>
        <div className="flex items-center gap-5">
          <div>
            <Label>Category</Label>
            <Select onValueChange={selectCategory}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select a category" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Category</SelectLabel>
                  <SelectItem value="nextjs">Nextjs</SelectItem>
                  <SelectItem value="data science">Data Science</SelectItem>
                  <SelectItem value="fullstack development">
                    Fullstack development
                  </SelectItem>
                  <SelectItem value="backend web development">
                    Backend web developemnt
                  </SelectItem>
                  <SelectItem value="frontend web development">
                    Frontend web development
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label>Course Level</Label>
            <Select onValueChange={selectCourseLevel}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select a course level" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Course Level</SelectLabel>
                  <SelectItem value="Beginner">Beginner</SelectItem>
                  <SelectItem value="Medium">Medium</SelectItem>
                  <SelectItem value="Advance">Advance</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label>Price in (INR)</Label>
            <Input
              type="number"
              name="price"
              value={input.price}
              onChange={changeEventHandler}
              placeholder="499₹"
              className="w-fit"
            />
          </div>
        </div>
        <div>
          <Label>Course Thumbnail</Label>
          <Input onChange={selectThumbnail} type="file" className="w-fit" />
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" onClick={() => navigate("/admin/course")}>
            Cancel
          </Button>
          <Button>Save</Button>
        </div>
      </form>
    </div>
  );
};

export default Edit;
