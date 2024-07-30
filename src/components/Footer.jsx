import footer1 from "../assets/img/footer1.png";
import footer2 from "../assets/img/footer2.png";
import footer3 from "../assets/img/footer3.png";

const Footer = () => {
  return (
    <footer className="bg-blue-600 border-t h-[88px]">
      <div className="flex items-center justify-center h-full gap-10">
        <img src={footer1} alt="footer1" />
        <img src={footer2} alt="footer2" />
        <img src={footer3} alt="footer3" />
      </div>
    </footer>
  );
};

export default Footer;
