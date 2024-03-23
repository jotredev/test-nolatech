import Title from "../Title";

const Other = () => {
  return (
    <section id="other" className="bg-primary mb-10 lg:mb-20">
      <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row">
        <section className="w-full lg:w-1/2 py-20 px-10">
          <Title
            title="Lorem Ipsum dolor sit amet, consetetur"
            className="text-white text-5xl lg:text-7xl mb-10 text-center lg:text-left"
          />
          <div>
            <button className="w-full mb-5 bg-white uppercase font-semibold p-4 border border-white hover:bg-transparent hover:text-white transition-colors duration-300">
              Lorem ipsum dolor sit
            </button>
            <button className="w-full bg-transparent text-white uppercase font-semibold p-4 border border-white hover:bg-white hover:text-black transition-colors duration-300">
              Lorem ipsum dolor sit
            </button>
          </div>
        </section>
        <section className="w-full lg:w-1/2">
          <img src="/imgs/pic5.webp" className="w-full" />
        </section>
      </div>
    </section>
  );
};

export default Other;
