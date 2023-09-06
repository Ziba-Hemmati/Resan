"use client";
import { useCallback, useState } from "react";
import "@/styles/banner.css";
import Menu from "./Menu";
import Banner from "./Banner";

const Header = () => {
  const [menu, setMenu] = useState(false);
  const handleMenu = useCallback(() => setMenu((prev) => !prev), [menu]);
  return (
    <nav>
      <Banner handleMenu={handleMenu} />
      {menu && <Menu handleMenu={handleMenu} />}
    </nav>
  );
};

export default Header;
