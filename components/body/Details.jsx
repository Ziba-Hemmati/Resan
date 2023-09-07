import { FaAngleDown } from "react-icons/fa";
import Button from "./Button";
import Name from "./Name";
import Info from "./Info";
import Video from "./Video";

const Details = () => {
  return (
    <div className="absolute top-[1160px] w-full md:w-[60%] md:top-64 px-4 md:mt-8 lg:pr-40 ">
      <div className="border border-[#34ABE3]"></div>
      <Name />
      <div className="flex justify-between px-2">
        <Button>ویرایش نمایه</Button>
        <Button>
          مدیریت <FaAngleDown className="mr-1 text-sm " />
        </Button>
      </div>
      <div className="border"></div>
      <div className="text-[.7rem]">
        <Info />
        <div className="border border-[#34ABE3] "></div>
        <Video />
      </div>
    </div>
  );
};

export default Details;
