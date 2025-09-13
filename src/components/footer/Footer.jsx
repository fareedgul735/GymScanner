import { FooterLinks, Icons, logo } from "../../assets/labels/labels.jsx";

const Footer = () => {
  return (
    <div className="container flex justify-center items-center p-6 w-full max-w-[1320px] bg-white/10 rounded-[28px] backdrop-blur-md flex-shrink-0">
      <div className="footer-items flex flex-col md:flex-row justify-between w-full max-w-[1020px] gap-8 md:gap-0">
        {/* Logo Section */}
        <div className="logos flex flex-col justify-between items-center md:items-start gap-4">
          <span className="text-white cursor-pointer text-[22px] font-bold">
            {logo.GymBoy}
          </span>
          <span className="text-gray-400 text-[16px]">{logo.GymScan}</span>
        </div>

        {/* Links + Social Section */}
        <div className="wrapper flex flex-col items-center md:items-end gap-6">
          {/* Links */}
          <div className="wrap-links flex flex-col md:flex-row items-center md:items-start gap-6">
            {FooterLinks.map((items, index) => (
              <div
                key={index}
                className="links-wrap flex flex-col gap-2 text-center md:text-left"
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

          {/* Social Icons */}
          <div className="social-icons flex gap-4">
            {Icons.map((items, index) => (
              <div
                key={index}
                className="icon w-[38px] h-[38px] flex justify-center items-center bg-white/10 rounded-full backdrop-blur-md transition-transform duration-300 ease-out hover:-translate-x-2 hover:text-yellow-600 hover:scale-110 cursor-pointer"
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
