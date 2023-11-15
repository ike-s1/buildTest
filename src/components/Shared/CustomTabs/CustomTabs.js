import React, { useState } from "react";
import "./CustomTabs.scss";
import { Link, useLocation } from "react-router-dom";
import menuIcon from "../../../resources/icons/burger-menu.svg";

const CustomTabs = ({ items }) => {
  const location = useLocation();
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <nav className={openMenu ? "custom-tabs open" : "custom-tabs "}>
      {openMenu ? (
        <span className="mobile-menu-icon" onClick={() => setOpenMenu(false)}>
          X
        </span>
      ) : (
        <img
          src={menuIcon}
          alt="menu-icon"
          className="mobile-menu-icon"
          onClick={() => setOpenMenu(true)}
        />
      )}
      <ul className="mobile">
        {items &&
          items.map((i, index) => (
            <li
              key={i.label}
              onClick={() => setOpenMenu(false)}
              className={
                (!location?.search?.length && i.link === location.pathname) ||
                (!!location?.search?.length &&
                  i.link.endsWith(location.search)) ||
                (i.link.includes("data-source") &&
                  !location.search.length &&
                  index === 0)
                  ? "active"
                  : ""
              }
            >
              <Link to={i.link}>{i.label}</Link>
            </li>
          ))}
      </ul>
    </nav>
  );
};

export default CustomTabs;
