import React, { useRef, useState, useEffect } from 'react';
import fotosiswa from '../../assets/img/Anak_Baik.jpeg'; 

const HasilSiswa = () => {
  const printRef = useRef();

  const [catatan, setCatatan] = useState('');

  useEffect(() => {
    const savedCatatan = localStorage.getItem('catatan');
    if (savedCatatan) {
      setCatatan(savedCatatan);
    } else {
      setCatatan(
        'Untuk mempertahankan perilaku baiknya, disarankan untuk terus mengikuti kegiatan ekstrakurikuler dan berpartisipasi dalam program-program positif di sekolah. Semangat terus dalam belajar dan memberi contoh baik kepada teman-teman!'
      );
    }
  }, []);

  const handlePrint = () => {
    const printContents = printRef.current.innerHTML;
    const originalContents = document.body.innerHTML;

    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
    window.location.reload(); 
  };

  return (
    <div className="flex flex-col items-center p-5 min-h-screen">
      <div
        ref={printRef}
        className="w-full max-w-4xl bg-white p-8 rounded-xl shadow-lg print:shadow-none print:bg-white"
      >
        <h1 className="text-3xl font-bold text-center mb-8 text-indigo-700">
          Laporan Evaluasi Sikap Siswa
        </h1>

        <div className="flex w-full mt-6">
          <div className="w-1/3 flex justify-center items-start">
            <img
              src={fotosiswa}
              alt="Foto Siswa"
              className="w-40 h-52 object-cover rounded-md shadow-md"
            />
          </div>

          <div className="w-2/3 pl-6 flex flex-col justify-center">
            <table className="w-full text-lg">
              <tbody>
                <tr>
                  <td className="font-semibold w-32 align-top">Nama</td>
                  <td className="pr-2">:</td>
                  <td>Denis</td>
                </tr>
                <tr>
                  <td className="font-semibold align-top">Kelas</td>
                  <td>:</td>
                  <td>X-1</td>
                </tr>
                <tr>
                  <td className="font-semibold align-top">Jumlah Poin</td>
                  <td>:</td>
                  <td>5</td>
                </tr>
                <tr>
                  <td className="font-semibold align-top">Kategori</td>
                  <td>:</td>
                  <td>Baik</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-2 text-indigo-600">Keterangan</h2>
          <p className="text-gray-700 text-justify">
            Selama mengikuti kegiatan belajar di sekolah, Denis menunjukkan sikap sangat baik dalam hal
            kedisiplinan, tanggung jawab, dan kepatuhan terhadap peraturan. Jumlah poin pelanggaran yang rendah
            mencerminkan kemampuan siswa dalam menjaga perilaku secara konsisten dan positif.
          </p>
        </div>

        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-2 text-indigo-600">Catatan / Apresiasi Guru</h2>
          <p className="text-gray-700 text-justify whitespace-pre-line">{catatan}</p>
        </div>
      </div>

      <button
        onClick={handlePrint}
        className="mt-8 bg-indigo-600 text-white px-6 py-2 rounded-lg shadow hover:bg-indigo-700 transition print:hidden"
      >
        Cetak Hasil
      </button>
    </div>
  );
};

export default HasilSiswa;
