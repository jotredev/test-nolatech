import Header from "../Header";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative w-full lg:h-screen lg:overflow-hidden"
    >
      <div className="w-full h-[80vh] relative after:absolute after:w-full after:h-full after:left-0 after:bottom-0 after:bg-hero">
        <img
          src="/imgs/hero.webp"
          className="absolute w-full h-full object-cover"
        />
        <div className="max-w-[1200px] mx-auto relative z-10">
          <Header />
        </div>
        <div className="relative lg:absolute top-40 text-center lg:text-left lg:top-48 lg:right-28 p-5 lg:p-0 lg:z-10">
          <div className="space-y-2 mb-10">
            <h1 className="text-white text-3xl lg:text-7xl uppercase font-semibold">
              Lorem Ipsum{" "}
            </h1>
            <div className="bg-white">
              <h1 className="text-3xl lg:text-7xl uppercase font-semibold">
                Lorem Ipsum Dolor
              </h1>
            </div>
            <h1 className="text-white text-3xl lg:text-7xl uppercase font-semibold">
              Lorem Ipsum
            </h1>
          </div>
          <button className="bg-primary text-white uppercase font-semibold py-2 px-4 rounded text-xl border border-primary hover:bg-transparent transition-colors duration-300">
            What is next
          </button>
        </div>
      </div>
      <div className="w-full lg:h-[20vh] bg-primaryDark flex items-center py-8 lg:py-0">
        <div className="max-w-[1200px] mx-auto block lg:flex items-center justify-between">
          <h3 className="text-white font-semibold text-4xl mb-8 text-center lg:text-left">
            Lorem ipsum dolor sit <br /> amet, consetetur
          </h3>
          <ul className="flex flex-col lg:flex-row lg:items-center gap-y-5">
            <li className="flex flex-col items-center lg:border-r border-primary px-14 2xl:px-20">
              <h1 className="text-5xl font-bold text-white">170</h1>
              <p className="text-primary">days</p>
            </li>
            <li className="flex flex-col items-center lg:border-r border-primary px-14 2xl:px-20">
              <h1 className="text-5xl font-bold text-white">13</h1>
              <p className="text-primary">hours</p>
            </li>
            <li className="flex flex-col items-center lg:border-r border-primary px-14 2xl:px-20">
              <h1 className="text-5xl font-bold text-white">39</h1>
              <p className="text-primary">minutes</p>
            </li>
            <li className="flex flex-col items-center lg:border-r border-primary px-14 2xl:px-20">
              <h1 className="text-5xl font-bold text-white">29</h1>
              <p className="text-primary">seconds</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Hero;
