import { FaAngleDown, FaRegCopy, FaRegComment } from "react-icons/fa";
import { BiGroup } from "react-icons/bi";
import { CiStar } from "react-icons/ci";
import { AiOutlineEllipsis } from "react-icons/ai";
import { FiHeart } from "react-icons/fi";
import Button from "./Button";
import Title from "./Title";
import Image from "next/image";
import profile from "@/assets/profile.jpg";


const Details = () => {
  return (
    <div className="absolute top-[1160px] w-full md:w-[60%] md:top-64 px-4 md:mt-8 lg:pr-40 ">
      <div className="border border-[#34ABE3]"></div>

      <div>
        <h2 className="font-bold text-lg mr-2 mt-8">زیبا همتی</h2>
        <div className="flex justify-between px-8 py-5 ">
          <div className="flex flex-col items-center">
            <div className="text-2xl leading-10">40</div>
            <span className="text-sm font-bold"> دنبال‌کننده</span>
          </div>

          <div className="flex flex-col items-center">
            <div className="text-2xl leading-10">35</div>
            <span className="text-sm font-bold"> دنبال‌شده</span>
          </div>

          <div className="flex flex-col items-center">
            <div className="text-2xl leading-10">1</div>
            <span className="text-sm font-bold"> مطلب</span>
          </div>
        </div>
      </div>
      <div className="flex justify-between px-2">
        <Button>ویرایش نمایه</Button>
        <Button>
          مدیریت <FaAngleDown className="mr-1 text-sm " />
        </Button>
      </div>

      <div className="border"></div>

      <div className="text-[.7rem]">
        <h3 className="font-bold mr-2 mt-4 text-sm">اطلاعات پایه</h3>
        <div className="flex mt-5">
          <p className="text-left w-[75px] ml-4 leading-6">اسم واقعی</p>
          <p className="flex items-center justify-between border-b w-full text-gray-400 pb-2">
            <span>زیبا همتی</span>
            <BiGroup className="text-xl" />
          </p>
        </div>
        <div className="flex my-4">
          <p className="text-left w-[75px] ml-4">جنسیت</p>
          <p className="flex items-center justify-between border-b w-full text-gray-400 pb-2">
            <span>زن</span>
            <BiGroup className="text-xl" />
          </p>
        </div>
        <div className="flex mb-8">
          <p className="text-left w-[75px] ml-4 leading-6">تاریخ ثبت‌نام</p>
          <p className="flex items-center justify-between w-full text-gray-400">
            <span>1401/11/18</span>
            <BiGroup className="text-xl" />
          </p>
        </div>
        <div className="border border-[#34ABE3] "></div>
        <Title>تازه‌ها</Title>
        <div className="md:flex mr-5 text-[13px] md:text-[.7rem] ">
          <div className="flex items-center md:border-b-2 w-[65px] border-black pb-2 md:pr-2 ">
            <div className="border-2 h-9 border-[#34ABE3] ml-3 md:hidden"></div>
            <FaRegCopy className="text-[16px] ml-2" /> همه
          </div>
          <div className="flex items-center md:border-b-2 md:w-[110px] text-gray-400 pb-2 bg-gray-100 md:bg-opacity-0 ">
            <div className="border-2 h-9 border-gray-300 ml-3 md:hidden"></div>
            <CiStar className="text-xl ml-2 md:mr-3" /> برجسته‌ها
          </div>
        </div>
        <div className="border border-gray-400 rounded-[6px] pt-[22px] pb-2 mt-8 ">
          <div className="flex items-center justify-between px-4 mb-8">
            <div className="flex items-center">
              <Image
                src={profile}
                alt="Profile"
                className="w-10 border border-[#34ABE3] rounded-full "
              />
              <h2 className="text-sm font-bold text-[#34ABE3] mr-2">
                زیبا همتی
              </h2>
            </div>
            <AiOutlineEllipsis className="text-xl text-gray-400" />
          </div>
          <video controls src={"/dev.mp4"} className="w-[80%] mx-auto h-48" />
          <div className="flex justify-center pt-2 ">
            <div className="flex items-center justify-between w-[80%]">
              <div className="flex items-center text-gray-500">
                <FaRegComment className="text-xl ml-2 " /> 0
                <FiHeart className="text-xl ml-2 mr-4 " /> 5
              </div>
              <div className="flex items-center text-gray-400">
                <BiGroup className="text-xl ml-2 text-gray-300" />
                19 شهریور 1402
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
