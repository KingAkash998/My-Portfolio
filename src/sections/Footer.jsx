const Footer = () => {
  const now = new Date();
  return (
    <footer className="p-4 mt-9 bg-[#06101f80] md:px-20 w-screen h-16 flex items-center justify-between ">
      <div className="relative  flex items-center">
        <p>
          {" "}
          <span className="rounded-full border px-1 items-center text-center inline relative">
            <p className="inline relative -top-px">c</p>
          </span>{" "}
          {now.getFullYear()} Slman Safi | Alright Reserved
        </p>
      </div>
      <div className="flex gap-2 md:gap-5">
        <span className="px-[13px]  py-1 font-serif text-white! font-semibold  border border-gray-600 bg-blue-900 rounded-full">
          f
        </span>
        <span className="py-1  px-2 text-center font-serif text-white! font-semibold  border border-gray-600 tracking-wide bg-gray-900 rounded-full">
          in
        </span>
        <span className="py-1  px-2.5 text-center font-serif text-white! font-semibold  border border-gray-600 tracking-wide bg-yellow-900 rounded-full">
          G
        </span>
      </div>
    </footer>
  );
};

export default Footer;
