import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomeRoute from "./Routes/HomeRoute";
import VideoRoute from "./Routes/VideoRoute";
import LoginRoute from "./Routes/LoginRoute";

const App = () => {
  const router = createBrowserRouter([
    {
      path:"/login",element:<LoginRoute />
    },
    {
      path: "/",
      element: <HomeRoute />,
    },
    {
      path:"/videos/:id",element:<VideoRoute />
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>
};

export default App;
