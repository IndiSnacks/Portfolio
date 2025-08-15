import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import AboutMe from './Pages/AboutMe.tsx'
import RootLayout from './Pages/RootLayout.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />, // This is your layout component
    children: [
      {
        index: true, // This makes App the default child for the '/' path
        element: <App />,
      },
      {
        path: 'about', // This path is relative to the parent, so it becomes '/about'
        element: <AboutMe />,
      },
    ],
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
