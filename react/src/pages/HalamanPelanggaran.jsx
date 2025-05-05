import React from 'react';

const HalamanPelanggaran = () => {
  return (
    <div className='flex flex-col items-center h-screen p-5 text-center'>
        <h1 className='text-3xl font-semibold text-gray-800 mb-10'>KONSEKUENSI POIN BUDAYA POSITIF</h1>
        <p className='text-lg text-gray-600 mb-12'>Guru dan staf Karyawan dapat memberikan poin konsekuensi kepada siswa</p>
        <div className='bg-white p-8 rounded-lg shadow-lg w-full max-w-lg'>
            <form action="" className='space-y-6'>
                {/* Tanggal */}
                <div>
                    <label htmlFor="tanggal" className='block text-sm font-medium text-gray-700'>Tanggal *</label>
                    <input type="date" id="tanggal" name="tanggal" required className='mt-1 p-3 w-full border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500'/>
                </div>
                
                {/* Hari */}
                <div>
                    <label htmlFor="hari" className='block text-sm font-medium text-gray-700'>Hari *</label>
                    <select id="hari" name="hari" required className='mt-1 p-3 w-full border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500'>
                        <option value="">-- Pilih Hari --</option>
                        <option value="senin">Senin</option>
                        <option value="selasa">Selasa</option>
                        <option value="rabu">Rabu</option>
                        <option value="kamis">Kamis</option>
                        <option value="jumat">Jumat</option>
                        <option value="sabtu">Sabtu</option>
                        <option value="minggu">Minggu</option>
                    </select>
                </div>
                
                {/* Jam */}
                <div>
                    <label htmlFor="jam" className='block text-sm font-medium text-gray-700'>Jam *</label>
                    <input type="time" id="jam" name="jam" required className='mt-1 p-3 w-full border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500'/>
                </div>
                
                {/* Tingkat Kelas */}
                <div>
                    <label htmlFor="tingkat" className='block text-sm font-medium text-gray-700'>Tingkat Kelas *</label>
                    <select id="tingkat" name="tingkat" required className='mt-1 p-3 w-full border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500'>
                        <option value="">-- Pilih Tingkat Kelas --</option>
                        <option value="x">X</option>
                        <option value="xi">XI</option>
                        <option value="xii">XII</option>
                    </select>
                </div>

                {/* Kelas */}
                <div>
                    <label htmlFor="kelas" className='block text-sm font-medium text-gray-700'>Kelas *</label>
                    <select id="kelas" name="kelas" required className='mt-1 p-3 w-full border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500'>
                        <option value="">-- Pilih Kelas --</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>

                {/* Nama Siswa */}
                <div>
                    <label htmlFor="nama" className='block text-sm font-medium text-gray-700'>Nama Siswa *</label>
                    <select name="nama" id="" className='mt-1 p-3 w-full border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500'>
                        <option value="">-- Pilih Nama Siswa --</option>
                        <option value="siswa1">Siswa 1</option>
                        <option value="siswa2">Siswa 2</option>
                        <option value="siswa3">Siswa 3</option>
                    </select>
                </div>

                {/* Pelanggaran */}
                <div>
                    <label htmlFor="pelanggaran" className='block text-sm font-medium text-gray-700'>Pelanggaran *</label>
                    <select name="pelanggaran" id="" className='mt-1 p-3 w-full border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500'>
                        <option value="">-- Pilih Pelanggaran --</option>
                        <option value="pelanggaran1">Pelanggaran 1</option>
                        <option value="pelanggaran2">Pelanggaran 2</option>
                        <option value="pelanggaran3">Pelanggaran 3</option>
                    </select>
                </div>

                {/* Bukti */}
                <div>
                    <label htmlFor="bukti" className='block text-sm font-medium text-gray-700'>Upload Foto Bukti *</label>
                    <input type="file" id="bukti" name="bukti" accept="image/*" required className='mt-1 p-3 w-full border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500'/>
                </div>

                {/* Submit Button */}
                <div className='flex justify-center'>
                    <button type="submit" className='mt-6 bg-indigo-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50'>
                        Submit
                    </button>
                </div>
            </form>
        </div>
    </div>
  );
};

export default HalamanPelanggaran;
