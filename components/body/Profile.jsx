import Image from "next/image";
import profile from "@/assets/profile.jpg";
import Title from "./Title";
import Content from "./Content";
import Button from "./Button";
import { BiSolidUserCircle } from "react-icons/bi";
import { RiGroup2Fill } from "react-icons/ri";
import { useMemo } from "react";
import { FaAngleDown, FaRegCopy, FaRegComment } from "react-icons/fa";
import { BiGroup } from "react-icons/bi";
import { CiStar } from "react-icons/ci";
import { AiOutlineEllipsis } from "react-icons/ai";
// import dev from "@/assets/videos/dev.mp4"
import { FiHeart } from "react-icons/fi";

const Profile = () =>
  useMemo(() => {
    return (
      <div className="md:flex">
        <div className="absolute top-64 w-full md:w-[40%] px-4 md:left-0 md:mt-12">
          <Image
            src={profile}
            alt="Profile"
            className="w-36 rounded-full mx-auto border border-[#34ABE3] mb-11"
          />
          <div className="border border-[#34ABE3]"></div>
          <Title>درباره‌ من</Title>
          <Content className={"justify-center"}> زیبا همتی </Content>
          <Button>ویرایش</Button>
          <div className="border border-[#34ABE3]"></div>
          <Title>دوستان</Title>
          <Content className={"justify-center"}>
            <BiSolidUserCircle className="text-5xl text-gray-300" />
            <BiSolidUserCircle className="text-5xl text-gray-300" />
            <BiSolidUserCircle className="text-5xl text-gray-300" />
            <BiSolidUserCircle className="text-5xl text-gray-300" />
          </Content>
          <p className="text-[.7rem] mt-4 mr-2">تعداد دوستان: 35</p>
          <Button>مشاهده همه (35)</Button>
          <div className="border border-[#34ABE3]"></div>
          <Title>آلبوم تصاویر</Title>
          <Content className={"items-center"}>
            <Image
              src={profile}
              alt="Profile"
              className="w-10 border border-[#34ABE3] rounded-lg mr-2"
            />
            <p className="mr-2">رسالت</p>
          </Content>
          <Button>مشاهده همه (1)</Button>
          <div className="border border-[#34ABE3]"></div>
          <Title>گروه‌ها</Title>
          <Content className={"justify-center"}>
            <RiGroup2Fill className="text-5xl text-gray-300" />
            <RiGroup2Fill className="text-5xl text-gray-300" />
            <RiGroup2Fill className="text-5xl text-gray-300" />
            <RiGroup2Fill className="text-5xl text-gray-300" />
          </Content>
          <Button>مشاهده همه (1)</Button>
        </div>
        <div className="absolute top-[1160px] w-full md:w-[60%] md:top-64 px-4 md:mt-8">
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
                <div className="text-2xl leading-10">0</div>
                <span className="text-sm font-bold"> مطلب</span>
              </div>
            </div>
          </div>
          <div className="flex justify-between px-2">
            <Button>ویرایش نمایه</Button>
            <Button>
              مدیریت <FaAngleDown />
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
            <div className="flex">
              <div className="flex items-center border-b-2 border-black pb-3">
                <FaRegCopy className="text-[16px] ml-2" /> همه
              </div>
              <div className="flex items-center border-b-2 text-gray-400 pb-3 ">
                <CiStar className="text-xl ml-2 mr-4" /> برجسته‌ها
              </div>
            </div>
            <div className="border rounded-[6px] pt-8 pb-2 mt-8 ">
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
              <video controls src={"/dev.mp4"} className="w-56 mx-auto h-52" />
              <div className="flex justify-center pt-2 ">
                <div className="flex items-center justify-between w-56">
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
      </div>
    );
  }, []);

export default Profile;
