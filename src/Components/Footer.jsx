import React from 'react';
import Logo from "../assets/logo.png";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className='h-[60vh] w-full bg-[#171b2a] flex flex-col text-white justify-between overflow-hidden'>
        <div className='flex justify-between w-full'>
          <div className='h-full w-[18%]'>
            <img src={Logo} alt='' className='h-24 px-16 mt-14' />
            <p className='ml-14 mt-5 text-xl'>Connecting Dreams To Reality.</p>
            <p className='w-[80%] ml-14 text-xl'>Village - Parewpur, Post - Dharshawa, District - Shrawasti, Uttar Pradesh, 271835</p>
            <button className='ml-14 mt-5 text-xl hover:text-yellow-500'>+91 7860413021</button>
            <button className='ml-14 mt-5 text-xl hover:text-yellow-500'>raju800499@gmail.com</button>
            <div className='flex gap-16 mt-10'>
              <div className='ml-20'>
                <button>
                  <FaFacebookF size={20} color='white' />
                </button>
              </div>
              <div>
                <button>
                  <FaTwitter size={20} color='white' />
                </button>
              </div>
              <div>
                <button>
                  <FaLinkedinIn size={20} color='white' />
                </button>
              </div>
              <div>
                <button>
                  <FaYoutube size={20} color='white' />
                </button>
              </div>
            </div>
          </div>
          <div className='h-full w-[20%] mr-[2%] mt-28'>
            <p className='text-xl font-monospace'>Construction Solution</p>
            <ul className='mt-6'>
              <li>Excavation Work</li>
              <li>Brick Work</li>
              <li>Concreting work</li>
            </ul>
          </div>
          <div className='relative right-24 top-20 text-xl'>
            <h2>Customer Care</h2>
            <p className='mt-2'>For any queries, feel free to contact us:</p>
            <p className='mt-1'>Phone: +91 9876543210</p>
            <p className='mt-1'>Email: support@company.com</p>
            <p className='mt-1'>Available: Mon-Fri, 9 AM - 6 PM</p>
          </div>
        </div>
        <div className='w-full text-center py-4 bg-[#121722] '>
          <p className='text-sm mr-[70%]'>&copy; {new Date().getFullYear()} @ Copyright 2024. All Rights Reserved Designed by CssFounder.com</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
