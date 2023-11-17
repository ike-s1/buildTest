import React, { useState } from "react";
import "./CustomTabs.scss";
import { Link, useLocation } from "react-router-dom";


const CustomTabs = ({ items }) => {
  const location = useLocation();

  return (
    <nav className={"custom-tabs"}>
      <ul className="mobile">
        {items &&
          items.map((i, index) => (
            <li
              key={i.label}
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
