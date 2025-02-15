import React from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import { useEffect, useState } from 'react';
import ClipLoader from "react-spinners/ClipLoader";
import Slider from "react-slick";

export default function ProductDetail() {


    const [isLoading, setisLoading] = useState(false)
    const [productDetails, setproductDetails] = useState(null)
    const [relatedProduct, setrelatedProduct] = useState([])
    let { id, category } = useParams()

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    function getProductDetails(id) {

        setisLoading(true)
        axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
            .then(({ data }) => {
                console.log(data?.data)
                setproductDetails(data?.data)
                setisLoading(false)
            }).catch(() => {

                setisLoading(false)
            })
    }


    function getRelatedProduct(category) {

        axios.get(`https://ecommerce.routemisr.com/api/v1/products`)
            .then(({ data }) => {

                let allProduct = data.data

                let related = allProduct.filter((product) => product.category.name == category)

                setrelatedProduct(related)


                console.log(related);


                console.log(allProduct);



            })


    }



    useEffect(() => {
        getProductDetails(id)
        getRelatedProduct(category)
        return () => {

        }
    }, [id, category])


    if (isLoading) {
        return <div className="flex min-h-screen justify-center items-center">

            <ClipLoader />
        </div>
    }

    return (
        <>
            <div className="container p-10">

                <div className="grid grid-cols-12 place-items-center">

                    <div className="col-span-12 md:col-span-4">


                        {productDetails?.images.length > 1 ?
                            <Slider {...settings} className='w-[300px]'>
                                {productDetails?.images.map((src) => <img src={src} alt={productDetails?.title} />)}
                            </Slider> : <img src={productDetails?.imageCover} alt={productDetails?.title} />}

                    </div>

                    <div className="col-span-12 md:col-span-8">

                        <h2 className='text-lg text-main font-bold'>{productDetails?.title}</h2>
                        <p className='text-gray-700'>{productDetails?.description}</p>
                        <div className="flex justify-between items-center">
                            <span>{productDetails?.price}EGP</span>
                            <span>{productDetails?.ratingsAverage}<i className='fa fa-star text-yellow-300'></i></span>
                        </div>

                        <button className='btn w-full rounded bg-main text-white cursor-pointer h-9'>Add to cart</button>
                    </div>


                </div>

            </div>


            {/* ****************related ******************** */}

            <div className="container p-10">

                <div className="grid xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-4">

                    {relatedProduct.map((product) =>

                        <Link to={`/product_details/${product.id}/${product.category.name}`}>
                            <div className="product shadow-xl p-2 overflow-hidden">

                                <img src={product.imageCover} alt={product.title} className='w-full' />
                                <h2>{product.title.split(" ").slice(0, 2).join()}</h2>
                                <span className='text-main font-bold'>{product.category.name}</span>
                                <div className="flex justify-between items-center">
                                    <span>{product.price}EGP</span>
                                    <span>{product.ratingsAverage}<i className='fa fa-star text-yellow-300'></i></span>
                                </div>

                                <button className='btn'>Add to cart</button>
                            </div>
                        </Link>

                    )}
                </div>

            </div>

        </>
    )
}
