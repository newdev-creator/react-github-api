import { Navbar, NavbarBrand, NextUIProvider } from "@nextui-org/react";
import "./App.css";
import logo from "./assets/images/logo-github.png";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <NextUIProvider>
      <div className="bg-gray-100 w-[500px] mx-auto p-4 min-h-screen">
        <Navbar>
          <NavbarBrand className="flex justify-center items-center">
            <img className="max-w-36" src={logo} alt="" />
          </NavbarBrand>
        </Navbar>

        <SearchBar />
      </div>
    </NextUIProvider>
  );
}

export default App;
