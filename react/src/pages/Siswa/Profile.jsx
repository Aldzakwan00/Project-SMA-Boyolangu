import React, { useState, useEffect } from 'react';
import fotoProfile from '../../assets/img/Anak_Baik.jpeg';

const Profile = () => {
  const storedName = localStorage.getItem('studentName') || 'Afif Al Dzaqwan';

  const [name, setName] = useState(storedName);
  const [isEditing, setIsEditing] = useState(false);
  const [className] = useState("XII RPL 1");
  const [points] = useState(3);
  const photoUrl = "https://via.placeholder.com/150";

  useEffect(() => {
    localStorage.setItem('studentName', name);
  }, [name]);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleSaveClick = () => {
    if (name.trim() === "") return;
    setIsEditing(false);
  };

  const getDescription = (p) => {
    if (p < 5) return "Sangat Baik";
    else if (p < 10) return "Baik";
    else return "Kurang Baik";
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-sm">
        <div className="flex flex-col items-center">
          <img
            className="w-24 h-24 rounded-full border-4 border-[#18c7cc] mb-4"
            src={fotoProfile}
            alt="Profile"
          />

          {isEditing ? (
            <div className="w-full flex flex-col items-center mb-2">
              <input
                className="text-lg text-center font-medium text-[#18c7cc] border-b border-[#18c7cc] outline-none bg-transparent w-full mb-2"
                type="text"
                value={name}
                onChange={handleNameChange}
              />
              <button
                onClick={handleSaveClick}
                className="text-sm bg-[#18c7cc] text-white px-4 py-1 rounded hover:bg-[#149fa2]"
              >
                Simpan
              </button>
            </div>
          ) : (
            <div className="flex flex-col items-center mb-2">
              <h2 className="text-xl font-bold text-[#18c7cc]">{name}</h2>
              <button
                onClick={handleEditClick}
                className="text-sm text-[#18c7cc] hover:underline mt-1"
              >
                Edit Nama
              </button>
            </div>
          )}

          <p className="text-gray-600 text-sm">{className}</p>
        </div>

        <div className="mt-6 space-y-4 text-sm text-gray-700">
          <div className="flex justify-between">
            <span className="font-semibold text-[#18c7cc]">Poin:</span>
            <span>{points}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-semibold text-[#18c7cc]">Keterangan:</span>
            <span>{getDescription(points)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
