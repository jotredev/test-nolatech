import Title from "../Title";

const About = () => {
  return (
    <section
      id="about"
      className="max-w-[1200px] mx-auto py-10 lg:py-20 flex flex-col lg:flex-row items-start"
    >
      <div className="w-full lg:w-1/2 p-5 lg:p-0">
        <Title
          title="Lorem ipsum dolor sit amet"
          className="mb-10 text-center lg:text-left"
        />
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
          et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
          takimata sanctus est Lorem ipsum dolor sit
        </p>
      </div>
      <div className="w-full lg:w-1/2 flex justify-center">
        <img
          src="/imgs/pic1.webp"
          className="w-[500px] h-[500px] object-cover"
        />
      </div>
    </section>
  );
};

export default About;
