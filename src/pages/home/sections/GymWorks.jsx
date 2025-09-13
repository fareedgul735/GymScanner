import {
  Descriptions,
  GymWorkDetail,
  Headings,
} from "../../../assets/labels/labels.jsx";

const GymWorks = () => {
  return (
    <div className="container w-[100%] h-auto flex flex-col items-center justify-center">
      <div className="gym-detail flex flex-col p-[18px] justify-center items-center animate-slideTop">
        <div className="heading">
          <h1
            className="text-white font-bold p-[6px] 
               text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl"
          >
            {Headings.GymWorksHeading}
          </h1>
        </div>
        <div className="description">
          <span
            className="text-gray-400 
               text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl"
          >
            {Descriptions.GymWorksDes}
          </span>
        </div>
      </div>
      <div className="gym-work-detail flex justify-center items-center gap-8 flex-wrap animate-slideLeft">
        <div className="gym-work-detail flex justify-center items-center gap-8 flex-wrap min-h-screen">
          {GymWorkDetail.map((items, index) => (
            <div
              key={index}
              className="flex flex-col justify-center items-center text-center"
            >
              <img
                src={items.icon}
                alt="logos"
                className="mb-2 w-100 h-100 object-contain"
              />
              <h5 className="text-white lg:text-[24px] sm:text-[16px] md:text-[18px]">
                {items.title}
              </h5>
              <small className="text-white lg:text-[18px] sm:text-[12px] md:text-[14px]">
                {items.description}
              </small>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GymWorks;
