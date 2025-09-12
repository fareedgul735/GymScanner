import {
  Descriptions,
  GymWorkDetail,
  Headings,
} from "../../../assets/labels/labels.jsx";

const GymWorks = () => {
  return (
    <div className="container  h-auto flex flex-col items-center justify-center">
      <div className="gym-detail flex flex-col p-[18px] justify-center items-center">
        <div className="heading">
          <h1 className="text-[48px] p-[6px] text-white">
            {Headings.GymWorksHeading}
          </h1>
        </div>
        <div className="description">
          <span className="text-[18px] text-gray-400">
            {Descriptions.GymWorksDes}
          </span>
        </div>
      </div>
      <div className="gym-work-detail flex justify-center items-center gap-8 flex-wrap">
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
              <h5 className="text-white text-[24px]">{items.title}</h5>
              <small className="text-white text-[18px]">
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
