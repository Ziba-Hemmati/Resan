import { BiGroup } from "react-icons/bi";

const Info = () => {
  return (
    <>
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
    </>
  );
};

export default Info;
