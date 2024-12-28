import React from 'react'
import { assets } from '../assets/frontend_assets/assets'

const Footer = () => {
    return (
        <div>
            <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
                <div className="">
                    <img src={assets.logo} className='mb-5 w-32' alt="" />
                    <p className='w-full md:w-2/3 text-gray-600'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam fugit, provident facilis recusandae asperiores odit ut cupiditate incidunt at magni!
                    </p>
                </div>
                <div className="">
                    <p className='text-xl font-medium mb-5'>Company</p>
                    <ul className='flex flex-col gap-1 text-gray-600'>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Delivery</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div className="">
                    <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                    <ul className='flex flex-col gap-1 text-gray-600'>
                        <li>+1-212-456</li>
                        <li>contact@onlinestore.com</li>
                    </ul>
                </div>
            </div>
            <hr />
            <p className='py-5 text-sm text-center'>Copyright 2025@ codewareitpvt@onlinestore.com - All Right Reserved.</p>
        </div>
    )
}

export default Footer