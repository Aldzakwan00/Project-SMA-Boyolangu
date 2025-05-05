import React, { useState } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';

const dummyData = [
  { name: 'Ahmad', poin: 15 },
  { name: 'Budi', poin: 3 },
  { name: 'Chandra', poin: 8 },
  { name: 'Dewi', poin: 20 },
  { name: 'Eka', poin: 6 },
  { name: 'Farhan', poin: 10 },
  { name: 'Gita', poin: 2 },
  { name: 'Hadi', poin: 12 },
  { name: 'Intan', poin: 4 },
  { name: 'Joko', poin: 7 }
];

const NamaPerKelas = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { namaKelas } = location.state || {};
  const [sortType, setSortType] = useState('');

  const getSortedData = () => {
    let sorted = [...dummyData];
    if (sortType === 'az') {
      sorted.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortType === 'max') {
      sorted.sort((a, b) => b.poin - a.poin);
    } else if (sortType === 'min') {
      sorted.sort((a, b) => a.poin - b.poin);
    }
    return sorted;
  };

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold">Daftar Siswa - {namaKelas || 'Kelas'}</h1>
        <button
          onClick={() => navigate(-1)}
          className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded shadow transition"
        >
          ← Kembali
        </button>
      </div>

      <div className="mb-6">
        <label className="mr-2 font-medium">Urutkan:</label>
        <select
          className="p-2 border border-gray-300 rounded shadow-sm"
          onChange={(e) => setSortType(e.target.value)}
        >
          <option value="">Default</option>
          <option value="az">Nama (A-Z)</option>
          <option value="max">Poin Tertinggi</option>
          <option value="min">Poin Terendah</option>
        </select>
      </div>

      <div className="space-y-3">
        {getSortedData().map((siswa, index) => (
          <Link
            key={index}
            to="/template-hasil"
            className="flex items-center justify-between p-4 bg-white border border-gray-200 rounded-lg shadow hover:shadow-md hover:bg-gray-50 cursor-pointer transition"
          >
            <div className="text-lg font-medium text-gray-800">{siswa.name}</div>
            <div className="text-sm text-gray-600">Poin: {siswa.poin}</div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NamaPerKelas;
