import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const dummyData = {
  x: {
    1: [
      { name: 'Ahmad', poin: 10 },
      { name: 'Budi', poin: 5 },
    ],
    2: [
      { name: 'Chandra', poin: 7 },
      { name: 'Dewi', poin: 8 },
    ],
  },
  xi: {
    1: [
      { name: 'Eka', poin: 3 },
      { name: 'Farhan', poin: 12 },
    ],
    3: [
      { name: 'Gita', poin: 9 },
      { name: 'Hadi', poin: 4 },
    ],
  },
  xii: {
    2: [
      { name: 'Intan', poin: 6 },
      { name: 'Joko', poin: 11 },
    ]
  }
};

const Individu = () => {
  const [tingkat, setTingkat] = useState('');
  const [kelas, setKelas] = useState('');
  const [nama, setNama] = useState('');
  const [selectedSiswa, setSelectedSiswa] = useState(null);
  const [submitted, setSubmitted] = useState(false); // untuk cek apakah tombol submit sudah ditekan

  const getSiswaList = () => {
    return dummyData[tingkat]?.[kelas] || [];
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    if (tingkat && kelas && nama) {
      const siswa = getSiswaList().find((s) => s.name === nama);
      setSelectedSiswa(siswa || null);
    } else {
      setSelectedSiswa(null);
    }
  };

  return (
    <div className='flex flex-col items-center h-full min-h-screen p-5 text-center bg-gray-50'>
      <h1 className='text-2xl my-10 font-bold'>Poin Siswa</h1>

      <div className='bg-white p-8 rounded-lg shadow-lg w-full max-w-lg'>
        <form onSubmit={handleSubmit} className='space-y-6'>

          {/* Tingkat Kelas */}
          <div>
            <label htmlFor="tingkat" className='block text-sm font-medium text-gray-700'>Tingkat Kelas *</label>
            <select
              id="tingkat"
              value={tingkat}
              onChange={(e) => {
                setTingkat(e.target.value);
                setKelas('');
                setNama('');
                setSelectedSiswa(null);
                setSubmitted(false);
              }}
              required
              className='mt-1 p-3 w-full border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500'
            >
              <option value="">-- Pilih Tingkat Kelas --</option>
              <option value="x">X</option>
              <option value="xi">XI</option>
              <option value="xii">XII</option>
            </select>
          </div>

          {/* Kelas */}
          <div>
            <label htmlFor="kelas" className='block text-sm font-medium text-gray-700'>Kelas *</label>
            <select
              id="kelas"
              value={kelas}
              onChange={(e) => {
                setKelas(e.target.value);
                setNama('');
                setSelectedSiswa(null);
                setSubmitted(false);
              }}
              required
              className='mt-1 p-3 w-full border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500'
            >
              <option value="">-- Pilih Kelas --</option>
              {tingkat && Object.keys(dummyData[tingkat] || {}).map(k => (
                <option key={k} value={k}>{k}</option>
              ))}
            </select>
          </div>

          {/* Nama Siswa */}
          <div>
            <label htmlFor="nama" className='block text-sm font-medium text-gray-700'>Nama Siswa *</label>
            <select
              name="nama"
              id="nama"
              value={nama}
              onChange={(e) => setNama(e.target.value)}
              required
              className='mt-1 p-3 w-full border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500'
            >
              <option value="">-- Pilih Nama Siswa --</option>
              {getSiswaList().map((s, idx) => (
                <option key={idx} value={s.name}>{s.name}</option>
              ))}
            </select>
          </div>

          {/* Submit Button */}
          <div className='flex justify-center'>
            <button
              type="submit"
              className='mt-6 bg-indigo-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50'
            >
              Submit
            </button>
          </div>
        </form>
      </div>

      {/* Result Section */}
      {submitted && (
        <div className="space-y-4 mt-10 w-full max-w-lg text-left">
          {selectedSiswa ? (
            <>
              <h2 className="text-xl font-semibold text-gray-700 border-b pb-2">Hasil:</h2>
              <Link
                to="/template-hasil"
                className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 p-5 bg-white border border-gray-200 rounded-xl shadow hover:shadow-md hover:bg-gray-50 transition"
              >
                <div>
                  <div className="text-lg font-bold text-indigo-600">{selectedSiswa.name}</div>
                  <div className="text-sm text-gray-500">Tingkat: {tingkat.toUpperCase()} - Kelas: {kelas}</div>
                </div>
                <div className="text-indigo-800 font-semibold text-md bg-indigo-100 px-4 py-2 rounded-full">
                  Poin: {selectedSiswa.poin}
                </div>
              </Link>
            </>
          ) : (
            <div className="text-red-500 font-medium">Siswa tidak ditemukan. Pastikan semua pilihan diisi dengan benar.</div>
          )}
        </div>
      )}
    </div>
  );
};

export default Individu;
