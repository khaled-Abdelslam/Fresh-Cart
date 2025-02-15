import { useFormik } from 'formik'
import React, { useContext, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import * as yup from 'yup'
import { UserContext } from '../../Context/UserContsxt'

export default function Login() {
 
 
 
  let {setuserLogin} = useContext(UserContext)

  const [apiError, setapiError] = useState('');

  const [loading, setloading] = useState(false)

  let navigate = useNavigate()





  const handleRegister = async (values) => {

    setloading(true);

    await axios.post(`https://ecommerce.routemisr.com/api/v1/auth/signin`, values

    ).then((apiresponse) => { 

      if(apiresponse?.data?.message == 'success'){

        localStorage.setItem('userToken' , apiresponse?.data?.token ),
        setuserLogin(apiresponse?.data?.token),
        setloading(false) ,
         navigate('/') 

      };


     }).catch((apiresponse) => {

      setloading(false),
        setapiError(apiresponse?.response?.data?.message)
    }


    )

  };


  let validation = yup.object().shape({


    email: yup.string().email('email is invalid').required('email is required'),

    password: yup.string().matches(/^[A-Z][a-z0-9]{6,10}$/, 'password must start with uppercase').required('password is required'),


  })




  let formik = useFormik({
    initialValues: {

      "email": "",
      "password": "",

    },

    validationSchema: validation,
    onSubmit: handleRegister,
  })






  return (


    <form className="max-w-md mx-auto py-10" onSubmit={formik.handleSubmit}>

      {apiError && formik.touched.name ? <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
        {apiError}</div> : ''}





      <div className="relative z-0 w-full mb-5 group">
        <input type="email" name="email" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " required />
        <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
      </div>


      {formik.errors.email && formik.touched.email ? <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
        {formik.errors.email}</div> : ''}

      <div className="relative z-0 w-full mb-5 group">
        <input type="password" name="password" value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} id="floating_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " required />
        <label htmlFor="floating_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
      </div>


      {formik.errors.password && formik.touched.password ? <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
        {formik.errors.password}</div> : ''}




      <div className="flex justify-end">
        <button type="submit" className="cursor-pointer text-white bg-main hover:bg-main focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">{loading ? <i className='fas fa-spinner fa-spin'></i> : 'sign in'}
        </button>

      </div>

    </form>




  )
}
