import axios from 'axios';
import React, { createContext, useState } from 'react'
import { useEffect } from 'react';

export const cartContext = createContext();

export default function CartContextProvider({ children }) {

    const token = localStorage.getItem('userToken')

    const [products, setproducts] = useState(null);
    const [totalCartPrice, settotalCartPrice] = useState(null)
    const [cartId, setcartId] = useState(null)
    const numberOfCartItems = products?.length;

    console.log(cartId);
    
    function resetValues(){

        setproducts(null);
        settotalCartPrice(0);
        setcartId(null);

    }
    
    async function addProductToCart(productId) {

        const res = await axios.post('https://ecommerce.routemisr.com/api/v1/cart',
            {

                productId,

            },
            {

                headers: {
                    token: localStorage.getItem('userToken')
                }
            }
        )
            .then(function (res) {
                // console.log('res', res.data.data.products);
                // console.log('res', res.data.data.totalCartPrice);

                // setproducts(res.data.data.products);
                // settotalCartPrice(res.data.data.totalCartPrice)

                setcartId(res.data.cartId) 
                getUserCart()    //due to back-end error      bad solve


                return true
            })
            .catch(function (error) {
                console.log(error);

                return false
            })

        return res;
    }


    function getUserCart() {

        axios.get('https://ecommerce.routemisr.com/api/v1/cart', {
            headers: {
                token
            }
        }

        )
            .then(function (res) {

                console.log('products', res.data.data.products);
                console.log('price', res.data.data.totalCartPrice
                )

                setcartId(res.data.cartId) 
                setproducts(res.data.data.products);
                settotalCartPrice(res.data.data.totalCartPrice)

                    ;
            })
            .catch(function (error) {
                console.log(error);

            })
    }


    function updateCount(id , newCount){

        axios.put(`https://ecommerce.routemisr.com/api/v1/cart/${id}` , 
            {
                "count": newCount
            },
            {
                headers:{
                    token,
                }
            }
        )
        .then(function(res){
            setproducts(res.data.data.products);
            settotalCartPrice(res.data.data.totalCartPrice)
        })
        .catch(function(error){
            console.log(error);
            
        })
    }

  async  function removeElement(id){
     const res = await  axios.delete(`https://ecommerce.routemisr.com/api/v1/cart/${id}`,
            {
                headers:{
                    token,
                }
            }
        )
        .then(function(res){
            setproducts(res.data.data.products);
            settotalCartPrice(res.data.data.totalCartPrice)

            return true
        })
        .catch(function(error){
console.log(error);
return false
        })

        return res
    }


    useEffect(() => {
        if (token) {

            getUserCart()
        }

    }, [token])

    console.log(numberOfCartItems);



    return <cartContext.Provider value={{

        addProductToCart,
        numberOfCartItems,
        products,
        totalCartPrice,
        updateCount,
        removeElement,
        cartId,
        resetValues,


    }}>

        {children}
    </cartContext.Provider>

}
