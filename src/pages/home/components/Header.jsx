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
    <div className="container gap-[18px] flex flex-col items-center justify-center p-[12px]">
      <div
        className="single-line w-[20%] flex items-center justify-center gap-[12px] 
               text-white bg-white/10 backdrop-blur-md 
               px-2 py-2 rounded-full"
      >
        <img src={logo.StarLogo} alt="StarLogo" />
        <span>{SmallText.SmartFitnessStartsHere}</span>
      </div>
      <div className="heading">
        <h1 className="text-white text-[64px] ">{Headings.HeaderHeading}</h1>
      </div>
      <div className="description">
        <span className="text-white text-[18px]">
          {Descriptions.HeaderDescription}
        </span>
      </div>
      <div className="training-details p-[12px] justify-between items-center flex w-[930px] h-[68px]  rounded-full bg-white">
        <div className="selector">
          <Selector />
        </div>
        {infoItems.map((item, index) => (
          <div key={index} className="info-item">
            <h5>{item.heading}</h5>
            <small className="text-gray-400">{item.description}</small>
          </div>
        ))}
        <div className="search-btn">
          <Button
            className="flex font-medium justify-center items-center p-[10px] w-[112px] cursor-pointer rounded-full bg-yellow-300 text-black"
            value={"Search"}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
