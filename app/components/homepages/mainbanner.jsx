'use client'
import { Carousel, Image } from 'antd';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Main_Carousel() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/mainslider/')
      .then(response => {
        console.log("Fetched data:", response.data);
        setImages(response.data);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="md:relative mt-14 md:mt-0 bg-white">
      <Carousel autoplay>
        {images.map((img, index) => (
          <div key={index} className='bg-gradient-to-t from-slate-900 to-slate-700'>
            <Image className='w-full h-[100vh] md:h-[100vh]' src={img.SliderImage} alt={`Banner ${index + 1}`} />
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default Main_Carousel;
