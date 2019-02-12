import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import image from "./douban2019.PNG"
import "./navbarstyle.css";

const Navbar = props => {
  return (
    <div>

      <div className="row topnav">
    <a href="/" className="toptag">豆瓣</a>
    <a href="" className="toptag">读书</a>
    <a href="" className="toptag">电影</a>
    <a href="" className="toptag">音乐</a>
      </div>
      <div className="row largelogorow">
        <div className="container">
        <Link
          className="navbar-brand"
          to="/">
          <a href="" className="largeFontLogo">豆瓣电影</a>
          
      </Link>
      <a href="https://movie.douban.com/annual/2018?source=movie_navigation" target="_blank" className="movieoftheyear"><img className="douban2019" src={image} alt=""/></a>
        </div>
      </div>
      <div className="row littlethreerow">
        <nav className="container">
          <ul className="nav">
            <li className="nav-item">
              <NavLink
                className={`nav-link littleThree${window.location.pathname === "/search" ? "" : ""}`}
                to="/search">
                影讯和购票
          </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={`nav-link littleThree${window.location.pathname === "/saved" ? "" : ""}`}
                to="/rank">
                排行榜
          </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={`nav-link littleThree${window.location.pathname === "/movie" ? "" : ""}`}
                to="/category">
                分类
          </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Navbar;
