'use client'
import { useEffect, useState } from 'react';
import axios from 'axios';

const StudentList = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/studentlist/')
      .then(response => {
        setCards(response.data);
      })
      .catch(error => {
        console.error('Error fetching card data:', error);
      });
  }, []);

  return (
    <div className='mt-20'>
      <h3 className="text-center text-4xl text-black font-bold">Reviews</h3>
    <div className="grid grid-cols-1 md:grid-cols-4 gap-2 md:px-28 mb-10  bg-white py-10">
      
      {cards.map(card => (
        <div key={card.id} className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">{card.Student_Name}</h5>
          </a>
          <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">{card.Student_Description}</p>
         
        </div>
      ))}
    </div>
    </div>
  );
};

export default StudentList;
