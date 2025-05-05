import React, { useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div>
      <Header toggleSidebar={toggleSidebar} />
      <Sidebar open={sidebarOpen} />
      <main className="p-4 sm:ml-64 mt-16">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;