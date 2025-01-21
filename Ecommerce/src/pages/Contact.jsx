import React from 'react'
import { assets } from '../assets/frontend_assets/assets'
import Title from '../components/Title'

const Contact = () => {
  return (
    <div>

      <div className="text-center text-2xl pt-10 border-t">
        <Title t1 ={'CONTACT'} t2={"US"} />
      </div>
      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28">
        <img className='w-full md:max-w-[480px]' src={assets.contact_img} alt="" />
        <div className="flex flex-col justify-center items-start gap-6">
          <p className="font-semibold text-xl text-gray-600">Our Store</p>
          <p className="text-gray-500">IT Park <br />Dehradun</p>
          <p className="text-gray-500">+91 9837 218 345 <br />codewareit@gmail.com</p>
          <p className="font-semibold text-xl text-gray-600">Careers at Codeware</p>
          <p className="text-gray-500">Learn here Earn Anywhere</p>
          <button className='border border-black px-8 py-4 hover:text-white hover:bg-black transition-all duration-500'>Explore Jobs</button>

        </div>
      </div>
    </div>
  )
}

export default Contact