import Navbar from "../../../components/navbar/Navbar";
import Header from "../components/Header";

const FitnessCampion = () => {
  return (
    <div className="relative flex flex-col justify-between gap-3 sm:gap-4 md:gap-6 lg:gap-8 min-h-[100dvh] w-full bg-[url('/Background_Image.png')] bg-no-repeat bg-cover bg-center">
      <div className="navbar relative z-10 container mx-auto w-full px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10 pt-3 sm:pt-4 md:pt-6 lg:pt-8 xl:pt-10">
        <Navbar />
      </div>
      <div className="header-content container mx-auto w-full px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10 pb-3 sm:pb-4 md:pb-6 lg:pb-8 xl:pb-10">
        <Header />
      </div>
    </div>
  );
};

export default FitnessCampion;
