import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import logo from '../../assets/img/SMAN_1_BOYOLANGU_LOGO.png'; // Ganti dengan path logo Anda

const HeaderSiswa = ({ toggleSidebar }) => {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const [showLogoutPopup, setShowLogoutPopup] = useState(false);

  const handleLogout = () => {
    logout(); 
    navigate('/login');
  };

  const closePopup = () => setShowLogoutPopup(false);

  return (
    <header>
      <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-[#186c7c] dark:border-gray-700 px-5">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start rtl:justify-end">
              <button
                onClick={toggleSidebar}
                type="button"
                className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              >
                <span className="sr-only">Open sidebar</span>
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clipRule="evenodd"
                    fillRule="evenodd"
                    d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0
                       10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010
                       1.5h-7.5a.75.75 0 01-.75-.75zM2
                       10a.75.75 0 01.75-.75h14.5a.75.75 0
                       010 1.5H2.75A.75.75 0 012 10z"
                  />
                </svg>
              </button>
              <a href="#" className="flex ms-2 md:me-24">
                <img src={logo} className="h-8 me-3" alt="SMAN 1 Logo" />
                <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">
                  SMAN 1 BOYOLANGU
                </span>
              </a>
            </div>
            <div className="flex items-center">
              <h1 className='text-white mr-4'>John Due</h1>
              <button
                onClick={() => setShowLogoutPopup(true)} // Tampilkan pop-up
                className="text-white px-4 py-2 rounded bg-red-500 hover:bg-red-700"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Pop-up konfirmasi logout */}
      {showLogoutPopup && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-lg font-semibold mb-4">Anda yakin ingin logout?</h2>
            <div className="flex justify-between">
              <button
                onClick={handleLogout}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
              >
                Ya, Logout
              </button>
              <button
                onClick={closePopup}
                className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-700"
              >
                Batal
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default HeaderSiswa;
