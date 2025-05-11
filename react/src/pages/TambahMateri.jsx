import React, { useState } from 'react'

const TambahMateri = () => {
  const [selectedFile, setSelectedFile] = useState(null)

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0])
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (selectedFile) {
      alert(`Berhasil upload: ${selectedFile.name} (dummy)`)
      setSelectedFile(null)
      e.target.reset()
    } else {
      alert('Mohon pilih file PDF terlebih dahulu')
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#e6f7f9] p-4">
      <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md text-center border-t-8 border-[#186c7c]">
        <h1 className="text-3xl font-bold text-[#186c7c] mb-6">Upload Materi PDF</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="file"
            accept="application/pdf"
            onChange={handleFileChange}
            className="border border-gray-300 rounded px-3 py-2"
          />
          <button
            type="submit"
            className="bg-[#186c7c] text-white py-2 px-4 rounded hover:bg-[#145b6b] transition duration-200"
          >
            Upload
          </button>
        </form>
        {selectedFile && (
          <p className="mt-4 text-sm text-gray-600">
            File dipilih: <strong>{selectedFile.name}</strong>
          </p>
        )}
      </div>
    </div>
  )
}

export default TambahMateri
