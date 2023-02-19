import React from "react"
import './App.css'

import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Purpose from "./pages/Purpose"
import Community from "./pages/Community"
import Carrier from "./pages/Carrier"
import Learn from "./pages/Learn"
import United from "./pages/United"

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Purpose />
    },
    {
      path: "/community",
      element: <Community />
    },
    {
      path: "/carrier",
      element: <Carrier />
    },
    {
      path: "/learn",
      element: <Learn />
    },
    {
      path: "/united",
      element: <United />
    },
  ])

  return <RouterProvider router= { routes } />
}

export default App
