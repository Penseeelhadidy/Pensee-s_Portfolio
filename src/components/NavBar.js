import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

export default function NavBar() {
  return (
    <header className="bg-gray-100">
      <div className="container mx-auto flex justify-between">
        <nav className="flex">
          <NavLink
            to="/"
            exact
            activeClassName="text-gray-900"
            className="inline-flex items-center py-6 px-3 mr-4 text-gray-800 hover:text-red-400 text-4xl font-bold cursive tracking-widest"
          >
            Pensee
          </NavLink>

          <NavLink
            to="/post"
            activeClassName="text-gray-100 bg-gray-800"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-red-400 hover:text-red-500"
          >
            Blog Posts
          </NavLink>
          <NavLink
            to="/project"
            activeClassName="text-gray-100 bg-gray-800"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-red-400 hover:text-red-500"
          >
            Projects
          </NavLink>
          <NavLink
            to="/about"
            activeClassName="text-gray-100 bg-gray-800"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-red-400 hover:text-red-500"
          >
            About Me!
          </NavLink>
        </nav>
        <div className="inline-flex py-3 px-3 my-6">
          <SocialIcon
          network="mailto:pensee@mail.com"
          url="pensee@mail.com"
           className="mr-4"
           target="_blank"
           fgColor="#fff"
           style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://github.com/Penseeelhadidy"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://www.linkedin.com/in/pensee-elhadidy"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
        </div>
      </div>
    </header>
  );
}
