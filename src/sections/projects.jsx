/* eslint-disable react-hooks/rules-of-hooks */
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useState } from "react";

gsap.registerPlugin(ScrollTrigger);

const projects = () => {
  useState();
  let screenSize = "";
  screen.width > 768 ? screenSize = '-380%' : screenSize = '-100%' ;


  useGSAP(() => {
    gsap.to(".lineHeight", {
      transformOrigin: "top bottom",
      scaleY: 540,
      scrollTrigger: {
        trigger: ".lineHeight",
        start: "top 80%",
        end: `bottom ${screenSize}`,
        scrub: true,
      },
    });

    const projects = document.querySelectorAll("._left");
    projects.forEach((project)=>{
      gsap.to(
      project,
      {
        opacity: 1,
        left: 0,
        duration : 1,
        stagger : 0.1,
        scrollTrigger: {
        trigger: project,
        start: "top 80%",
        end: "30% center",
        scrub: true,
      },
      }
    );
    })
    const explinations = document.querySelectorAll("._opacity-1");
    explinations.forEach((explination)=>{
      gsap.to(explination,{
        opacity: 1,
        scrollTrigger: {
        trigger: explination,
        start: "top bottom",
        end: "bottom 70%",
        scrub: true,
      }
      })
    })
    
  });
  return (
    <section
      id="Projects"
      className="relative   md:h-300 h-580 ">
      {/* Top Header */}
      <div className="flex-center top-3 relative flex-col">
        <h1 className="flex-center text-2xl text-white md:text-4xl pt-1">
          PROJECTS
        </h1>
        <span
          className="h-1 w-30 md:w-48
        rounded bg-yellow-500"></span>
      </div>
      {/*  content */}
      <div className="relative flex flex-col gap-5 top-10 left-10 md:pr-41">
        {/* Snake Game goes here */}
        <div className="flex gap-5  flex-wrap justify-around">
          <div className="relative _left right-50 opacity-0 h-50 w-70  rounded-2xl ml-8">
            <img
              src="../../models/Snake-Game.png"
              className="h-49 rounded w-full  top-px relative"
            />
          </div>
          
          <span className="absolute top-4 left-11 z-10 lineColor rounded-full scale-120 p-2 md:relative md:h-9 md:w-9 h-9 w-9 line flex-center opacity-0 _opacity-1 ">
            🐍
          </span>
          <div className="relative h-50 w-70 border border-amber-500 ml-8 rounded opacity-0 _opacity-1">
            <h1 className="text-white font-bold text-2xl text-center">
              Snake Game
            </h1>
            <span
              className="h-1 w-30 absolute left-20
              rounded bg-amber-600"></span>
            <ul className="flex flex-col ml-3 text-[#ccc] mt-2">
              <li>This is a simple Snake game.</li>
              <li>Created with pure HTML,CSS & JS.</li>
              <li>
                The game has some features like,
                <ul className="ml-5 font-semibold">
                  <li>Background Music</li>
                  <li>Move Sound</li>
                  <li>Eat Sound.</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        {/* To Do List App goes here */}
        <div className="flex gap-5  flex-wrap justify-around">
          <div className="relative _left right-50 opacity-0 h-50 w-70 rounded-2xl ml-8">
            <img
              src="../../models/To-Do-List.png"
              className="h-49 rounded w-full  right  top-px relative"
            />
          </div>
          <span className="absolute top-110 left-11 z-10 bg-green-500 rounded-full scale-120 p-2 md:relative md:h-9 md:w-9 h-9 w-9 line flex-center md:top-7 opacity-0 _opacity-1">
            📋
          </span>
          <div className="relative h-50 w-70 border border-amber-500 ml-8 rounded opacity-0 _opacity-1">
            <h1 className="text-white font-bold text-2xl text-center">
              To Do List
            </h1>
            <span
              className="h-1 w-25 absolute left-23
              rounded bg-amber-600"></span>
            <ul className="flex flex-col ml-3 text-[#ccc] mt-2">
              <li>This is a simple To-Do-List app.</li>
              <li>Created with pure HTML,CSS & JS.</li>
              <li>
                The app has some key features like,
                <ul className="ml-5 font-semibold">
                  <li>You can add data</li>
                  <li>You can set data as readed</li>
                  <li>You can delete data</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        {/* Calculator goes here */}
        <div className="flex gap-5  flex-wrap justify-around">
          <div className="relative _left right-50 opacity-0 h-50 w-70 rounded-2xl ml-8">
            <img
              src="../../models/Calculator.png"
              className="h-49 rounded w-full  right  top-px relative"
            />
          </div>
          <span className="absolute top-220 left-11 z-10 bg-green-600 rounded-full scale-120 p-2 md:relative md:h-9 md:w-9 h-9 w-9 line flex-center md:top-7 opacity-0 _opacity-1">
            🔢
          </span>
          <div className="relative h-50 w-70 border border-amber-500 ml-8 rounded opacity-0 _opacity-1">
            <h1 className="text-white font-bold text-2xl text-center">
              Calculator App
            </h1>
            <span
              className="h-1 w-30 absolute left-20
              rounded bg-amber-600"></span>
            <ul className="flex flex-col ml-3 text-[#ccc] mt-2">
              <li>This is a simple Calculator.</li>
              <li>Created with pure HTML,CSS & JS.</li>
              <li>
                The app has some features like,
                <ul className="ml-5 font-semibold">
                  <li>Various Text Color</li>
                  <li>Hilight Buttons</li>
                  <li>Responsive Layout.</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        {/* Rock Paper Scissors Game goes here */}
        <div className="flex gap-5  flex-wrap justify-around">
          <div className="relative _left right-50 opacity-0 h-50 w-70 rounded-2xl ml-8">
            <img
              src="../../models/Rock-Paper-Scissors.png"
              className="h-49 rounded w-full  right  top-px relative"
            />
          </div>
          <span className="absolute top-330 left-11 z-10 bg-lime-300 rounded-full scale-120 p-2 md:relative md:h-9  md:w-9 h-9 w-9 flex-center line md:top-7 opacity-0 _opacity-1">
            ✊
          </span>
          <div className="relative h-50 w-70 border border-amber-500 ml-8 rounded opacity-0 _opacity-1">
            <h1 className="text-white font-bold text-2xl text-center">
              R.P.S Game
            </h1>
            <span
              className="h-1 w-30 absolute left-20
              rounded bg-amber-600"></span>
            <ul className="flex flex-col ml-3 text-[#ccc] mt-2">
              <li>This is a Rock Paper Scissor game.</li>
              <li>Created with pure HTML,CSS & JS.</li>
              <li>
                The game has some features like,
                <ul className="ml-5 font-semibold">
                  <li>An AI Player</li>
                  <li>Score Board</li>
                  <li>Hover & Click Effects.</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        {/* Tic Tac Toe Game goes here */}
        <div className="flex gap-5  flex-wrap justify-around">
          <div className="relative h-50 w-70   rounded-2xl _left right-50 opacity-0 ml-8">
            <img
              src="../../models/Tic-Tac-Toe.png"
              className="h-49 rounded w-full  right  top-px relative"
            />
          </div>
          <span className="absolute top-440 left-11 z-10 bg-green-300 rounded-full scale-120 p-2 md:relative md:h-9 md:w-9 w-9 h-9 flex-center line md:top-7 opacity-0 _opacity-1">
            ⭕
          </span>
          <div className="relative   h-50 w-70 border border-amber-500 ml-8 rounded opacity-0 _opacity-1">
            <h1 className="text-white font-bold text-2xl text-center">
              Tic Tac Toe
            </h1>
            <span
              className="h-1 w-30 absolute left-20
              rounded bg-amber-600"></span>
            <ul className="flex flex-col ml-3 text-[#ccc] mt-2">
              <li>This is a Tic-Tac-Toe game.</li>
              <li>Created with pure HTML,CSS & JS.</li>
              <li>
                The game has some features like,
                <ul className="ml-5 font-semibold">
                  <li>Winning Party</li>
                  <li>Friendly Layout</li>
                  <li>Can be reset.</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Main line */}
      <div className="absolute h-500 md:h-230 w-2  top-25 rounded md:left-[50%]  left-25 flex flex-col overflow-hidden ">
        <div className=" h-1 md:max-h-230 w-0.5 rounded  lineColor lineHeight"></div>
      </div>
    </section>
  );
};

export default projects;
