import { createContext, useEffect, useState } from "react";
import axios from "axios";



export const WishListContext = createContext();

export default function WishListProvider({ children }) {

    const [WishList, setWishList] = useState([])

    let headers = {
        token: localStorage.getItem('userToken')
    }


    const getWishList = async () => {

        try {
            const { data } = axios.get('https://ecommerce.routemisr.com/api/v1/wishlist', { headers: headers })
            setWishList(data?.data || [])
            localStorage.setItem('wishList' ,JSON.stringify(data?.data || []) )
        } catch (error) {
            console.log(error);

        }
    }



    const addToWishList = async (product) => {

        try {

            await axios.post('https://ecommerce.routemisr.com/api/v1/wishlist', { productId: product.id }, { headers:headers })
            let updatedList = [...WishList, product]
            setWishList(updatedList)
            localStorage.setItem('wishList' ,JSON.stringify(updatedList))

        } catch (error) {
            console.log(error);


        }

    }


    const removeFromWishlist = async (productId) => {

        try {
            await axios.delete(`https://ecommerce.routemisr.com/api/v1/wishlist/${productId}`, { headers:headers })
            let filteredProduct = WishList.filter((item) =>  item.id !== productId )
            setWishList(filteredProduct)
            localStorage.setItem('wishList' ,JSON.stringify(filteredProduct))
        } catch (error) {
            console.log(error);

        }

    }


const inWishList = (productId) => {

    return WishList.some((item) => item.id == productId)
}


useEffect(() => {

    const stored = localStorage.getItem('wishList')
    if (stored) {
        setWishList(JSON.parse(stored))
    }else{

        getWishList()
    }

  return () => {
    
  }
}, [])


    return <WishListContext.Provider value={{WishList , addToWishList , removeFromWishlist , inWishList}}>

        {children}

    </WishListContext.Provider>

}