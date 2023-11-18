import React from 'react';
import reviews from './data';
import Testimonial from "./components/Testimonial.js"
const App =()=> {
  return (
    <div className="flex flex-col w-[100vw] min-h-[100vh] justify-center items-center bg-gray-200">
       <div className="text-center">
        <h1 className="text-4xl font-bold">Our Testimonmials</h1>
        <div className=" bg-violet-500 h-[4px] w-1/5 mt1 mx-auto"   ></div>
        <Testimonial reviews   = {reviews}/>
       </div>
    </div>
  );
}

export default App;
