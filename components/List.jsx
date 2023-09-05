import { clsx } from "clsx";

const List = ({ item, index, menuItems }) => {
  return (
    <div
      key={item}
      className={clsx(
        `${
          menuItems.length - 1 === index
            ? "pt-6"
            : "border-b border-black pt-6 pb-3"
        }`,
        "mx-6 text-sm pr-4 text-gray-600"
      )}
    >
      {item}
    </div>
  );
};

export default List;
