import React, { useRef, useEffect } from 'react';
import laptopImage from '../assets/image/laptop.jpg';
import watchImage from '../assets/image/watch.jpg'
import hackerImage from '../assets/image/hacker.jpg'
import './images.css';

const Images = ({ timeline, ease }) => {
  let laptopRef = useRef(null);
  let watchRef = useRef(null);
  let hackerRef = useRef(null);

  useEffect(() => {
    timeline
      .from(laptopRef, 1.2, {
        y: 1200,
        ease: ease,
        opacity: 0,
      }, "-=1")
      .from(laptopRef, 2, {
        scale: 1.6,
        ease: ease,
      }, "-=1");
    
    timeline
      .from(watchRef, 1.2, {
        y: 1200,
        ease: ease,
        opacity: 0,
      }, "-=1")
      .from(watchRef, 2, {
        scale: 1.6,
        ease: ease,
      }, "-=1");
    
    timeline
      .from(hackerRef, 1.2, {
        y: 1200,
        ease: ease,
        opacity: 0,
      }, "-=1")
      .from(hackerRef, 2, {
        scale: 1.6,
        ease: ease,
      }, "-=1");
  }, []);

  return (
    <div>
      <div className="images">
        <div className="box1" ref={(el) => (laptopRef = el)}>
          <img src={laptopImage} alt="" />
        </div>
        <div className="box2" ref={(el) => (watchRef = el)}>
        <img src={watchImage} alt="" />
        </div>
        <div className="box3" ref={(el) => (hackerRef = el)}>
        <img src={hackerImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Images;
