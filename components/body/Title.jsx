import { FaAngleUp } from "react-icons/fa";

const Title = ({ children }) => {
  return (
    <div className="flex justify-between px-2 py-4">
      <p className="text-[#34ABE3] text-[.7rem] font-bold">{children}</p>
      <FaAngleUp className="text-gray-400" />
    </div>
  );
};

export default Title;
