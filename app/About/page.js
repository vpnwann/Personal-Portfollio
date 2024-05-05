

import React from 'react'
import "./About.css"
import Kss from "../About/Img.jpg"
import Image from 'next/image'
import Notification from './Notification'






export default function page() {
  return (
   <div className='About'style={{color:'white'}} >

    

    <Notification />
    
  

<div id='anim' style={{borderTop: '0.9px solid white', borderBottom: '1.9px solid white', padding:70, marginTop:50, fontFamily:'teko'}}>
    <div class="mx-auto max-w-2xl text-center" >
            <h1 class="text-7xl font-bold tracking-tight  sm:text-9xl">
                
                <span class="text-white-900">ABOUT
           </span>
            </h1>
           
          
        </div>
        </div>


<div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
  
      <div className="flex flex-col lg:flex-row">
        <div className="max-w-xl pr-16 mx-auto mb-10">
        <div class="flex flex-col justify-center max-w-xs p-6 shadow-md rounded-xl sm:px-12 dark:bg-gray-900 dark:text-gray-100" style={{marginLeft:'20px'}}>
	<Image src={Kss} alt="" class="w-32 h-32 mx-auto rounded-full dark:bg-gray-500 aspect-square" />
	<div class="space-y-4 text-center divide-y divide-gray-700">
    
		<div class="my-2 space-y-1">
      
			<h2 class="text-xl font-semibold sm:text-2xl">Namit Singh Nirwan</h2>
			<p class="px-5 text-xs sm:text-base dark:text-gray-400">Web Devloper</p>
		</div>
		<div class="flex justify-center pt-2 space-x-4 align-center">
			<a rel="noopener noreferrer" href="https://github.com/namitsingh09" aria-label="GitHub" class="p-2 rounded-md dark:text-gray-100 hover:dark:text-violet-400">
				<svg viewBox="0 0 496 512" xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 fill-current">
					<path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
				</svg>
			</a>
			
			<a rel="noopener noreferrer" href="https://twitter.com/vpnwan" aria-label="Twitter" class="p-2 rounded-md dark:text-gray-100 hover:dark:text-violet-400">
				<svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 fill-current">
					<path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
				</svg>
			</a>
			<a rel="noopener noreferrer" href="mailto:namits41@gmail.com" aria-label="Email" class="p-2 rounded-md dark:text-gray-100 hover:dark:text-violet-400">
				<svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg\" class="w-4 h-4 fill-current">
					<path d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z"></path>
				</svg>
			</a>
		</div>
	</div>
</div>

        </div>
        <div className="grid gap-10 row-gap-1 sm:grid-cols-1" style={{textAlign:'center'}}>
         
          
          <div className="max-w-full">
           
           
            <p className="text-large text-gray-600" style={{fontSize:'22px'}}>
            Hello there! I'm NamitSingh, a passionate web developer with two years of experience in the ever-evolving world of web technologies. Currently, I'm on an exciting journey of continuous learning and exploration, constantly honing my skills and pushing the boundaries of what's possible in web development.

My toolbox includes HTML, CSS, and a deep understanding of modern JavaScript frameworks like React and Next.js. I thrive on the challenges of crafting elegant and efficient solutions, whether it's building responsive layouts, optimizing performance, or integrating RESTful APIs to create dynamic web experiences.

With a keen eye for detail and a love for clean, maintainable code, I strive to deliver exceptional user experiences that not only meet but exceed expectations. Let's collaborate and bring your ideas to life on the web!
            </p>
          </div>
        </div>
      </div>
    </div>

    <section className="py-1 dark:bg-gray-800 dark:text-gray-50">
	<div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
		<div className="py-6 md:py-0 md:px-6">
			<h1 className="text-4xl font-bold">Get in touch</h1>
			<p className="pt-2 pb-4">Fill in the form to start a conversation</p>
			<div className="space-y-4">
				<p className="flex items-center">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
						<path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
					</svg>
					<span>ABUROAD, Rajasthan</span>
				</p>
				
				<p className="flex items-center">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
						<path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
						<path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
					</svg>
					<span>namits41@gmail.com</span>
				</p>
			</div>
		</div>
		<form novalidate="" className="flex flex-col py-6 space-y-6 md:py-0 md:px-6">
			<label className="block">
				<span className="mb-1">Full name</span>
				<input type="text" placeholder="You're Name" className="block w-full rounded-md shadow-sm focus:ring focus:ri focus:ri dark:bg-gray-800" />
			</label>
			<label className="block">
				<span className="mb-1">Email address</span>
				<input type="email" placeholder="Email" className="block w-full rounded-md shadow-sm focus:ring focus:ri focus:ri dark:bg-gray-800" />
			</label>
			<label className="block">
				<span className="mb-1">Message</span>
				<textarea rows="3" className="block w-full rounded-md focus:ring focus:ri focus:ri dark:bg-gray-800"></textarea>
			</label>
			<button type="button" className="self-center px-8 py-3 text-lg rounded focus:ring hover:ring focus:ri dark:bg-violet-400 dark:text-gray-900 focus:ri hover:ri">Submit</button>
		</form>
	</div>
</section>









   </div>
  )
}