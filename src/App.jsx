import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Layout from './Components/Layout/Layout'
import { createBrowserRouter, RouterProvider ,createHashRouter } from 'react-router-dom'
import Register from './Components/Register/Register';
import Login from './Components/Login/Login';
import Notfound from './Components/Notfound/Notfound';
import Home from './Components/Home/Home';
import Cart from './Components/Cart/Cart';
import Categories from './Components/Categories/Categories';
import Wish from './Components/Wish_list/Wish';
import Products from './Components/Products/Products';
import Brands from './Components/Brands/Brands';
import UserConteextProvider from './Context/UserContsxt'
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute';
import ProductDetail from './Components/ProductDetail/ProductDetail'
import WishListProvider from './Context/WishListContext'
import CartContextProvider from './Context/CartContext'
import { Toaster } from './../node_modules/react-hot-toast/src/components/toaster';
import { ToastContainer } from 'react-toastify'
import Order from './Components/Order/Order';
import { Offline } from 'react-detect-offline'


function App() {

  const router = createBrowserRouter([

    {path:'', element:<Layout/> , children:[
      {index: true , element:<ProtectedRoute><Home/></ProtectedRoute>  },
      {path:'home' , element:<ProtectedRoute><Home/></ProtectedRoute>  },
      {path:'cart' , element:<ProtectedRoute><Cart/></ProtectedRoute>  },
      {path:'categories' , element:<ProtectedRoute><Categories/></ProtectedRoute>  },
      {path:'wish_list' , element:<ProtectedRoute><Wish/></ProtectedRoute>  },
      {path:'products' , element:<ProtectedRoute><Products/></ProtectedRoute>  },
      {path:'product_details/:id/:category' , element:<ProtectedRoute><ProductDetail/></ProtectedRoute>  },
      {path:'brands' , element:<ProtectedRoute><Brands/></ProtectedRoute>  },
      {path:'order' , element:<ProtectedRoute><Order/></ProtectedRoute>  },
      {path:'register' , element: <Register/>},
      {path:'login' , element: <Login/>},
      {path:'*' , element: <Notfound/>}
    ]}

  ])

  return (
        <>

<WishListProvider>
<UserConteextProvider>

<CartContextProvider>

    <RouterProvider router={router}></RouterProvider>

</CartContextProvider>






</UserConteextProvider>

</WishListProvider>

<ToastContainer />

<Offline>

  <div className="bg-black fixed p-5 text-white bottom-0 start-5 end-5"><h1>you are offline please check your network</h1></div>
</Offline>




    </>
  )
}

export default App
