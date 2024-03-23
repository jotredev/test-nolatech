import Title from "../Title";

const Videos = () => {
  return (
    <section
      id="videos"
      className="max-w-[1200px] mx-auto py-10 lg:py-20 px-5 lg:px-0"
    >
      <Title title="Latest videos" className="mb-10 text-center" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <article>
          <div className="relative">
            <img src="/imgs/pic7.webp" className="w-full h-72 object-cover" />
            <div className="absolute left-0 top-0 w-full h-full bg-black/50" />
            <button className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
              <img src="/icons/play.png" className="w-20 h-20 object-cover" />
            </button>
          </div>
          <p className="mt-3">Lorem ipsum dolor sit amet, consetetur</p>
        </article>
        <article>
          <div className="relative">
            <img src="/imgs/pic5.webp" className="w-full h-72 object-cover" />
            <div className="absolute left-0 top-0 w-full h-full bg-black/50" />
            <button className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
              <img src="/icons/play.png" className="w-20 h-20 object-cover" />
            </button>
          </div>
          <p className="mt-3">Lorem ipsum dolor sit amet, consetetur</p>
        </article>
        <article>
          <div className="relative">
            <img src="/imgs/pic4.webp" className="w-full h-72 object-cover" />
            <div className="absolute left-0 top-0 w-full h-full bg-black/50" />
            <button className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
              <img src="/icons/play.png" className="w-20 h-20 object-cover" />
            </button>
          </div>
          <p className="mt-3">Lorem ipsum dolor sit amet, consetetur</p>
        </article>
        <article>
          <div className="relative">
            <img src="/imgs/pic3.webp" className="w-full h-72 object-cover" />
            <div className="absolute left-0 top-0 w-full h-full bg-black/50" />
            <button className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
              <img src="/icons/play.png" className="w-20 h-20 object-cover" />
            </button>
          </div>
          <p className="mt-3">Lorem ipsum dolor sit amet, consetetur</p>
        </article>
        <article>
          <div className="relative">
            <img src="/imgs/pic2.webp" className="w-full h-72 object-cover" />
            <div className="absolute left-0 top-0 w-full h-full bg-black/50" />
            <button className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
              <img src="/icons/play.png" className="w-20 h-20 object-cover" />
            </button>
          </div>
          <p className="mt-3">Lorem ipsum dolor sit amet, consetetur</p>
        </article>
        <article>
          <div className="relative">
            <img src="/imgs/pic1.webp" className="w-full h-72 object-cover" />
            <div className="absolute left-0 top-0 w-full h-full bg-black/50" />
            <button className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
              <img src="/icons/play.png" className="w-20 h-20 object-cover" />
            </button>
          </div>
          <p className="mt-3">Lorem ipsum dolor sit amet, consetetur</p>
        </article>
      </div>
      <div className="mt-10 flex justify-center">
        <button className="bg-primary text-white uppercase py-2 px-4 rounded border border-primary hover:bg-transparent hover:text-primary transition-colors duration-300">
          View all
        </button>
      </div>
    </section>
  );
};

export default Videos;
