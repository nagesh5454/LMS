import Categories from "./components/Categories";
import Courses from "./components/Courses";
import HeroSection from "./components/HeroSection";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Profile from "./components/Profile";
import MyLearning from "./components/MyLearning";
import CourseOverview from "./components/CourseOverview";
import Dashboard from "./admin/Dashboard";
import Create from "./admin/course/Create";
import Sidebar from "./admin/Sidebar"; 
import Edit from "./admin/course/Edit";
import CourseTable from "./admin/course/CourseTable";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: (
          <>
            <HeroSection />
            <Categories />
            <Courses />
          </>
        ),
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/learning",
        element: <MyLearning />,
      },
      {
        path: "/course/:courseId/overview",
        element: <CourseOverview/>,
      },
      {
        path:"/admin",
        element:<Sidebar/>,
        children:[
          {
            path:"dashboard",
            element:<Dashboard/>
          },
          {
            path:"course",
            element:<CourseTable/>
          },
          {
            path:"course/create",
            element:<Create/>
          },
          {
            path:"course/:id/edit",
            element:<Edit/>
          },
        ]
      }
    ],
  }
]);

function App() {
  return (
    <main>
       <RouterProvider router={appRouter}/>
    </main>
  );
}

export default App;
