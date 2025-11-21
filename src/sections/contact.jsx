const contact = () => {

  const handleSubmit = (e)=>{
    e.preventDefault;
    console.log('kfflfkdk')
  }
  // const handleClick = ()=>{
  //   let inputs = document.querySelectorAll('input');
  //   inputs.forEach((input)=>{
  //     input.value = "";
  //   })
  //   let textArea = document.querySelector('textarea');
  //   textArea.value = "";
  // }

  return (
    <div className=" w-screen p-5 md:p-16 text-center justify-center items-center flex flex-col " id="Contact">
      {/* Top Header */}
      <div className="flex-center  flex-col pb-9">
        <h1 className="flex-center text-2xl text-white md:text-4xl pt-1">
          CONTACT US
        </h1>
        <span
          className="h-1 w-30 md:w-48
        rounded bg-sky-500"></span>
      </div>
      <h1 className="text-white font-bold font-sans tracking-wider text-2xl relative top-10 ">Get in touch with us.</h1>
      <form
        className="relative h-120 pt-15 w-100  rounded border border-gray-500 text-white flex flex-col gap-9 md:w-140 md:h-130 md:justify-between
      p-7 " onSubmit={handleSubmit}>
        <label id="name" className="relative  text-left w-full">
          <p className="relative left-4 font-bold tracking-widest ">Name</p>
          <input
            required
            type="text"
            placeholder="Enter  your name"
            id="name"
            className="block 
        relative border-gray-950 outline-none text-black! font-semibold placeholder:tracking-wider border px-2 bg-amber-50 rounded-[7px] w-full h-7 placeholder:text-gray-800"
          />
        </label>
        <label id="email" className="relative  text-left w-full">
          <p className="relative left-4 font-bold tracking-widest ">Email</p>
          <input
            required
            type="email"
            placeholder="Enter  your Email"
            id="name"
            className="block 
        relative border-gray-950 outline-none text-black! font-semibold placeholder:tracking-wider border px-2 bg-amber-50 rounded-[7px] w-full h-7 placeholder:text-gray-800"
          />
        </label>
        <label id="message" className="relative  text-left w-full">
          <p className="relative left-4 font-bold tracking-widest ">Your Message</p>
          <textarea
            id="message"
            className="block 
        relative border-gray-950 outline-none text-black! font-semibold placeholder:tracking-wider border px-2 bg-amber-50 rounded-xl w-full  placeholder:text-gray-800 font-serif text-sm max-h-30 min-h-30 overflow-hidden"
        placeholder="Leave your meassage..."></textarea>
        </label>
        <button type="submit" className="bg-blue-600 rounded py-2 font-semibold tracking-wider font-serif" >Send Message</button>
      </form>
    </div>
  );
};

export default contact;
