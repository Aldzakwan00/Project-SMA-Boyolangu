// src/components/Layout.jsx
import React, { useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import SidebarSiswa from './Siswa/SidebarSiswa';
import HeaderSiswa from './Siswa/HeaderSiswa';

const Layout = () => {
  const { user } = useAuth();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  if (!user) return null;

  const isSiswa = user.role === 'siswa';

  return (
    <div>
      {isSiswa ? (
        <>
          <HeaderSiswa toggleSidebar={toggleSidebar} />
          <SidebarSiswa open={sidebarOpen} />
        </>
      ) : (
        <>
          <Header toggleSidebar={toggleSidebar} />
          <Sidebar open={sidebarOpen} />
        </>
      )}
      <main className="p-4 sm:ml-64 mt-16">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
