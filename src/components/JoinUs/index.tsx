import Title from "../Title";

const JoinUs = () => {
  return (
    <section id="joinUs" className="relative h-screen">
      <img src="/imgs/join-us.webp" className="w-full h-full object-cover" />
      <div className="w-full xl:w-[500px] absolute top-0 lg:right-40 py-10 xl:py-20 px-5 lg:px-0">
        <Title title="JOIN US." className="text-white" />
        <p className="my-10 text-white">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
        </p>
        <form className="mt-10">
          <div className="flex gap-3 mb-5">
            <input
              type="text"
              className="outline-none bg-white py-2 px-4 rounded w-full"
              placeholder="Name"
            />
            <input
              type="text"
              className="outline-none bg-white py-2 px-4 rounded w-full"
              placeholder="Surname"
            />
          </div>
          <div className="flex gap-3 mb-5">
            <input
              type="number"
              className="outline-none bg-white py-2 px-4 rounded w-full"
              placeholder="Phone"
            />
            <input
              type="email"
              className="outline-none bg-white py-2 px-4 rounded w-full"
              placeholder="Email"
            />
          </div>
          <input
            type="text"
            className="outline-none bg-white py-2 px-4 rounded w-full mb-5"
            placeholder="Department"
          />
          <textarea
            className="outline-none bg-white py-2 px-4 rounded w-full resize-none mb-5"
            placeholder="Message"
            rows={5}
          />
          <button className="bg-primary text-white uppercase py-2 px-4 rounded border border-primary hover:bg-transparent hover:text-primary transition-colors duration-300 w-40">
            {`I'M IN`}
          </button>
          <p className="my-5 text-white text-center">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
          </p>
        </form>
      </div>
    </section>
  );
};

export default JoinUs;
