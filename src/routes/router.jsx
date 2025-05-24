import React from "react";
import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../Pages/ErrorPage";
import MainPage from "../Pages/MainPage";
import CurriculumVitae from "../Pages/CurriculumVitae";
import MainLayout from "../Components/MainLayout";
import Testing from "../Components/Testing";
import ContactMe from "../Pages/ContactMe";
import GraphicDesignPage from "../Pages/GraphicDesignPage";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <MainPage />,
        },
        {
          path: "cv",
          element: <CurriculumVitae />,
        },
        {
          path: "contact-me",
          element: <ContactMe />,
        },
        {
          path: "graphic-designs/:gdId",
          element: <GraphicDesignPage />,
        }
      ],
    },
]);

export default router;
