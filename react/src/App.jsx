import React, { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import HalamanPelanggaran from './pages/HalamanPelanggaran';
import Individu from './pages/Individu';
import Kelas from './pages/Kelas';
import TambahMateri from './pages/TambahMateri';
import NamaPerKelas from './pages/NamaPerKelas';
import TemplateHasil from './pages/TemplateHasil';
import Login from './pages/Login';
import DashboardSiswa from './pages/Siswa/DashboardSiswa';
import HasilSiswa from './pages/Siswa/HasilSiswa';
import Profile from './pages/Siswa/Profile';
import PrivateRoute from './components/PrivateRoute';

function App() {

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      
      <Route
        path="/"
        element={
          <PrivateRoute>
            <Layout />
          </PrivateRoute>
        }
      >
        <Route path="/" element={<Dashboard />} />
        <Route path="halaman-pelanggaran" element={<HalamanPelanggaran />} />
        <Route path="individu" element={<Individu />} />
        <Route path="kelas" element={<Kelas />} />
        <Route path="tambah-materi" element={<TambahMateri />} />
        <Route path="kelas/nama-per-kelas" element={<NamaPerKelas />} />
        <Route path="template-hasil" element={<TemplateHasil />} />
        <Route path="dashboard-siswa" element={<DashboardSiswa />} />
        <Route path="hasil-siswa" element={<HasilSiswa />} />
        <Route path="profile" element={<Profile />} />
      </Route>
    </Routes>
  );
}

export default App;
