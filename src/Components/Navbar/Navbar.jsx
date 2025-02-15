import React, { useContext } from 'react'
import logo from '../../assets/images/freshcart-logo.svg'
import { Link , Navigate, NavLink, useNavigate, useNavigation} from 'react-router-dom'
import { UserContext } from './../../Context/UserContsxt';

export default function Navbar() {
let navigate = useNavigate();
  let {userLogin , setuserLogin} = useContext(UserContext)
  
function logOut(){

  localStorage.removeItem('userToken')
  setuserLogin(null)
  navigate('/login')


  }
  
  return (
    <>
    


   <nav className="bg-gray-100 border-gray-200 dark:bg-gray-900 ">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">

<div className="flex gap-3">
  
<Link to="" className="flex items-center space-x-3 rtl:space-x-reverse">
      <img src={logo} className="h-8" alt="Flowbite Logo" />
    </Link>
  

    <div className="hidden w-full md:block md:w-auto " id="navbar-default">
      {userLogin!==null? <ul className="font-medium flex flex-col h-[100%] items-center p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-100 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-gray-100    dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <NavLink to="home" className="block py-2 px-3  text-gray-900  rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-700 md:p-0 dark:text-white md:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" aria-current="page">Home</NavLink>
        </li>
        <li>
          <NavLink to="cart" className="block py-2 px-3  text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-700 md:p-0 dark:text-white md:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Cart</NavLink>
        </li>
        <li>
          <NavLink to="categories" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-700 md:p-0 dark:text-white md:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Categories</NavLink>
        </li>
        <li>
          <NavLink to="wish_list" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-700 md:p-0 dark:text-white md:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Wish List</NavLink>
        </li>
        <li>
          <NavLink to="products" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-700 md:p-0 dark:text-white md:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Products</NavLink>
        </li>
        <li>
          <NavLink to="brands" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-700 md:p-0 dark:text-white md:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Brands</NavLink>
        </li>
      </ul> : null}
    </div>
 
  </div> 



    <button data-collapse-toggle="navbar-default" type="button" className=" inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
      <span className="sr-only">Open main menu</span>
      <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h15M1 7h15M1 13h15" />
      </svg>
    </button>
    






<div className="flex items-center gap-3 ">
<ul className='flex items-center gap-3 dark:text-white'>
  <li><i className="fa-brands cursor-pointer  fa-instagram"></i></li>
  <li><i className="fa-brands cursor-pointer fa-facebook"></i></li>
  <li><i className="fa-brands cursor-pointer fa-tiktok"></i></li>
  <li><i className="fa-brands cursor-pointer fa-twitter"></i></li>
  <li><i className="fa-brands cursor-pointer fa-linkedin"></i></li>
  <li><i className="fa-brands cursor-pointer fa-youtube"></i></li>
</ul>
 

<ul className='font-medium   flex flex-col py-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-100 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-gray-100  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700'>
{userLogin == null ? <> <li>
    <NavLink to='/login' className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-700 md:p-0 dark:text-white md:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
      Login
    </NavLink>
  </li>
 
  <li>
    <NavLink to='/register' className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-700 md:p-0 dark:text-white md:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
      Register
    </NavLink>
  </li></> :   <li>
    <span onClick={logOut} className='cursor-pointer'>
      Logout
    </span>
  </li> }
 

</ul>

</div>




  </div>



</nav>

  
    
    </>
  )
}
