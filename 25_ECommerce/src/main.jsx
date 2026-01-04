import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home.jsx'
import Product from './components/Product.jsx'
import SngleProduct from './components/SngleProduct.jsx'
import axios from 'axios'
import ProductWithUseLoader from './components/ProductWithUseLoader.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/product",
        element: <Product />,
        // element: <ProductWithUseLoader />
        // loader: async () => {
        //   let response = await axios('https://fakestoreapi.com/products')
        //   return response.data;
        // }
      },
      {
        path: "/product/:id",
        element: <SngleProduct />
      }
    ]
  }
])
createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}/>
)
