import { useCallback, useState } from "react";
import logo from "@/assets/logo.png";
import profile from "@/assets/profile.jpg";
import { GoBell } from "react-icons/go";
import { BiSearch } from "react-icons/bi";
import { RxHamburgerMenu } from "react-icons/rx";
import Image from "next/image";
import iran from "@/assets/iran.png";
import usa from "@/assets/usa.jpg";
import { clsx } from "clsx";
const menuItems = [
  "داشبورد",
  "اعضا",
  "تصاویو ",
  "ویدیوها",
  "هشتگ‌ها",
  "گروه‌ها",
];

const Banner = ({ handleMenu }) => {
  const [lang, setLang] = useState(false);
  const handleLang = useCallback(() => setLang((prev) => !prev), [lang]);
  return (
    <>
      <div className="banner border-b-4 border-blue-400 absolute">
        <div className="flex items-center justify-between">
          <div className="w-[60%] md:hidden">
            <RxHamburgerMenu
              className="mt-8 mr-4 text-xl text-white md:hidden "
              onClick={handleMenu}
            />
          </div>
          <Image
            alt="Logo"
            src={logo}
            width={30}
            className="mr-4 mt-8 hidden md:inline-block"
          />
          <div className="flex flex-row-reverse items-center text-white w-[40%] mt-8 ml-4">
            <Image
              alt="Profile"
              src={profile}
              className="w-[30px] h-[30px] rounded-full"
            />
            <GoBell className="text-lg mx-2" />
            <BiSearch className="text-xl" />
            <p onClick={handleLang} className="flex items-center text-sm ">
              فا
              <Image
                alt="Iran-Flag"
                src={iran}
                className="w-[12px] h-[12px] mx-2"
              />
            </p>
          </div>
        </div>
        <Image
          alt="Logo"
          src={logo}
          width={30}
          className="mx-auto mt-[120px] md:hidden"
        />
        <ul className="md:flex text-white justify-center mt-[120px] hidden text-sm">
          {menuItems.map((item, index) => {
            return (
              <li
                key={item}
                className={clsx(!(index === menuItems.length - 1) && "ml-8")}
              >
                {item}
              </li>
            );
          })}
        </ul>
      </div>
      {lang && (
        <div className="bg-white w-[124px] p-3 text-gray-500 rounded-md absolute top-[70px] left-4">
          <p className=" text-sm pb-3">
            فا
            <Image
              alt="Iran-Flag"
              src={iran}
              className="w-[12px] h-[12px] inline-block mr-1"
            />
          </p>
          <p className="text-sm">
            EN
            <Image
              alt="USA-Flag"
              src={usa}
              className="w-[12px] h-[12px] inline-block mr-1"
            />
          </p>
        </div>
      )}
    </>
  );
};

export default Banner;
