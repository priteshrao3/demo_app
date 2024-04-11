'use client'
import Image from "next/image";
import NavBar from "./components/homepages/navigationbar";
import Main_Carousel from "./components/homepages/mainbanner";
import FotterComponent from "./components/homepages/fotter";
import TopStudentList from "./components/homepages/topstudentlist";
import StudentList from "./components/homepages/studenstlist";

export default function Home() {
  return (
    <div className='flex flex-col bg-white'>
      
      <NavBar />

      <Main_Carousel />

      <TopStudentList />

      <StudentList />

      <FotterComponent />

    </div>
  );
}
