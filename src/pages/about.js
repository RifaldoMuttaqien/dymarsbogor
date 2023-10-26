import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Caffe4 from "../images/about-creative.png";

const About = () => {
  return (
    <div>
      <Header />
      <nav className="bg-white shadow mb-4 p-4">
        <button
          className="lg:hidden navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </nav>

      <div className="flex">
        <div className="w-1/3 ml-16">
          <img
            src={Caffe4}
            className="w-full shadow-2xl rounded-lg mb-4"
            alt="Mountains in the Clouds"
          />
        </div>

        <div className="w-2/3 p-4">
          <h1 className="text-4xl font-bold mb-4 text-center">Dymars Studio</h1>
          <p className="text-gray-600 text-lg text-center">
            PT Dynamik Tjipta Kreasi (DYMARS), dengan tagline Design Your Model
            Architectures Solution. <br />
            <br />
            Kami adalah perusahaan jasa design & build, perencanaan dan
            konstruksi yang berdiri sejak tahun 2010, bekerjasama merealisasikan
            keinginan klien dalam mewujudkan rumah idaman dan bangunan yang
            diimpikan
          </p>

          <br />
          <br />

          <h1 className="text-4xl font-bold mb-4 text-center">VISI</h1>

          <p className="text-center">
            Menjadi perusahaan yang berkarya dengan profesionalisme,
            berorientasi pelanggan, serta berintegritas.
          </p>

          <h1 className="text-4xl font-bold mb-4 text-center">MISI</h1>

          <p className="text-center">
            Menghasilkan karya terbaik, menjalin relasi yang erat, mengembangkan
            SDM berkualitas, serta memiliki akuntabilitas
          </p>
        </div>
      </div>
      <br />
      <br />

      <h1 className="text-4xl font-bold mb-4 text-center">
        OUR JOURNEY PEKERJAAN KONSTRUKSI
      </h1>

      <div class="grid grid-cols-3">
        <div class="col-span-2">
          <div
            data-te-spy="scroll"
            data-te-target="#scrollspy1"
            data-te-offset="200"
            class="relative h-48 overflow-auto"
          >
            <section id="example-1">
              <h3 class="pb-3 pt-5 text-xl font-semibold text-center">2012</h3>
              <p className="text-center">
                - Pembangunan pabrik pt siskem di Purwakarta
              </p>
            </section>
            <section id="example-2">
              <h3 class="pb-3 pt-5 text-xl font-semibold text-center">2014</h3>
              <p className="text-center">
                - Pembangunan pabrik pt qiqn qu di Bogor
              </p>
            </section>
            <section id="example-3">
              <h3 class="pb-3 pt-5 text-xl font-semibold text-center">2016</h3>
              <p className="text-center">
                - Pembangunan rumah tinggal Bpk Widodo di Jakarta <br />
                - Pembangunan rumah tinggal Bpk Anin di Jakarta <br />
                - Pembangunan rumah tinggal Bpk Seno di Jakarta <br />
                - Pembangunan interior cafe Ibu Ani di Cibubur <br />
                - Pembangunan ruko Bpk Yose di Bekasi <br />
                - Pembangunan rumah tinggal Bpk Widodo di Jakarta Pembangunan
                interior apartemen Bpk Dedi <br /> di Jakarta
              </p>

              <section id="example-sub-A">
                <h3 class="pb-3 pt-5 text-xl font-semibold text-center">
                  2017
                </h3>
                <p className="text-center">
                  - Pembangunan rumah tinggal Bpk Dani di Bandung
                </p>
              </section>
              
            </section>
            
          </div>
        </div>

        <div>
          <div id="scrollspy1" class="sticky-top pl-3 text-sm">
            <ul data-te-nav-list-ref>
              <li class="py-1">
                <a
                  data-te-nav-link-ref
                  data-te-nav-link-active
                  class="bg-transparent px-[5px] text-neutral-600 shadow-none dark:text-neutral-200"
                  href="#example-1"
                >
                  2012
                </a>
              </li>
              <li class="py-1">
                <a
                  data-te-nav-link-ref
                  class="bg-transparent px-[5px] text-neutral-600 shadow-none dark:text-neutral-200"
                  href="#example-2"
                >
                  2014
                </a>
              </li>
              <li class="py-1">
                <a
                  data-te-nav-link-ref
                  class="bg-transparent px-[5px] text-neutral-600 shadow-none dark:text-neutral-200"
                  href="#example-3"
                >
                  2016
                </a>
                <ul data-te-nav-list-ref class="pl-3">
                  
                 
                </ul>
              </li>
             
            </ul>
          </div>
        </div>
      </div>
      <br />
      <br />

      <Footer />
    </div>
  );
};

export default About;
