import Title from "../Title";

const Section7 = () => {
  return (
    <section
      id="section7"
      className="relative lg:h-screen pt-48 lg:pt-0 px-5 lg:px-0"
    >
      <img
        src="/imgs/pic6.webp"
        className="absolute left-0 top-0 -z-10 w-full h-full object-contain lg:object-cover"
      />
      <div className="w-full md:w-[400px] lg:absolute top-1/2 -translate-y-1/2 z-10 left-40">
        <Title title="Lorem ipsum dolor sit" />
        <p className="my-10 bg-black md:bg-transparent text-white md:text-black">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua.
        </p>
        <button className="bg-primary text-white uppercase py-2 px-4 rounded border border-primary hover:bg-transparent hover:text-primary transition-colors duration-300 w-40">
          View all
        </button>
      </div>
    </section>
  );
};

export default Section7;
