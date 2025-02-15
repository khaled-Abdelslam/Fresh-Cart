import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Layout from './Components/Layout/Layout'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
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
      {path:'register' , element: <Register/>},
      {path:'login' , element: <Login/>},
      {path:'*' , element: <Notfound/>}
    ]}

  ])

  return (
        <>

<WishListProvider>
<UserConteextProvider>

    <RouterProvider router={router}></RouterProvider>

</UserConteextProvider>

</WishListProvider>





    </>
  )
}

export default App
