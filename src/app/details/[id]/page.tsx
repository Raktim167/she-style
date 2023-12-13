"use client";

// import { IProduct } from '@/components/ProductCard';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import Data from "@/utils/productData.json";
import Link from 'next/link';
import Image from 'next/image';
import { AiFillStar, AiOutlineShoppingCart, AiOutlineStar } from 'react-icons/ai';
import { addToCart } from "@/redux/features/cartSlice";
import { useAppDispatch } from "@/redux/hooks";
import { FaFacebookSquare , FaTwitter, FaInstagram} from "react-icons/fa";



export interface IProduct {
    id: number;
    img: string;
    name: string;
    price: number;
    sale: boolean | undefined;
  }

const DetailPage = ({id, img, name, price, sale }: IProduct) => {
    const params = useParams();
    const [productData, setProductData] = useState<any>();
    const dispatch = useAppDispatch()
    

    useEffect(()=>{
        const id = params.id;
        const getProductData = Data.filter((item: any)=>
         item.id.toString() === id)[0];
         console.log("qqq",getProductData);
         setProductData(getProductData);
    },[params.id]);

    const addProductToCart = (e: React.FormEvent) => {
        e.stopPropagation()
        console.log("aaa",id, name, img, price)
        const payload = {
            id: productData.id, name: productData.name, img: productData.img, price: productData.price, quantity: 1
        }
        dispatch(addToCart(payload))
    }

  return (
    <div className='pt-8'>
        <div className='bg-gray-100 py-4'>
            <div className='container flex gap-4 items-center text-gray-500'>
                <Link href="/" className="cursor-pointer hover:text-red-600">
                    Home
                </Link>
                <div className='w-[30px] h-[2px] bg-gray-400'/>
                <p>{productData?.name}</p>
            </div>
        </div>

        <div className="container pt-8">
            <div className='grid md:grid-cols-2 gap-16'>
                <div>
                    <Image 
                        className="w-full h-full"
                        src={productData?.img}
                        width={1000}
                        height={1200}
                        alt={productData?.name}
                    />
                </div>

                <div className='text-[#161616]  space-y-4'>
                    <div className='flex items-center text-red-600'>
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiOutlineStar />
                        <p className='text-gray-400 text-[14px] ml-2 
                                hover:text-red-600 cursor-pointer'>
                            (31 reviews)
                        </p>
                    </div>

                    <div className='text-[#161616]  space-y-6'>
                        <h2 className='text-3xl text-red-600 font-semibold'>{productData?.name}</h2>
                        <p className='text-xl text-gray-800 font-semibold'>Rs. {productData?.price}.00</p>
                    </div>

                    <p className='text-gray-500 text-[14px]'>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores praesentium sed, incidunt amet veritatis quidem itaque eius voluptatem. Consectetur voluptatem excepturi assumenda distinctio, sint expedita rerum voluptatibus officiis exercitationem ut facilis esse quis veniam labore eos amet necessitatibus natus fugiat ipsam dolores! Repellat ut optio fugiat doloribus architecto facilis iusto.
                    </p>
                    <p className='text-gray-500 text-[14px]'>
                        Asperiores praesentium sed, incidunt amet veritatis quidem itaque eius voluptatem. Consectetur voluptatem excepturi assumenda distinctio, sint expedita rerum voluptatibus officiis exercitationem ut facilis esse quis veniam labore eos amet necessitatibus natus fugiat ipsam dolores! Repellat ut optio fugiat doloribus architecto facilis iusto.
                    </p>

                    <p className='text-red-600 text-[14px] font-bold'>
                        IN STOCK !! Hurray
                    </p>

                    <button 
                        className='uppercase bg-red-600 py-4 px-8 rounded-lg 
                          text-white flex gap-2 items-center hover:bg-black'
                        onClick={addProductToCart}
                    >
                        <AiOutlineShoppingCart className="text-[24px]" />
                        Add to cart
                    </button>

                    <div className='w-[30px] h-[2px] bg-gray-400'/>
                    {productData?.comp ?
                            <div> Company Name: {productData?.comp}</div>
                            : null    
                    }
                    
                    <div className='capitalize'>
                        Category: {productData?.category[0]}
                    </div>
                    <div className='flex gap-1 items-center capitalize'>
                        Tags:{" "}
                        {productData?.category?.map((item: any)=>{
                            <div key={item}>{item}</div>
                        })}
                    </div>
                    <div className='w-[30px] h-[2px] bg-gray-400'/>

                    <div className='flex gap-1 items-center pt-4'>
                        SHARE:{" "}
                        <div className='flex gap-2 items-center text-[18px]'>
                            <FaFacebookSquare /> <FaTwitter /> <FaInstagram />
                        </div>
                    </div>


                </div>               
            </div>
        </div>
    </div>
  )
}

export default DetailPage