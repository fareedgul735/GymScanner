import { FooterLinks, Icons, logo } from "../../assets/labels/labels.jsx";

const Footer = () => {
  return (
    <div className="container flex justify-center items-center p-[18px] w-[1320px] h-[376px] bg-white/10 p-4 rounded-[28px] backdrop-blur-md flex-shrink-0">
      <div className="footer-items flex justify-between w-[1020px] h-[246px]">
        <div className="logos h-[236px] flex flex-col justify-between ">
          <span className="text-white cursor-pointer text-[22px] font-bold">
            {logo.GymBoy}
          </span>
          <span className="text-gray-400 text-[16px]">{logo.GymScan}</span>
        </div>
        <div className="wrapper flex flex-col items-end">
          <div className="wrap-links flex">
            {FooterLinks.map((items, index) => (
              <div
                key={index}
                className="links-wrap gap-[18px] mx-[28px] h-[236px] flex flex-col "
              >
                <h5 className="text-white text-[18px] hover:cursor-pointer hover:text-yellow-400">
                  {items.title}
                </h5>
                <small className="text-gray-400 text-[16px] hover:cursor-pointer hover:text-yellow-400">
                  {items.link_1}
                </small>
                <small className="text-gray-400 text-[16px] hover:cursor-pointer hover:text-yellow-400">
                  {items.link_2}
                </small>
                <small className="text-gray-400 text-[16px] hover:cursor-pointer hover:text-yellow-400">
                  {items.link_3}
                </small>
              </div>
            ))}
          </div>
          <div className="social-icons mx-[28px] flex gap-[18px]">
            {Icons.map((items, index) => (
              <div
                key={index}
                className="icon  w-[38px] h-[38px] flex justify-center items-center bg-white/10 p-4 rounded-full backdrop-blur-md flex-shrink-0transition-transform duration-300 ease-out hover:-translate-x-2 hover:text-yellow-600 hover:scale-110 cursor-pointer"
              >
                <span>{items}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
