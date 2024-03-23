import { useState } from "react";
import Logo from "./Logo";
import Menu from "./Menu";
import Sidebar from "./Sidebar";

const Header = () => {
  const [showSidebar, setShowSidebar] = useState<boolean>(false);

  return (
    <>
      <header className="flex items-center justify-between py-5 px-5 lg:px-0">
        <Logo />
        <div className="hidden lg:block">
          <Menu />
        </div>
        <button
          onClick={() => setShowSidebar(true)}
          className="relative lg:hidden"
        >
          <span className="absolute right-0 top-0 w-10 h-1 bg-white" />
          <span className="absolute right-0 top-2 w-10 h-1 bg-white" />
          <span className="absolute right-0 -top-2 w-10 h-1 bg-white" />
        </button>
      </header>
      <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
    </>
  );
};

export default Header;
