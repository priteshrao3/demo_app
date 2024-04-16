import React from 'react'

function FotterComponent() {
  return (
      
  <footer className="bg-black text-white p-4 md:px-[10em] text-center">
    <div className="md:flex flex-col md:flex-row justify-between items-center">
      {/* First section */}
      <div className="order-1 md:order-none md:w-1/2 md:text-left mb-4 md:mb-0">
        <h3 className="text-3xl md:text-lg font-bold md:mt-5">KARO ABHAYASS</h3>
        <p className='md:mt-0 mt-5'>112. ELECTRONIC CITY</p>
        <p>BANGALORE, INDIA</p>
      </div>

      {/* Second section */}
      <div className="order-2 md:w-1/2 md:text-right">
        <p>SOME TEXT ABOUT SOMETHING <br/>AND THEN SOME OTHER THING</p>
      </div>
    </div>

    {/* Third section */}
    <div className="mt-4 md:mt-0 md:flex justify-end">
      <button className="bg-white hover:bg-blue-600 text-black px-4 py-2 rounded mr-2">Contact Us</button>
      <button className="bg-white hover:bg-green-600 text-black px-4 py-2 rounded">About</button>
    </div>
  </footer>

  )
}

export default FotterComponent
