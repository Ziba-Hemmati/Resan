import Link from "next/link";
import { AiFillAndroid } from "react-icons/ai";
import { BsFillArrowUpCircleFill } from "react-icons/bs";

const footerItems = ["نسخه تلفن همراه", "شرایط", "جزئیات نشست", "تماس با ما"];

const Footer = () => {
  return (
    <div className="bg-[#3e3d42] w-full h-[270px] absolute top-[1600px] md:top-[1250px] text-[.7rem] text-white p-4">
      <div className="flex justify-center flex-wrap items-center mb-10">
        {footerItems.map((item, index) => {
          return (
            <div key={item}>
              {item}
              {!(footerItems.length - 1 === index) && (
                <span className="text-gray-400 mx-2 leading-10">|</span>
              )}
            </div>
          );
        })}
      </div>
      <button className="text-[.5rem] border border-gray-400 rounded-[6px] bg-[#444348] flex items-center py-1 px-2 mx-auto">
        <div className="flex flex-col items-end leading-[11px]">
          <div>Download</div> <div className="text-gray-400">Android App</div>
        </div>
        <AiFillAndroid className="text-lg mr-1" />
      </button>
      <p className="text-sm text-center pt-10">رسان</p>
      <Link href={""}>
        <BsFillArrowUpCircleFill className="absolute left-4 bottom-4 text-lg" />
      </Link>
    </div>
  );
};

export default Footer;
