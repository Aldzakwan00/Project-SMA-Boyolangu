import React from 'react';

const Profile = () => {
  return (
    <div className="min-h-screen bg-[#18c7cc] flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-sm">
        <div className="flex flex-col items-center">
          <img
            className="w-24 h-24 rounded-full border-4 border-[#18c7cc] mb-4"
            src="https://via.placeholder.com/150"
            alt="Profile"
          />
          <h2 className="text-xl font-bold text-[#18c7cc] mb-1">Afif Al Dzaqwan</h2>
          <p className="text-gray-600 text-sm">Software Developer</p>
        </div>

        <div className="mt-6">
          <h3 className="text-[#18c7cc] font-semibold mb-2">About Me</h3>
          <p className="text-gray-700 text-sm">
            Passionate developer who loves coding, learning new technologies, and building innovative solutions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
