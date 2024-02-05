
import Home from "./pages/home/Home"

import AddBook from "./pages/AddBook/AddBook"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


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
