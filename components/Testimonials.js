import React, { useState } from 'react'
import "../index.css"

const Testimonials = () => {
    const [currentIndex , setCurrentIndex] = useState(0);
    const testimonials = [
        {
            quote:"lalew yechemereletal lelelew kalew yewesedebetal",
            author:"bible",

        },
        {
            quote: "dengayem betehon telekun dengay hun",
            author: "vice president of DDU",

        },
        {
            quote:"if you can't beat them join them",
            author:"the founder and ceo of 'LYUnetics'",
        }
    ]
    const handlenext =()=>{
        setCurrentIndex(
            (currentIndex + 1) %testimonials.length);
    };
    const handleprev =()=>{
        setCurrentIndex(
            (currentIndex + testimonials.length -1) %testimonials.length);
    };
  return (
    <div className='testimonials'>
        <div className="testimonials-quote">
            {testimonials[currentIndex].quote}

        </div>
        <div className="testimonials-author">   
            {testimonials[currentIndex].author}
        </div>

        <div className='testimonials-nav'>
        <button onClick={handleprev}>prev</button>
            <button onClick={handlenext}>next</button>
            
        </div>

    </div>
  )
}

export default Testimonials