import React from 'react'
import { FaUser, FaShoppingCart } from 'react-icons/fa';
import MyDrower from './drower';

function NavBar() {
  return ( 
      <nav class="bg-white border-gray-200 dark:bg-gray-900 fixed z-10 w-full">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">

          <div className="flex items-center space-x-3 rtl:space-x-reverse">
            <MyDrower className=""/>
            <a href="" className="md:self-center text-2xl font-semibold whitespace-nowrap dark:text-white ml-auto">KARO ABHAYAAS</a>
          </div>




          <div class="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a href="#" class="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">JOIN US</a>
              </li>
              <li>
                <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Classes</a>
              </li>
              <li>
                <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Products</a>
              </li>
              <li>
                <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About Us</a>
              </li>
              {/* User Icon */}
              <li className="flex items-center">
                <FaUser className="text-xl text-gray-900 dark:text-white cursor-pointer" />
              </li>
              {/* Cart Icon */}
              <li className="flex items-center">
                <FaShoppingCart className="text-xl text-gray-900 dark:text-white cursor-pointer" />
              </li>
            </ul>
          </div>
          
        </div>
      </nav>
  )
}

export default NavBar
