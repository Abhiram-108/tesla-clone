import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ModelSpage from './pages/ModelSpage'
import CyberTruckPage from './pages/CyberTruckPage'
import ModelXpage from './pages/ModelXpage'
import Modelypage from './pages/Modelypage'
import Model3page from './pages/Model3page'
import Shoppage from './pages/Shoppage'
import Cartpage from './pages/Cartpage'
import { RecoilRoot } from 'recoil'
import { Toaster } from 'react-hot-toast'

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <App>
        <HomePage />
      </App>
    )
  },
  {
    path: '/model_S',
    element: (
      <App>
        <ModelSpage />
      </App>
    )
  },
  {
    path: '/model_x',
    element: (
      <App>
        <ModelXpage />
      </App>
    )
  },
  {
    path: '/model_3',
    element: (
      <App>
        <Model3page />
      </App>
    )
  },
  {
    path: '/model_y',
    element: (
      <App>
        <Modelypage />
      </App>
    )
  },
  {
    path: '/cybertruck',
    element: (
      <App>
        <CyberTruckPage />
      </App>
    )
  },
  {
    path: '/shop/cart',
    element: (
      <App>
        <Cartpage />
      </App>
    )
  },
  {
    path: '/shop',
    element: (
      <App>
        <Shoppage />
      </App>
    )
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <RecoilRoot>
      <Toaster />
      <RouterProvider router={router} />
    </RecoilRoot>
  </React.StrictMode>
)
