import axios from "axios";
import { Navigate, useParams } from "react-router-dom";
import Navbar from "../../components/Navbar";
import { useState, useEffect } from "react";
import Footer from "../../components/Footer";

const Lapangan = () => {
    const param = useParams();
    const [detailLapangan, setDetailLapangan] = useState({});

    const getDetailLapangan = () => {
        axios.get(`/db/list-lapangan/${param.id}`)
        .then((res) => {
            console.log(res);
            setDetailLapangan(res.data);
        })
        .catch((err) => {
            console.log(err);
        })
    }

    useEffect(() => {
        getDetailLapangan();
    }, [])

  return (
    <div>
      <Navbar />
      <div className="w-11/12 mx-auto">
        <p>{detailLapangan.sportsFieldCategory}</p>
      </div>
      <Footer />
    </div>
  );
};

export default Lapangan;
