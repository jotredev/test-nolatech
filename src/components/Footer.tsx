const Footer = () => {
  return (
    <footer className="bg-white py-10 max-w-[1200px] mx-auto flex flex-col lg:flex-row lg:items-center lg:justify-between gap-y-10 px-5 lg:px-0">
      <section className="w-full lg:w-1/3 text-center lg:text-left">
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna
        </p>
      </section>
      <section className="w-full lg:w-1/3 flex justify-center">
        <img src="/logo.png" className="w-24 object-cover" />
      </section>
      <section className="w-full lg:w-1/3 flex justify-center lg:justify-end">
        All rights reserved to Lorem Ipsum&copy; 2024
      </section>
    </footer>
  );
};

export default Footer;
