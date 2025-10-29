import React from "react";
import "./Header.scss";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <nav className="header__nav">
        <ul className="header__menu">
          <li>
            <NavLink to="/" className={({ isActive }) => (isActive ? "header__link active" : "header__link")}>
              Trang Chủ
            </NavLink>
          </li>
          <li>
            <NavLink to="/factors" className={({ isActive }) => (isActive ? "header__link active" : "header__link")}>
              Các yếu tố
            </NavLink>
          </li>
          <li>
            <NavLink to="/ai-chat" className={({ isActive }) => (isActive ? "header__link active" : "header__link")}>
              AI Chat
            </NavLink>
          </li>
          <li>
            <NavLink to="/members" className={({ isActive }) => (isActive ? "header__link active" : "header__link")}>
              Thành viên
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
