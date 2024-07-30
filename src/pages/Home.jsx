import Navbar from "../components/Navbar";
import React, { useEffect, useState } from "react";
import booking from "../assets/img/booking.png";
import Footer from "../components/Footer";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  const [lapangan, setLapangan] = useState([]);

  const getLapangan = () => {
    axios
      .get("/db/list-lapangan.json")
      .then((res) => {
        console.log(res);
        setLapangan(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getLapangan();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="w-11/12 mx-auto">
        <div className="flex flex-col gap-4">
          <h1 className="mt-5 text-2xl font-bold">
            Selamat Datang Dibooking Lapangan Kota Palembang
          </h1>

          <div className="flex flex-col items-center justify-center p-4 border w-fit">
            <img
              src={booking}
              alt="bookingIcon"
              className="h-[40px] w-[40px]"
            />
            <p>Booking Lapangan</p>
          </div>
        </div>

        <section className="mt-5 mb-5 border-t">
          <h1 className="mt-5 mb-5 text-2xl font-bold">
            Lapangan Dikota Palembang
          </h1>
          <div className="flex gap-5">
            {lapangan.map((item) => {
              return (
                <div
                  key={item._id}
                  className="flex flex-col items-center justify-center p-4 border w-fit"
                >
                  <img
                    src={item.image}
                    alt="bookingIcon"
                    className="h-[40px] w-[40px]"
                  />
                  <div className="px-2 py-1 text-white bg-red-500 border rounded-2xl w-fit">
                    <p>{item.sportsFieldCategory}</p>
                  </div>

                  <p>{item.sportsFieldName}</p>
                  <p>{item.sportsFieldAddress}</p>

                  <Link to={`/lapangan/${item._id}`}>
                    <p className="font-semibold text-red-500">Lihat Lapangan</p>
                  </Link>
                </div>
              );
            })}
          </div>
        </section>

        <section className="mt-5 border-t">
          <h1 className="mt-5 mb-5 text-2xl font-bold">Berkas Terbaru</h1>

          <div className="flex p-4 mb-10 border w-fit">
            <img
              src={booking}
              alt="bookingIcon"
              className="h-[40px] w-[40px]"
            />
            <div>
              <div className="border-b">
                <p className="font-bold">Harry Maguire, S.Kom</p>
                <div className="flex gap-4">
                  <p>25 Januari 2024</p>
                  <p>-</p>
                  <p>10:28</p>
                </div>
              </div>
              <div>
                <p className="font-bold">Lapangan Bola Kamboja</p>
                <div className="flex justify-between gap-10">
                  <div className="flex gap-4">
                    <p>Sesi</p>
                    <p> </p>
                    <p>06:00 - 12:00</p>
                  </div>
                  <button className="px-2 py-1 text-white bg-red-500 border rounded-full">
                    On Progress
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
