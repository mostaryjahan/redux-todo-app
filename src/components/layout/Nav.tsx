import { Sprout } from "lucide-react";
import { Link } from "react-router";
import { ModeToggle } from "../mode-toggler";
const Nav = () => {
  return (
    <nav className="w-[90%] mx-auto py-2 flex gap-3 justify-center items-center">
      <div className="flex items-center">
        <Sprout color="#5dd065" className="text-3xl w-12 h-12" />
        <p className="text-2xl font-semibold text-[#5dd065]">Task<span>Tracker</span> </p>
      </div>
      <Link to="/" className="text-lg font-medium">Tasks</Link>
      <Link to="/user" className="text-lg font-medium">Users</Link>
      <div className="ml-auto">
        <ModeToggle />
      </div>
    </nav>
  );
};

export default Nav;
