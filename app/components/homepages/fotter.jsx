import React from 'react'

function FotterComponent() {
  return (
    <div>
      

      <footer className="bg-black text-white p-4 md:px-[10em]">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-lg font-bold">KARO ABHAYASS</h3>
          <p>112. ELECTRONIC CITY</p>
          <p>BANGALORE, INDIA</p>
        </div>
        <div>
          <p>SOME TEXT ABOUT SOMETHING <br/>AND THEN SOME OTHER THING</p>
        </div>
      </div>
      <div className="mt-4 flex justify-end">
        <button className="bg-white hover:bg-blue-600 text-black px-4 py-2 rounded mr-2">Contact Us</button>
        <button className="bg-white hover:bg-green-600 text-black px-4 py-2 rounded">About</button>
      </div>
    </footer>


    </div>
  )
}

export default FotterComponent
