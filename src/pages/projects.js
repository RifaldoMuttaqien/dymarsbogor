import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import 'font-awesome/css/font-awesome.min.css';
import laundryImage from "../images/projects/laundry.png";
import Rumah2Lantai1 from "../images/projects/rumah-2lantai-1.jpg";
import RumahLantai1 from "../images/projects/rumah2.jpg";
import RumahLantai12 from "../images/projects/rumahlantai2-4.jpg";
import RumahLantai13 from "../images/projects/rumahlantai22.jpg";
import RumahLantai2 from "../images/projects/100b.jpg";
import RumahLantai21 from "../images/projects/rumahlantai2-3.jpg";
import RumahLantai22 from "../images/projects/rumah3.jpg";
import RumahLantai23 from "../images/projects/rumahlantai23.jpg";
import RumahLantai14 from "../images/projects/rumahlantai14.jpg";
import RumahLantai24 from "../images/projects/rumahlantai24.jpg";
import Caffe from "../images/projects/caffe.jpg";
import Caffe1 from "../images/projects/caffe1.jpg";
import Caffe2 from "../images/projects/caffe2.jpg";
import Caffe3 from "../images/projects/caffe3.jpg";
import Caffe4 from "../images/projects/caffe4.jpg";

const Projects = () => {
  const [fullImage, setFullImage] = useState(null);
  const [selectedProjects, setSelectedProjects] = useState([]);
  const [selectedTitle, setSelectedTitle] = useState("");

  const projects = [
    {
      id: 1,
      title: "Rumah Lantai 1",
      image: RumahLantai1,
    },
    {
      id: 2,
      title: "Rumah Lantai 1",
      image: RumahLantai12,
    },
   
    {
      id: 4,
      title: "Rumah Lantai 1",
      image: RumahLantai14,
    },
    
    {
      id: 6,
      title: "Caffe",
      image: laundryImage,
    },
    {
      id: 7,
      title: "Caffe",
      image: Caffe,
    },
    {
      id: 8,
      title: "Caffe",
      image: Caffe1,
    },
    {
      id: 9,
      title: "Caffe",
      image: Caffe2,
    },
    {
      id: 10,
      title: "Caffe",
      image: Caffe3,
    },
     {
      id: 11,
      title: "Rumah Lantai 2",
      image: RumahLantai2,
    },
     {
      id: 12,
      title: "Rumah Lantai 2",
      image: RumahLantai21,
    },
     {
      id: 13,
      title: "Rumah Lantai 2",
      image: RumahLantai22,
    },
     {
      id: 14,
      title: "Rumah Lantai 2",
      image: RumahLantai23,
    },
     
  ];

  const handleImageClick = (imageUrl) => {
    setFullImage(imageUrl);
  };

  const handleCloseModal = () => {
    setFullImage(null);
  };
   // Fungsi JavaScript untuk menampilkan gambar saat mengklik
  function showImage(imageSrc) {
    let popupImage = document.getElementById("popupImage");
    popupImage.src = imageSrc;

    let imagePopup = document.getElementById("imagePopup");
    imagePopup.style.display = "block";
    document.body.style.overflow = "hidden";
  }

  // Fungsi JavaScript untuk menyembunyikan gambar saat mengklik tombol silang
  function closeImage() {
    let imagePopup = document.getElementById("imagePopup");
    imagePopup.style.display = "none";
    document.body.style.overflow = "auto";
  }

  const handleProjectClick = (title) => {
    // Filter proyek berdasarkan judul
    const filteredProjects = projects.filter((p) => p.title === title);

    if (filteredProjects) {
      setSelectedProjects(filteredProjects);
      setSelectedTitle(title);
    }
  };

  return (
    <section>
      <Header />
      <div className="container mx-auto text-center">
        <div className="flex items-center">
          <h2 className="text-2xl font-bold my-1">Projects</h2>
        </div>
        <div>
          <button
            type="button"
            className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-blue shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
            onClick={() => handleProjectClick("Rumah Lantai 1")}
          >
            Rumah Lantai 1
          </button>
          <button
            type="button"
            className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-blue shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
            onClick={() => handleProjectClick("Rumah Lantai 2")}
          >
            Rumah Lantai 2
          </button>
          <button
            type="button"
            className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-blue shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
            onClick={() => handleProjectClick("Caffe")}
          >
            Caffe
          </button>
        </div>
      </div>
      <div className="container mx-auto mt-4">
        <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-5 gap-4">
          {selectedProjects.length > 0
            ? selectedProjects.map((project) => (
                <div key={project.id} className="relative">
                  <div className="flex justify-center items-center">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-auto max-w-100 max-h-100 cursor-pointer object-cover object-center"
                      onClick={() => handleImageClick(project.image)}
                    />
                  </div>
                </div>
              ))
            : projects.map((project) => (
                <div key={project.id} className="relative">
                  <div className="flex justify-center items-center">
                    <img
                      src={project.image}
                      alt={project.title}
                       className="w-full h-auto max-w-xs max-h-40 cursor-pointer object-cover object-center transform hover:scale-110 transition-transform duration-300 ease-in-out"
                      onClick={() => handleImageClick(project.image)}
                    />
                  </div>
                </div>
              ))}
        </div>
      </div>
     {fullImage && (
  <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-70">
    <div className="bg-white p-4">
      <img src={fullImage} alt="Full Project" />
      <button
        onClick={handleCloseModal}
        className="mt-4 bg-primary text-dark px-2 py-1 rounded"
      >
        <p>Tutup</p>
      </button>
    </div>
  </div>
)}
      
    </section>
  );
};

export default Projects;
