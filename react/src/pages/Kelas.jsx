import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const Kelas = () => {
  const [tingkatKelas, setTingkatKelas] = useState('');
  
  const handleFilterChange = (e) => {
    setTingkatKelas(e.target.value);
  };

  const kelasData = {
    x: ['X-1', 'X-2', 'X-3'],
    xi: ['XI-1', 'XI-2', 'XI-3'],
    xii: ['XII-1', 'XII-2', 'XII-3'],
  };

  
  const getRandomColor = () => {
    const r = Math.floor(Math.random() * 50 + 150); 
    const g = Math.floor(Math.random() * 50 + 150); 
    const b = Math.floor(Math.random() * 50 + 150); 

    return `rgb(${r}, ${g}, ${b})`;
  };

  return (
    <div>
      <h1 className="text-3xl text-center font-semibold mb-10">Kelas</h1>

      <div className="mb-7">
        <select
          id="tingkat"
          name="tingkat"
          value={tingkatKelas}
          onChange={handleFilterChange}
          className="mt-1 p-3 w-[12rem] border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
        >
          <option value="">All</option>
          <option value="x">X</option>
          <option value="xi">XI</option>
          <option value="xii">XII</option>
        </select>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {(tingkatKelas ? kelasData[tingkatKelas] : [...kelasData.x, ...kelasData.xi, ...kelasData.xii]).map((kelas) => (
          <Link
            to="/kelas/nama-per-kelas"
            state={{ namaKelas: kelas }}
            key={kelas}
            className="p-4 text-center rounded-lg shadow-lg text-white font-semibold"
            style={{ backgroundColor: getRandomColor() }}
            >
            {kelas}
            </Link>
        
        ))}
      </div>
    </div>
  );
};

export default Kelas;
