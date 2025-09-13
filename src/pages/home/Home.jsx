import Footer from "../../components/footer/Footer";
import DiveWrap from "./sections/DiveWrap";
import FitnessCampion from "./sections/FitnessCampion";
import GymWorks from "./sections/GymWorks";
import PeopleScanner from "./sections/PeopleScanner";
import GymExperience from "./sections/Experience";

const Home = () => {
  return (
    <div className="main-container w-screen h-auto bg-black">
      <div className="fitness-campion w-auto h-auto">
        <FitnessCampion />
      </div>
      <div className="gym-works w-auto h-auto flex justify-center items-center">
        <GymWorks />
      </div>
      <div className="people-scanner  w-auto h-auto flex justify-center items-center">
        <PeopleScanner />
      </div>
      <div className="experience w-auto h-auto flex justify-center items-center">
        <GymExperience />
      </div>
      <div className="dive-wrapper w-auto h-auto flex justify-center items-center">
        <DiveWrap />
      </div>
      <div className="footer flex justify-center items-center p-[18px]">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
