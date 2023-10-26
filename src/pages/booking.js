import React, { useState } from "react";
import Header from "../components/Header";

const Booking = () => {
  const [nama, setNama] = useState("");
  const [telepon, setTelepon] = useState("");
  const [tanggal, setTanggal] = useState("");
  const [alamat, setAlamat] = useState("");
  const [transfer, setTransfer] = useState("");
  const [tampilan, setTampilan] = useState("");

  const handleNamaChange = (event) => {
    setNama(event.target.value);
  };

  const handleTeleponChange = (event) => {
    setTelepon(event.target.value);
  };

  const handleTanggalChange = (event) => {
    setTanggal(event.target.value);
  };

  const handleAlamatChange = (event) => {
    setAlamat(event.target.value);
  };

  const kirim = () => {
    setTampilan(
      `Nama: ${nama}, telepon: ${telepon}, tanggal: ${tanggal}, Alamat: ${alamat}, Transfer: ${transfer} `
    );
  };

  return (
    <div>
      <Header />
      <nav className="navbar navbar-expand-lg mb-4">
        {/* Tambahkan konten navbar di sini */}
      </nav>

      <div className="center-container">
        <div className="container form-container">
          <h1 className="text-2xl font-bold text-gray-800 text-center mb-4">
            Form Buat Janji
          </h1>
          <form action="proses_booking.php" method="POST">
            <div className="mb-4">
              <label htmlFor="nama">Nama Lengkap:</label>
              <input
                type="text"
                className="w-full p-2 border rounded"
                id="nama"
                name="nama"
                value={nama}
                onChange={handleNamaChange}
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="telepon">Nomor Telepon:</label>
              <input
                type="text"
                className="w-full p-2 border rounded"
                id="telepon"
                name="telepon"
                value={telepon}
                onChange={handleTeleponChange}
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="tanggal">Tanggal Booking:</label>
              <input
                type="date"
                className="w-full p-2 border rounded"
                id="tanggal"
                name="tanggal"
                value={tanggal}
                onChange={handleTanggalChange}
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="alamat">Alamat</label>
              <textarea
                className="w-full p-2 border rounded"
                id="alamat"
                name="alamat"
                value={alamat}
                onChange={handleAlamatChange}
                rows="4"
              ></textarea>
            </div>

            <div className="mb-4">
              <label htmlFor="transfer">Foto Refrensi:</label>
              <input
                type="file"
                className="w-full p-2 border rounded"
                id="transfer"
                name="transfer"
                value={transfer}
                required
              />
            </div>

            <button
              onClick={kirim}
              type="button"
              className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-blue shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
            >
              Submit
            </button>
            <div id="tampilan">{tampilan}</div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Booking;
