"use client"
import React from 'react'
import Notification from '../About/Notification'
import Socio from './Socio'
import Image from 'next/image'
import Abu from "../Work/abu.png"
import Nike from "../Work/nike.png"
import Port from "../Work/port.png"
import Ports from "../Work/pet.png"

import { useState } from 'react'
import Reacts from './Reactjs/React'
export default function Worke() {
    const [activeTab, setActiveTab] = useState('London');

    const handleTabClick = (cityName) => {
      setActiveTab(cityName);
    };
  
      
  return (
  <div className='headers'>
  




  <div id='anim' style={{borderTop: '0.9px solid white', borderBottom: '1.9px solid white', padding:70, marginTop:50, fontFamily:'teko'}}>
    <div class="mx-auto max-w-2xl text-center" >
            <h1 class="text-7xl font-bold tracking-tight  sm:text-9xl">
                
                <span class="text-white-900">WORK
           </span>
            </h1>
           
          
        </div>
        </div>




    <div className='item2'>
<p  id='vv' style={{fontSize:'20px', padding:'10px', width:'100%', textAlign:'center', marginTop:'30px' ,  height:'170px', fontFamily:'Rajdhani'}}>A collection of weird websites, niche data projects, and CSS experiments.  and lately I’ve been working on Personal Projects and Builiding in Public which are both pretty fun.</p>

</div>



<div className="container mx-auto justify-center px-4 py-6">
      

      <div className="tab overflow-hidden flex justify-center  max-w-full  bg-black-200">
        <button
          className={`tablinks  px-4 py-2 transition duration-300 text-lg ${
            activeTab === 'London' ? 'bg-gray-300' : 'bg-inherit hover:bg-gray-400'
          }`}
          onClick={() => handleTabClick('London')}
        >
          London
        </button>
        <button
          className={`tablinks px-4 py-2 transition duration-300 text-lg ${
            activeTab === 'Paris' ? 'bg-gray-300' : 'bg-inherit hover:bg-gray-400'
          }`}
          onClick={() => handleTabClick('Paris')}
        >
          Paris
        </button>
        <button
          className={`tablinks px-4 py-2 transition duration-300 text-lg ${
            activeTab === 'Tokyo' ? 'bg-gray-300' : 'bg-inherit hover:bg-gray-400'
          }`}
          onClick={() => handleTabClick('Tokyo')}
        >
          Tokyo
        </button>
      </div>

      <div
        id="London"
        className={`tabcontent p-4   ${
          activeTab === 'London' ? 'block' : 'hidden'
        }`}
      >
        <a href="https://venerable-chaja-5625ef.netlify.app/"
                class="group relative w-60 flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
                <Image src={Abu} loading="lazy" alt="Photo by Minh Pham" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                <div
                    class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-80">
                </div>

                <span class="relative ml-4 mb-3 inline-block text-sm text-white  md:ml-5 md:text-lg">ABUSTORE</span>
                <button class="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100" onclick="navigateToLink('/About')">
               
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
  <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
</svg>

            </button>
            <div class="absolute inset-0 bg-gradient-to-b from-black opacity-0 group-hover:opacity-40"></div>
            </a>
      </div>

      <div
        id="Paris"
        className={`tabcontent p-4 border border-gray-300 border-t-0 ${
          activeTab === 'Paris' ? 'block' : 'hidden'
        }`}
      >
        <h3 className="text-xl font-bold mb-2">Paris</h3>
        <p>Paris is the capital of France.</p>
      </div>

      <div
        id="Tokyo"
        className={`tabcontent p-4 border border-gray-300 border-t-0 ${
          activeTab === 'Tokyo' ? 'block' : 'hidden'
        }`}
      >
        <h3 className="text-xl font-bold mb-2">Tokyo</h3>
        <p>Tokyo is the capital of Japan.</p>
      </div>
    </div>





<div  id='xcx' class="bg-black dark:bg-black-800 h-screen  py-6 sm:py-8 lg:py-12">
     
<div class="grid grid-cols-1 gap-3 sm:grid-cols-3 md:gap-3 xl:gap-3" style={{padding:'10px', margin:'20px'}}>
            
            <a href="https://venerable-chaja-5625ef.netlify.app/"
                class="group relative w-200 flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
                <Image src={Abu} loading="lazy" alt="Photo by Minh Pham" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                <div
                    class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-80">
                </div>

                <span class="relative ml-4 mb-3 inline-block text-sm text-white  md:ml-5 md:text-lg">ABUSTORE</span>
                <button class="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100" onclick="navigateToLink('/About')">
               
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
  <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
</svg>

            </button>
            <div class="absolute inset-0 bg-gradient-to-b from-black opacity-0 group-hover:opacity-40"></div>
            </a>
           
            <a href="https://nikeclone007.netlify.app"
                class="group relative  w-30 flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-1 md:h-80">
                <Image src={Nike} loading="lazy" alt="Photo by Magicle" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                <div
                    class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                </div>

                <span class="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Nike Page</span>
                <button class="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100" onclick="navigateToLink('/About')">
               
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
  <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
</svg>

            </button>
            <div class="absolute inset-0 bg-gradient-to-b from-black opacity-0 group-hover:opacity-40"></div>
            </a>
           
            <a href="https://namitsingh.netlify.app"
                class="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-1 md:h-80">
                <Image src={Port} loading="lazy" alt="Photo by Martin Sanchez" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                <div
                    class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-500 via-transparent to-transparent opacity-50">
                </div>

                <span class="relative ml-2 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">LandingPage</span>
                <button class="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100" onclick="navigateToLink('/About')">
               
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
  <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
</svg>

            </button>
            <div class="absolute inset-0 bg-gradient-to-b from-black opacity-0 group-hover:opacity-40"></div>
            </a>
           
            <a href="https://abupets.netlify.app"
                class="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
                <Image src={Ports} loading="lazy" alt="Photo by Lorenzo Herrera" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                <div
                    class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                </div>

                <span class="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">ABUPETS</span>
                <button class="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100" onclick="navigateToLink('/About')">
               
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
  <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
</svg>

            </button>
            <div class="absolute inset-0 bg-gradient-to-b from-black opacity-0 group-hover:opacity-40"></div>
            </a>
             {/* <a href="#"
                class="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
                <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpaperaccess.com%2Ffull%2F2772922.png&f=1&nofb=1&ipt=a8b08766b18a7746ab3d09aab44197f05eaf019dfaea5e0a00dcfec1206b534a&ipo=images" loading="lazy" alt="Photo by Lorenzo Herrera" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                <div
                    class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                </div>

                <span class="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Lorem ipsum</span>
                <button class="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100" onclick="navigateToLink('/About')">
               
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
  <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
</svg>

            </button>
            <div class="absolute inset-0 bg-gradient-to-b from-black opacity-0 group-hover:opacity-40"></div>
            </a>
             */} 
            
            
        </div>
        <footer class="footer">
   <div class="text-center">
    
  {/* <a href="#" class="flex items-center justify-center mb-5 text-2xl font-semibold text-gray-900">
        <img src="" class="h-12 mr-3 sm:h-9" alt=" " />
		VpnWan
    </a> */} 

    <span class="block text-sm text-center text-gray-500">
		Built with 
        <a 
			class="text-purple-600 hover:underline"></a> Love
            <a
			href="https://twitter.com/vpnwan" class="text-purple-600 hover:underline"> Namit
			Singh
        </a>.
	</span>

    <Socio />
</div>
  </footer>
        </div>

        












  </div>
  )
}
