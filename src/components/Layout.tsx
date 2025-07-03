

import { Outlet } from "react-router-dom";
import AppNavigation from "./AppNavigation";
import Footer from "./Footer";

const Layout: React.FC = () => (
  <>
    <AppNavigation />
     <main style={{ paddingTop: "64px" }}>
      <Outlet />
    </main>
   <Footer/>
  </>
);

export default Layout;
