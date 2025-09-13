import { Descriptions, Headings } from "../../../assets/labels/labels.jsx";
import Button from "../../../components/button/Button";

const DiveWrap = () => {
  return (
    <div className="container my-[22px]  p-[18px] flex justify-center items-center animate-slideLeft">
      <div className="background-image rounded-[28px] p-[18px] flex flex-col justify-center items-center gap-[12px] bg-[url('/bg.png')] w-[1280px] h-[439px]">
        <div className="heading">
          <h2 className="text-white text-[22px] sm:text-[28px] md:text-[28px] lg:text-[48px]">
            {Headings.DiveHead}
          </h2>
        </div>
        <div className="desc">
          <small className="text-gray-400 text-center text-[12px] sm:text-[16px] md:text-[18px] lg:text-[22px]">
            {Descriptions.DiveDes}
          </small>
        </div>
        <div className="btn">
          <Button
            className="flex font-medium justify-center items-center p-[10px] w-[112px] rounded-lg bg-yellow-300 text-white transition-transform duration-300 ease-out hover:-translate-x-2 hover:scale-110 cursor-pointer"
            value={"Get Funded"}
          />
        </div>
      </div>
    </div>
  );
};

export default DiveWrap;
