import Title from "../Title";

const Services = () => {
  return (
    <section
      id="services"
      className="max-w-[1200px] mx-auto py-10 lg:py-20 px-5 lg:px-0"
    >
      <Title title="Lorem ipsum" className="mb-10 text-center" />
      <p className="text-center max-w-2xl mx-auto mb-10">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
        <article>
          <img src="/imgs/pic2.webp" className="w-full h-80 object-cover" />
          <button className="w-full bg-primary text-white uppercase font-semibold p-4 border border-primary hover:bg-transparent hover:text-primary transition-colors duration-300">
            Lorem ipsum
          </button>
        </article>
        <article>
          <img src="/imgs/pic3.webp" className="w-full h-80 object-cover" />
          <button className="w-full bg-primary text-white uppercase font-semibold p-4 border border-primary hover:bg-transparent hover:text-primary transition-colors duration-300">
            Lorem ipsum
          </button>
        </article>
        <article>
          <img src="/imgs/pic4.webp" className="w-full h-80 object-cover" />
          <button className="w-full bg-primary text-white uppercase font-semibold p-4 border border-primary hover:bg-transparent hover:text-primary transition-colors duration-300">
            Lorem ipsum
          </button>
        </article>
      </div>
      <div className="flex justify-center">
        <button className="bg-transparent rounded text-black uppercase font-semibold p-4 border border-black hover:bg-black hover:text-white transition-colors duration-300">
          Learn More
        </button>
      </div>
    </section>
  );
};

export default Services;
