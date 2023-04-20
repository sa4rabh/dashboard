import React from 'react';
import { FaColumns, FaChartLine, FaCalendarAlt, FaUsers, FaCog, FaQuestionCircle, FaEnvelope } from 'react-icons/fa';

const SideNav = () => {
  return (
    <div className="sidenav bg-black rounded-lg py-4 px-2 mx-20 my-10 h-screen w-3/5">
      <a href="/" className="block text-white mb-4">
        <span className="flex items-center p-5 ml-2">
          {/* <FaColumns /> */}
          <span className="ml-2 text-3xl font-bold m-5">Board.</span>
        </span>
      </a>
      <a href="/dashboard" className="block text-white mb-4">
        <span className="flex items-center justify-center">
          <FaChartLine />
          <span className="ml-2  mb-1">Dashboard</span>
        </span>
      </a>
      <a href="/transitions" className="block text-white mb-4">
        <span className="flex items-center justify-center">
          <FaCalendarAlt />
          <span className="ml-2 mb-1">Transitions</span>
        </span>
      </a>
      <a href="/schedules" className="block text-white mb-4">
        <span className="flex items-center justify-center">
          <FaUsers />
          <span className="ml-2 mb-1">Schedules</span>
        </span>
      </a>
      <a href="/users" className="block text-white mb-4">
        <span className="flex items-center pl-5 ml-5">
          <FaCog />
          <span className="ml-2 mb-1">Users</span>
        </span>
      </a>
      <a href="/settings" className="block text-white mb-4">
        <span className="flex items-center justify-center">
          <FaQuestionCircle />
          <span className="ml-2 mb-1">Settings</span>
        </span>
      </a>
      <div className="flex-grow"></div>
      <div className="mb-4 justify-items-end">
        <a href="/help" className="block text-white">
          <span className="flex items-center justify-center">
            <FaEnvelope />
            <span className="ml-2 mb-1">Help</span>
          </span>
        </a>
        <a href="/contact-us" className="block text-white">
          <span className="flex items-center justify-center">
            <FaEnvelope />
            <span className="ml-2 mb-1">Contact Us</span>
          </span>
        </a>
      </div>
    </div>
  );
}

export default SideNav;
