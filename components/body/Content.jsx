import clsx from "clsx";

const Content = ({ children, className }) => {
  return (
    <div className={clsx("text-[.7rem] flex flex-wrap", className)}>
      {children}
    </div>
  );
};

export default Content;
