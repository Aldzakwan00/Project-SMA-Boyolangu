import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import HalamanPelanggaran from './pages/HalamanPelanggaran';
import Individu from './pages/Individu';
import Kelas from './pages/Kelas';
import TambahMateri from './pages/TambahMateri';
import NamaPerKelas from './pages/NamaPerKelas';
import TemplateHasil from './pages/TemplateHasil';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="halaman-pelanggaran" element={<HalamanPelanggaran />} />
        <Route path="individu" element={<Individu />} />
        <Route path="kelas" element={<Kelas />} />
        <Route path="tambah-materi" element={<TambahMateri />} />
        <Route path="kelas/nama-per-kelas" element={<NamaPerKelas />} /> 
        <Route path="template-hasil" element={<TemplateHasil />} />
      </Route>
    </Routes>
  );
}

export default App;
