const Name = () => {
  return (
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
          <div className="text-2xl leading-10">1</div>
          <span className="text-sm font-bold"> مطلب</span>
        </div>
      </div>
    </div>
  );
};

export default Name;
