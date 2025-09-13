import {
  Descriptions,
  Headings,
  infoItems,
  logo,
  SmallText,
} from "../../../assets/labels/labels.jsx";
import Button from "../../../components/button/Button.jsx";
import Selector from "../../../components/select/Selector.jsx";

const Header = () => {
  return (
    <div className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center text-center gap-4 sm:gap-5 md:gap-6 lg:gap-8 px-3 sm:px-4 md:px-6">
      <div className="single-line inline-flex items-center justify-center gap-2 sm:gap-3 text-white text-xs sm:text-sm bg-white/10 backdrop-blur-md px-3 sm:px-4 py-1.5 sm:py-2 rounded-full">
        <img src={logo.StarLogo} alt="StarLogo" />
        <span>{SmallText.SmartFitnessStartsHere}</span>
      </div>
      <div className="heading">
        <h1
          className="text-white font-extrabold leading-tight 
               text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl"
        >
          {Headings.HeaderHeading}
        </h1>
      </div>
      <div className="description">
        <span
          className="text-white/90 
               text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl"
        >
          {Descriptions.HeaderDescription}
        </span>
      </div>
      <div
        className="training-details 
             w-full max-w-[930px] 
             flex flex-col md:flex-row 
             items-stretch md:items-center md:justify-between 
             gap-3 sm:gap-4 md:gap-6 
             bg-white/95 backdrop-blur-md shadow-md 
             rounded-xl sm:rounded-2xl md:rounded-full 
             px-3 sm:px-4 md:px-5 
             py-3 sm:py-4"
      >
        <div className="selector w-full md:w-auto">
          <Selector />
        </div>

        {infoItems.map((item, index) => (
          <div
            key={index}
            className="info-item 
                 flex flex-col items-start md:items-center 
                 w-full md:w-auto 
                 text-sm sm:text-base md:text-lg"
          >
            <h5 className="font-semibold">{item.heading}</h5>
            <small className="text-gray-400">{item.description}</small>
          </div>
        ))}

        <div className="search-btn w-full md:w-auto">
          <Button
            className="flex font-medium justify-center items-center 
                 px-4 py-2 
                 w-full md:w-[112px] 
                 cursor-pointer rounded-full 
                 bg-yellow-300 text-black"
            value={"Search"}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
