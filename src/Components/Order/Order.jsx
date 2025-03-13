import axios from 'axios'
import React, { useState } from 'react'
import { useContext } from 'react'
import { cartContext } from '../../Context/CartContext'
import { toast } from 'react-toastify';
import { useFormik } from 'formik';

export default function Order() {

  const {cartId , resetValues} = useContext(cartContext)
  const [isCash, setisCash] = useState(true)

 const formikObj = useFormik({
    initialValues:{
        details: "",
        phone: "",
        city: ""
        },

onSubmit: function(values){

if (isCash) {
    createCashOrder(values)
}else{
    createCheckout(values)
}

}
  })

function createCashOrder(values){


    

    axios.post(`https://ecommerce.routemisr.com/api/v1/orders/${cartId}`,
        {
            shippingAddress: values

        
        },
        {
            headers:{
                token : localStorage.getItem('userToken')
            }
        }
    )
    .then(function(res){
toast.success('Order Created' , {position:'top-right'})
resetValues()

    })
    .catch(function(error){
console.log(error);

    })
}

function createCheckout(values){
    axios.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=http://localhost:5173/`,
        {
            shippingAddress: values

        
        },
        {
            headers:{
                token : localStorage.getItem('userToken')
            },
            // params:{
            //     url :'http://localhost:5173/',
            // }
        }  
    )
    .then(function(res){
      
        window.open(res.data.session.url , '_self')
        
            })
            .catch(function(error){
        console.log(error);
        
            })
}

  return (
    <div className='container mx-auto p-5'>

<h2 className='text-main font-bold text-center bg-gray-100 py-3 mb-5 w-[75%] mx-auto'>Payment</h2>


<form onSubmit={formikObj.handleSubmit} className="max-w-sm mx-auto">
  <div className="mb-5">
    <label htmlFor="details" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your details</label>
    <input onChange={formikObj.handleChange} value={formikObj.values.details} type="text" id="details" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required />
  </div>

  <div className="mb-5">
    <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your phone</label>
    <input onChange={formikObj.handleChange} value={formikObj.values.phone} type="tel" id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
  </div>

  <div className="mb-5">
    <label htmlFor="city" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your city</label>
    <input onChange={formikObj.handleChange} value={formikObj.values.city} type="text" id="city" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
  </div>

  <button onClick={()=>{setisCash(true)}} type="submit" className="text-white me-1 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Cash Pay</button>
  <button onClick={()=>{setisCash(false)}} type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Card Pay</button>
</form>



    </div>
  )
}
