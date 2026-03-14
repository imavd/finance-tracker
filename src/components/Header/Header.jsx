import React from "react";
import "./Header.css";

const Header = React.memo(function Header() {
  return (
    <header className="app-header">
      <div className="logo">LOGO</div>
    </header>
  );
});

export default Header;
