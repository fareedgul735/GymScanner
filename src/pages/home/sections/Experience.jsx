import { useRef } from "react";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";
import { Cards, Descriptions, Headings } from "../../../assets/labels/labels";

const GymExperience = () => {
  const scrollRef = useRef(null);

  const scroollerFun = (direction) => {
    if (scrollRef.current) {
      const cardWidth = 300;
      if (direction === "left") {
        scrollRef.current.scrollLeft -= cardWidth;
      } else {
        scrollRef.current.scrollLeft += cardWidth;
      }
    }
  };
  return (
    <div className="container lg:p-[38px] md:p-[38px] sm:p-[18px] p-[8px] flex flex-col animate-slideLeft">
      <div className="wrap w-[400px] md:w-auto lg:w-auto  flex gap-3 px-10 py-8 items-end justify-between">
        <div className="text md:text-left">
          <h1
            className="text-[22px] sm:text-[24px] md:text-2xl lg:text-4xl 
               text-white font-bold"
          >
            {Headings.ExpeHead}
          </h1>
          <small className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-400">
            {Descriptions.ExpeDesc}
          </small>
        </div>

        <div className="arrow-btns flex gap-3">
          <div
            onClick={() => scroollerFun("left")}
            className="flex justify-center items-center w-10 h-10 bg-white/10 text-white rounded-full backdrop-blur-md 
              transition-transform duration-300 ease-out
              hover:translate-x-2 hover:text-yellow-400 hover:scale-110 cursor-pointer"
          >
            <ArrowLeftOutlined />
          </div>
          <div
            onClick={() => scroollerFun("right")}
            className="flex justify-center items-center w-10 h-10 bg-white/10 text-white rounded-full backdrop-blur-md 
              transition-transform duration-300 ease-out
              hover:-translate-x-2 hover:text-yellow-400 hover:scale-110 cursor-pointer"
          >
            <ArrowRightOutlined />
          </div>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="cards-wrapper overflow-x-hidden flex gap-6 px-10 scroll-smooth scrollbar-hide"
      >
        {Cards.map((items, index) => (
          <div
            key={index}
            className="card min-w-[370px] max-w-[300px] bg-white/10 backdrop-blur-md 
               px-6 py-6 rounded-lg flex flex-col flex-shrink-0"
          >
            <div className="wrap flex gap-3 items-center ">
              <div className="avatar w-12 h-12 rounded-full overflow-hidden">
                <img
                  src={items.avatar}
                  alt="avatar"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="title text-white">
                <h4 className="text-lg font-semibold">{items.title}</h4>
              </div>
            </div>

            <div className="rating flex gap-2 items-center ">
              <img
                src={items.rating_logo}
                alt="rating"
                className="w-15 h-15 object-contain"
              />
              <small className="text-gray-200">{items.rating_point}</small>
            </div>

            <div className="desc text-gray-300 text-sm leading-relaxed">
              <small>{items.desc}</small>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GymExperience;
