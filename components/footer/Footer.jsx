import Link from "next/link";
import { AiFillAndroid } from "react-icons/ai";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import footer from "@/assets/footer.png";
import Image from "next/image";
const footerItems = ["نسخه تلفن همراه", "شرایط", "جزئیات نشست", "تماس با ما"];

const Footer = () => {
  return (
    <div className="bg-[#3e3d42] w-full h-[270px] absolute top-[2190px] md:top-[1300px] text-[.7rem] text-white p-4">
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
      <div className="md:flex md:items-center md:my-4 md:mr-6  ">
        <Image src={footer} className="w-9 hidden md:inline-block " />
        <div className="md:text-[.6rem]">
        <p className="text-[.7rem] font-bold text-center pt-10 md:pt-0 md:pr-4 md:text-right leading-10" >رسان</p>
        <p className="hidden md:inline-block pr-4 ">تمام حقوق محفوظ است</p>
        </div>
      </div>
      <Link href={""}>
        <BsFillArrowUpCircleFill className="absolute left-4 bottom-4 text-lg" />
      </Link>
    </div>
  );
};

export default Footer;
