import Image from "next/image";
import profile from "@/assets/profile.jpg";
import Title from "./Title";
import Content from "./Content";
import Button from "./Button";
import { BiSolidUserCircle } from "react-icons/bi";
import { RiGroup2Fill } from "react-icons/ri";
import { useMemo } from "react";

const Profile = () =>
  useMemo(() => {
    return (
      <div className="flex justify-center ">
        <div className="absolute top-64 w-full px-4 md:left-0">
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
          <p className="text-[.7rem] mt-4 pl-8">تعداد دوستان: 35</p>
          <Button>مشاهده همه (35)</Button>
          <div className="border border-[#34ABE3]"></div>
          <Title>آلبوم تصاویر</Title>
          <Content className={"items-center"}>
            <Image
              src={profile}
              alt="Profile"
              className="w-10 border border-[#34ABE3] rounded-lg"
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
        <div></div>
      </div>
    );
  }, []);

export default Profile;
