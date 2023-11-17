import React from "react";
import "./CustomMenu.scss";
import { NavLink, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const CustomMenu = ({ items }) => {
  
  const location = useLocation();

  return (
    <div className="custom-menu">
      <ul>
        {items.map((item, index) => {
          return (
            <li key={index}>
              <Link
                to={item.url}
                className={
                  item.url.split("/")[3] === location.pathname.split("/")[3] ||
                  (item.url === location.pathname && !item.url.startsWith("/#"))
                    ? "active"
                    : ""
                }
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CustomMenu;
