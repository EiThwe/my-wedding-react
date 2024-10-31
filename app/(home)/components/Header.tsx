
import NavigationLinks from "./NavigationLinks";
import Sidebar from "./Sidebar";

const Header = () => {
  return (
    <header className="bg-white border-b sticky top-0 z-[100] shadow-md">
      <NavigationLinks />
      <div className="lg:w-1/5 flex items-center justify-end">
        <Sidebar />
      </div>
    </header>
  );
};

export default Header;
