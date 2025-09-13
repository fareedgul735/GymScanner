import {
  Descriptions,
  Headings,
  PeopleScannerDeatil,
} from "../../../assets/labels/labels.jsx";
import { Images } from "../../../config/Images";

const PeopleScanner = () => {
  return (
    <div className="container flex flex-col lg:flex-row flex-wrap justify-around items-start gap-4 py-8">
      <div className="background-image flex justify-start rounded-[32px] items-center bg-[url('/gym_man.jpg')] bg-cover w-full lg:w-[30%] h-[480px] relative">
        <img
          src={Images.Mask}
          alt="Background"
          className="
    w-[80%] h-auto     
    sm:w-[75%] sm:h-auto
    md:w-[70%] md:h-[70%] 
    lg:w-auto lg:h-auto 
    object-cover rounded-lg
  "
        />
      </div>
      <div className="people-scan-detail w-full lg:w-[38%]  flex flex-col gap-6">
        <div className="heading">
          <h2 className="text-[24px] sm:text-[28px] md:text-[36px] lg:text-[48px] font-bold text-white">
            {Headings.PepoleScannerHeading}
          </h2>
        </div>

        <div className="description">
          <small className="text-gray-300 text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px]">
            {Descriptions.PeopleScannerDes}
          </small>
        </div>

        <div className="wrap-details flex flex-wrap gap-4">
          {PeopleScannerDeatil.map((item, index) => (
            <div key={index} className="flex items-start gap-3 w-full">
              <div
                className="icon bg-white/10 p-4 rounded-lg backdrop-blur-md w-13 h-13 flex-shrink-0
                transition-transform duration-300 ease-out
                hover:-translate-x-2 hover:scale-110 cursor-pointer"
              >
                <img
                  src={item.icon}
                  alt="icons"
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="detail flex flex-col">
                <h4 className="text-white font-semibold">{item.title}</h4>
                <small className="text-gray-300">{item.des}</small>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PeopleScanner;
