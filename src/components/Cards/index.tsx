const index = () => {
  return (
    <div className="flex flex-col justify-between gap-4 m-4 lg:flex-row ">
      <div className="">
        <div>
          <img
            className=" w-[90%] mx-auto"
            src="/frame/frame6.svg"
            alt="Logo"
            width={1000}
            height={1000}
          />
        </div>
       
      </div>

      {/* second part */}
      <div className="">
        {/* <div className=" border-[4px] border-[gray] border-dashed text-white p-[15px]"> */}
        <div>
          <img
            className=" w-[90%] mx-auto"
            src="/frame/frame5.svg"
            alt="Logo"
            width={1000}
            height={1000}
          />
        </div>
      
      </div>
    </div>
  );
};

export default index;
