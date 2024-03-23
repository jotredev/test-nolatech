import { Dispatch, SetStateAction } from "react";
import { cn } from "../lib/Utils";
import Menu from "./Menu";

interface SidebarProps {
  showSidebar: boolean;
  setShowSidebar: Dispatch<SetStateAction<boolean>>;
}

const Sidebar = ({ showSidebar, setShowSidebar }: SidebarProps) => {
  return (
    <>
      <aside
        className={cn(
          "fixed flex items-center justify-center bg-white top-0 lg:-right-full w-64 h-full z-[9999] transition-all duration-500 ease-in-out",
          showSidebar ? "right-0" : "-right-full"
        )}
      >
        <Menu />
      </aside>
      <div
        role="button"
        onClick={() => setShowSidebar(false)}
        className={cn(
          "fixed left-0 top-0 w-full h-full bg-black/30 z-40",
          showSidebar ? "block" : "hidden"
        )}
      />
    </>
  );
};

export default Sidebar;
