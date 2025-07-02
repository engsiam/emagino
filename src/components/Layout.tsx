

import { Outlet } from "react-router-dom";
import AppNavigation from "./AppNavigation";

const Layout: React.FC = () => (
  <>
    <AppNavigation />
     <main style={{ paddingTop: "64px" }}>
      <Outlet />
    </main>
   
  </>
);

export default Layout;
