import React from "react";

const Metrics = () => {
  return (
    <div>
      <div className="container mx-auto">
        <div className="flex flex-col">
          <div className="grid md:grid-cols-2 grid-cols-1 gap-8"> {/* Mengubah jumlah kolom menjadi 2 */}
            <div className="md:col-span-1 flex xl:flex-row md:flex-col flex-row xl:gap-4 md:gap-0 gap-4 xl:items-center md:items-start items-center">
              <p className="text-body-sm font-normal tracking-wider pt-2">
                ARSITEK <br></br>TERBAIK
              </p>
            </div>
            <div className="md:col-span-1 flex xl:flex-row md:flex-col flex-row xl:gap-4 md:gap-0 gap-4 xl:items-end md:items-end items-end justify-end"> {/* Menggunakan justify-end untuk menggeser ke kanan */}
              <p className="font-display md:text-display-xl text-display-lg font-normal">
                100+
              </p>
              <p className="text-body-sm font-normal tracking-wider pt-2">
                PROJECTS TER-SELESAIKAN <br></br>ON INDONESIA
              </p>
            </div>
          </div>
          <div className="md:mt-20 md:pb-12 mt-12 pb-12">
            <hr className="text-neutral-300"></hr>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Metrics;
