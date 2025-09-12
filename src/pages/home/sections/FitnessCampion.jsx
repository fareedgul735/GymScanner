import Navbar from "../../../components/navbar/Navbar";
import Header from "../components/Header";

const FitnessCampion = () => {
  return (
    <div className="container gap-[12px] flex flex-col justify-between p-[12px] relative w-full h-screen bg-cover bg-center bg-[url('/Background_Image.png')]">
      <div className="navbar relative z-10">
        <Navbar />
      </div>
      <div className="header-content">
        <Header />
      </div>
    </div>
  );
};

export default FitnessCampion;
