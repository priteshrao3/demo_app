'use client'
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import axios from "axios";
import "./styles.css";

function TopStudentList() {

  const [students, setStudents] = useState([]);
  const [slidesPerView, setSlidesPerView] = useState(4);


  useEffect(() => {
    axios.get("http://127.0.0.1:8000/studentlist/")
      .then(response => {
        setStudents(response.data);
        setSlidesPerView(window.innerWidth < 768 ? 1 : 4);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setSlidesPerView(window.innerWidth < 768 ? 1 : 4);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="mt-10 px-2 md:px-20 bg-white">
  <h3 className="text-center text-4xl text-black font-bold">Top Student</h3>
  <br />
  <Swiper
    watchSlidesProgress={true}
    slidesPerView={slidesPerView}
    spaceBetween={40}
  >
    {students.map((student) => (
      <SwiperSlide key={student.id}>
        <div className="text-center">
          <img src={`${student.Student_Pic}`} className="mx-auto w-24 h-24 rounded-full mt-5" />

          <hr className="my-3 border-t border-gray-300" />
          <h4 className="text-lg font-semibold">{student.Student_Name}</h4>
          <p className="text-sm">{student.Student_Description}</p>
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
</div>

  );
}

export default TopStudentList;
