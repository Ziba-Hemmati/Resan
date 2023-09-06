import List from "./List";
import { IoMdClose } from "react-icons/io";
const menuItems = [
  "داشبورد",
  "اعضا",
  "تصاویو ",
  "ویدیوها",
  "هشتگ‌ها",
  "گروه‌ها",
];

const Menu = ({ handleMenu }) => {
  return (
    <div
      className={`w-[320px] h-screen bg-white z-[2] relative top-0 right-0 pt-8 px-4`}
    >
      <IoMdClose onClick={handleMenu} className="text-2xl mb-10" />
      {menuItems.map((item, index) => {
        return (
          <List key={item} item={item} index={index} menuItems={menuItems} />
        );
      })}
    </div>
  );
};

export default Menu;
