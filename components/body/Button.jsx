const Button = ({ children }) => {
  return (
    <div className="flex justify-end pl-2">
      <button className="border text-[.7rem] p-2 rounded-[6px] mb-8 mt-4 text-[#34ABE3] border-[#34ABE3] ">
        {children}
      </button>
    </div>
  );
};

export default Button;
