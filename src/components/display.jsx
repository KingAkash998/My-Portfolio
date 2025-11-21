/* eslint-disable react-hooks/rules-of-hooks */
 import {useGSAP} from '@gsap/react'
 import gsap from "gsap";
import Words from '../../Constants/constants';

 const display = () => {
  useGSAP(()=>{
    gsap.to('.up',
      {
        y : -5,
        opacity : 1,
        stagger : 0.2,
        duration : 1,
        ease : "power2.inOut",
      },
    )
  }, [])
  return (
    <div className="md:p-3 md:ml-3.5 p-2 ">
      {/* Right Content */}
      <div className=" relative md:top-50 top-15 z-10">
          <h1 className="text-white md:text-3xl  text-xl up  opacity-0">
            We turn concepts into
            <span className="absolute left-50  h-6 overflow-hidden top-1 border  md:left-75 md:top-3 rounded p-1 border-amber-600 up">
              {Words.map((word) => (
                <p className=" text-2xl  md:text-3xl text-amber-500 " id="word" key={word.content}>
                  {word.content}
                </p>
              ))}
            </span>
          </h1>
          <h1 className="text-white md:text-3xl text-xl relative  up bottom-1 opacity-0">
            We shape designs, models,
            and digital experiences.
          </h1>
          <p className="relative up  opacity-0">
            Hi I am Salman Safi a web developer. <br />
            We innovate — all in one place.
            <br /> Where ideas take form — in design, models, and more.
          </p>
        <a href="#Projects">
          <button className="top-2 relative bg-white Cbtn up  text-black font-semibold  px-3 py-2 rounded flex-cener opacity-0">
          See My Work <span className="bg-white relative rounded-full px-4 py-1 text-black text-xl ml-1 ">
            <span className="btn absolute right-3">↓</span>
          </span>
        </button>
        </a>
      </div>

      {/* Left Content */}
      <div className="absolute right-0 z-0 md:top-15 top-60 ">
        <img src="../../models/laptop.jpg" alt="hero" className=" relative h-110 top-4  w-screen md:w-180 md:h-135 rounded right-0 up opacity-0" />
      </div>
    </div>
  );
};

export default display;