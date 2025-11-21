const navbar = () => {
  return (
    <nav
      className="h-13 w-full flex fixed 
    50 justify-between  items-center pt-1 bg-slate-950 pr-1 z-50 ">
      <div className=" flex gap-1 justify-space-between px-4 items-center ">
        <span className="flex items-center gap-2">
          <img
            src="../models/logo.jpeg"
            alt="logo"
            className="h-8 rounded-full bg-transparent opacity-0.7"
          />
        </span>

        <h1 className="text-xl w-min text-white font-bold font-serif tracking-wide"> Safi</h1>
      </div>
      <ul className="flex-center gap-2 md:gap-6 text-white list-none">
        <li className="cursor-pointer relative underLine overflowY-hidden  rounded p-1">
          <a href="#hero">Home</a>
        </li>
        <li className="cursor-pointer relative underLine overflowY-hidden  rounded p-1">
          <a href="#About">About</a>
        </li>
        <li className="cursor-pointer relative underLine overflowY-hidden  rounded p-1">
          <a href="#Projects">Projects</a>
        </li>
      </ul>
      <a href="#Contact">
        <button className=" relative bg-white hover:bg-blue-600 navBtn  text-black font-semibold    flex-cener px-4 h-9 rounded ">
          Contact Me
        </button>
      </a>
    </nav>
  );
};

export default navbar;
