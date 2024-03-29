import React from 'react'

import logo from '../assets/favicon-32x32.png'

const Footer = () => {
  return (
    <footer class="p-4 bg-white md:p-8 lg:p-10 dark:bg-gray-800">
  <div class="mx-auto max-w-screen-xl text-center">
      <a href="#" class="flex justify-center items-center text-2xl font-semibold text-gray-900 dark:text-white">
          <img src={logo} className='mx-2' alt="logo" />Alien Moda    
      </a>
      <p class="my-6 text-gray-500 dark:text-gray-400">Open-source library of over 400+ web components and interactive elements built for better web.</p>
      <ul class="flex flex-wrap justify-center items-center mb-6 text-gray-900 dark:text-white">
            <li>
              <a href="#home" class="mr-4 hover:underline md:mr-6">Home</a>
            </li>
            <li>
              <a href="#contact" class="mr-4 hover:underline md:mr-6">Contact</a>
            </li>
            <li>
              <a href="#products" class="mr-4 hover:underline md:mr-6">Products</a>
            </li>
      </ul>
      <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="#" class="hover:underline">Alien Moda</a>. All Rights Reserved.</span>
  </div>
</footer>
  )
}

export default Footer