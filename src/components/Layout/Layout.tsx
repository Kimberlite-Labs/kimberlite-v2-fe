import { ReactNode } from "react";
import Navbar from "../Navbar/index";
import Footer from "../Footer/index";

type children = {
  children: ReactNode;
};

const Layout = ({ children }: children) => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      {children}
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
