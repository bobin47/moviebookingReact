import React from "react";
import { NavLink } from "react-router-dom";
import Login from "../Login/Login";

export default function Header() {
  let activeStyle = {
    color: "#E63558",
  };
  return (
    <div className="  border-b-2 border-grey-500">
      <div className="flex justify-between items-center py-5 w-[80%] m-auto">
        <div className="flex justify-between items-center">
          <NavLink
            to={"/"}
            className="text-sm capitalize text-gray-400 mr-6"
            style={({ isActive }) => {
              return isActive ? activeStyle : {};
            }}
          >
            mua vé
          </NavLink>
          <NavLink
            to={"/lich-chieu"}
            className="text-sm capitalize text-gray-400 mr-6"
            style={({ isActive }) => {
              return isActive ? activeStyle : {};
            }}
          >
            lịch chiếu
          </NavLink>
          <NavLink
            to={"/c"}
            className="text-sm capitalize text-gray-400 mr-6"
            style={({ isActive }) => {
              return isActive ? activeStyle : {};
            }}
          >
            phim
          </NavLink>
          <NavLink
            to={"/c"}
            className="text-sm capitalize text-gray-400 mr-6"
            style={({ isActive }) => {
              return isActive ? activeStyle : {};
            }}
          >
            rap
          </NavLink>
          <NavLink
            to={"/c"}
            className="text-sm capitalize text-gray-400 mr-6"
            style={({ isActive }) => {
              return isActive ? activeStyle : {};
            }}
          >
            tin tức
          </NavLink>
          <NavLink
            to={"/b"}
            className="text-sm capitalize text-gray-400 mr-6"
            style={({ isActive }) => {
              return isActive ? activeStyle : {};
            }}
          >
            cộng đồng
          </NavLink>
        </div>
        <div>
          <img
            src="https://moveek.com/bundles/ornweb/img/logo.png"
            alt=""
            width={100}
            height={24}
          />
        </div>
        <div className="flex justify-around items-center">
          <input
            type="text"
            className="bg-gray p-2 px-5 border rounded-3xl"
            placeholder="search"
          />

          <Login />
        </div>
      </div>
    </div>
  );
}
