import React, { useContext, useState } from 'react'
import { useEffect } from 'react';
import axios from 'axios';
import ClipLoader from "react-spinners/ClipLoader";
import { Link } from 'react-router-dom';
import { WishListContext } from '../../Context/WishListContext';
import { cartContext } from './../../Context/CartContext';
import { toast } from 'react-toastify';

export default function RecentProduct() {

    let { WishList, addToWishList, removeFromWishlist, inWishList } = useContext(WishListContext)
    const {addProductToCart} = useContext(cartContext)

    


    const [recentProduct, setrecentProduct] = useState([])
    const [isLoading, setisLoading] = useState(false)

    const getRecentProduct = () => {

        setisLoading(true)
        axios.get('https://ecommerce.routemisr.com/api/v1/products')
            .then(({ data }) => {

                console.log(data?.data),

                    setrecentProduct(data?.data)

                setisLoading(false)
            })
            .catch(({ data }) => {

                setisLoading(false),
                    console.log(data?.data)
            })

    }

    async function handleAddProduct(id){

       const res = await addProductToCart(id);

       if (res) {
        toast.success('Added to cart' , {position: 'top-right'})
       
        
       }else{
        toast.error('Failed', {position: 'top-right'})
       }
    }

    useEffect(() => {

        getRecentProduct();
        return () => {

        }
    }, [])



    if (isLoading) {
        return <div className="flex min-h-screen justify-center items-center">

            <ClipLoader />
        </div>
    }



    return (
        <div className="container p-10">

            <div className="grid xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-4">

                {recentProduct.map((product) => {

                    const isFavorite = inWishList(product.id); 

                   

                    return (
                        <div className="relative">
                            <Link key={product.id} to={`/product_details/${product.id}/${product.category.name}`}>
                                <div className="product shadow-xl p-2 overflow-hidden">

                                    <img src={product.imageCover} alt={product.title} className='w-full' />
                                    <h2>{product.title.split(" ").slice(0, 2).join()}</h2>
                                    <span className='text-main font-bold'>{product.category.name}</span>
                                    <div className="flex justify-between items-center">
                                        <span>{product.price}EGP</span>
                                        <span>{product.ratingsAverage}<i className='fa fa-star text-yellow-300'></i></span>
                                    </div>

                                    <button onClick={(e)=>{
                                        e.preventDefault();
                                        handleAddProduct(product.id)}} className='btn cursor-pointer'>Add to cart</button>
                                </div>
                            </Link>

                            <button className='absolute right-2 bottom-18 text-xl' onClick={() => { isFavorite ? removeFromWishlist(product.id) : addToWishList(product) }}>
                                <i className={`fas fa-heart cursor-pointer ${isFavorite ? `text-red-500` : `text-black`}`}></i>
                            </button>

                        </div>

                    )



                })}
            </div>

        </div>
    )
}
