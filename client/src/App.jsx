import { useState } from 'react'
import Home from "./pages/home/Home"
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import AddBook from "./pages/AddBook/AddBook"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './App.css'
import Update from './pages/update/Update';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/addbook",
      element: <AddBook />,
    },
    {
      path: "/updatebook",
      element: <Update />,
    },
  ]);

  return (
    <div>
    <RouterProvider router={router}/>
    </div>
  )
}

export default App
