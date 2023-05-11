const index = () => {
  return (
    <div className=" w-[100%] h-[fit] p-10  bg-[#F04B08] text-white  mt-7  ">
      <p className="lg:text-4xl text-xl shrink-0 font-bold mt-[30px] ">
        LIMITED EDITION OG
      </p>
      <p className="pt-[40px] font-bold"> Investment Privilages</p>
      <p className=" max-w-[400px] pt-[30px]">
        Lorem ipsum dolor sit amet consectetur. Pretium quam volutpat cras
        viverra a nullam quis vitae neque. Volutpat erat eleifend gravida
        commodo nec aliquam ac. Convallis at pulvinar sapien diam id faucibus
        aliquam fringilla venenatis.
      </p>
      <div className="mt-5 ">
        <img src="/images/arrow.png" alt="Logo" width={200} height={200} />
      </div>

      <div className="flex flex-col items-start gap-4 mt-10">
        <div className="flex gap-3 ">
          <img src="/images/k1.png" alt="Logo" width={20} height={20} />
          <p> aliquam fringilla venenatis.</p>
        </div>
        <div className="flex gap-3">
          <img src="/images/k1.png" alt="Logo" width={20} height={20} />
          <p> aliquam fringilla venenatis.</p>
        </div>
      </div>
    </div>
  );
};

export default index;
