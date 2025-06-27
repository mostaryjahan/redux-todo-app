import { Outlet } from "react-router";
import Nav from "./components/layout/Nav";

const App = () => {
  return (
    <div className="w-90% mx-auto">
     <Nav/>
      <Outlet />
    </div>
  );
};

export default App;