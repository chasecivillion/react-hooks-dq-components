import React from "react";
import TopMenu from "./TopMenu"
import MainContent from "./MainContent"
import Search from "./Search"
import Logo from "./Logo"
import SideMenu from "./SideMenu"

function App() {
  return <div className="app-container">
            < TopMenu />
            < MainContent />
            < SideMenu />
         </div>;
}

export default App;
