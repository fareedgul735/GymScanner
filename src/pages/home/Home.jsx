import Footer from "../../components/footer/Footer";
import DiveWrap from "./sections/DiveWrap";
import FitnessCampion from "./sections/FitnessCampion";
import GymWorks from "./sections/GymWorks";
import PeopleScanner from "./sections/PeopleScanner";
import GymExperience from "./sections/Experience";

const Home = () => {
  return (
    <div className="main-container bg-black">
      <div className="fitness-campion">
        <FitnessCampion />
      </div>
      <div className="gym-works">
        <GymWorks />
      </div>
      <div className="people-scanner">
        <PeopleScanner />
      </div>
      <div className="experience">
        <GymExperience />
      </div>
      <div className="dive-wrapper">
        <DiveWrap />
      </div>
      <div className="footer flex justify-center items-center p-[18px]">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
