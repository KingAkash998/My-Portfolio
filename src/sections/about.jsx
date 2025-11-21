/* eslint-disable react-hooks/rules-of-hooks */
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const about = () => {
  useGSAP(() => {
    const elements = document.querySelectorAll(".arise");
    elements.forEach((element) => {
      gsap.fromTo(
        element,
        {
          opacity: 0,
          position: "relative",
          left: -50,
        },
        {
          opacity: 1,
          left: 0,
          scrollTrigger: {
            trigger: element,
            start: "top 85%",
            end: "bottom 80%",
            scrub: true,
          },
        }
      );
    });
    const services = document.querySelectorAll(".fall");
    services.forEach((service) => {
      gsap.fromTo(
        service,
        {
          opacity: 0,
          position: "relative",
          top: -50,
        },
        {
          opacity: 1,
          top: 0,
          scrollTrigger: {
            trigger: service,
            start: "top 85%",
            end: "bottom 60%",
          },
        }
      );
      gsap.fromTo(
        service,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          scrollTrigger: {
            trigger: service,
            start: "top 85%",
            end: "bottom 60%",
            scrub: true,
          },
        }
      );
    });
  });

  return (
    <section
      id="About"
      className="mt-125 p-2 flex flex-wrap flex-col  md:gap-9 relative ">
      {/* Top Header */}
      <div className="flex-center md:-top-4  flex-col">
        <h1 className="flex-center text-2xl text-white md:text-4xl pt-1">
          ABOUT ME
        </h1>
        <span
          className="h-1 w-28 md:w-48
        rounded bg-sky-400"></span>
      </div>
      <div className="md:flex justify-around items-start">
        {/* Left content */}
        <header className="mt-9 ml-3 md:ml-5 ">
          <div className="arise">
            <h1 className="font-semibold  text-xl mb-2 italic inline text-white">
              Hey there I am
            </h1>
            <span className="text-2xl font-bold  ml-3 text-yellow-500  gradient">
              Salman Safi
            </span>
            .
          </div>
          <ul className="ml-2 list">
            <li className="arise">A web developer from Pakistan.</li>
            <li className="arise">I will develope any type of website.</li>
            <li className="arise">Have something in mind feel free to ask.</li>
          </ul>
          <div className="border-amber-400 arise border h-50 w-50 rounded-xl mt-1 md:mt-5  "></div>
        </header>
        {/* Right content */}
        <div>
          {/* Header  */}
          <div className="flex-center top-3 relative flex-col">
            <h1 className="flex-center fall text-xl text-white md:text-2xl pt-1">
              SERVICES
            </h1>
            <span
              className="h-1 fall w-22 md:w-28
        rounded bg-yellow-400"></span>
          </div>
          <ul className="mt-9 ml-2">
            <li className="flex   flex-col  p-1.5 mb-2">
              <div className="flex gap-3 ">
                <h2 className="text-white  font-semibold font-serif fall">
                  HTML :
                </h2>
                <p className="fall">
                  I well create an attractive "HTML" website.
                </p>
              </div>
              <div className="flex  gap-3 items-start">
                <h2 className="text-white font-semibold fall font-serif ">
                  Experience :
                </h2>
                <p className=" fall">
                  I take the ability to create impossible. <br />I have an
                  experience of{" "}
                  <span className="text-yellow-300 gradient font-serif">
                    Two
                  </span>{" "}
                  years.
                </p>
              </div>
            </li>
            <hr className="fall" />
            <li className="flex  flex-col  p-1.5 mb-2 ">
              <div className="flex gap-3 ">
                <h2 className="text-white font-semibold font-serif fall ">
                  CSS :
                </h2>
                <p className="fall">
                  I well create a responsive, website with "CSS". <br />
                  I well make it attractive by using different properties <br />{" "}
                  of CSS.
                </p>
              </div>
              <div className="flex gap-3 items-start">
                <h2 className="fall text-white font-semibold font-serif ">
                  Experience :
                </h2>
                <p className="fall">
                  I have the ability to animat everything with{" "}
                  <span className="gradient">'css'</span> . <br />I have an
                  experience of{" "}
                  <span className="text-yellow-300 gradient font-serif">
                    Two
                  </span>{" "}
                  years.
                </p>
              </div>
            </li>
            <hr className="fall" />
            <li className="flex  flex-col  p-1.5 mb-2">
              <div className="flex gap-3 ">
                <h2 className="text-white font-semibold font-serif fall ">
                  Tailwind - CSS :
                </h2>
                <p className="fall">
                  I well create a Tailwind_CSS based <br /> website for you.
                </p>
              </div>
              <div className="flex gap-3 items-start">
                <h2 className="text-white font-semibold font-serif fall">
                  Experience :
                </h2>
                <p className="fall">
                  I can use all classNamees of 'Tailwind - CSS'. <br />I have an
                  experience of{" "}
                  <span className="text-yellow-300 gradient font-serif">
                    One
                  </span>{" "}
                  years.
                </p>
              </div>
            </li>
            <hr className="fall" />
            <li className="flex  flex-col  p-1.5 mb-2">
              <div className="flex gap-3 ">
                <h2 className="text-white font-semibold font-serif fall">
                  React - JS :
                </h2>
                <p className="fall">
                  I well make a "React-JS" website for you.
                </p>
              </div>
              <div className="flex gap-3 items-start">
                <h2 className="text-white font-semibold font-serif fall">
                  Experience :
                </h2>
                <p className="fall">
                  I know all basics of React-JS. <br />I have an experience of{" "}
                  <span className="text-yellow-300 gradient font-serif">
                    Half
                  </span>{" "}
                  years.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default about;
