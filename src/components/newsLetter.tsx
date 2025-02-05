import { Text } from "../ui";

const Newsletter = () => {
  return (
    <div className="bg-afenoid-dark-green mx-[5rem] mmd:mx-[2rem] ">
      <div className="w-full flex justify-between items-center p-[4rem] mlg:flex-col mlg:items-start mxs:px-4">
        <div className="w-[40%] mmd:w-full">
          <Text
            variant="h2"
            align="left"
            color="af-white"
            fontFamily="raleway"
            fontWeight="bold"
            customClassName="text-[40px] mmd:!text-[32px] mmd:!font-medium mxs:!text-[28px]"
          >
            Newsletter
          </Text>
          <Text
            variant="h6"
            align="left"
            color="af-white"
            fontFamily="proxima-nova"
            fontWeight="regular"
            customClassName="text-[24px] mxs:!text-[16px] my-4"
          >
            Sign up to receive the <br /> Comformeter Newsletter
          </Text>
        </div>
        <div className="w-[60%] mt-4 mlg:w-full">
          <form action="">
            <div className="flex flex-col">
              <label
                htmlFor="email"
                className="uppercase text-white font-proxima-nova text-base font-semibold"
              >
                Email Address <span className="text-red-700 text-2xl">*</span>
              </label>
              <div className="w-full flex justify-start items-center gap-4 mmd:flex-col mmd:items-start">
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="w-[80%] h-full p-4 outline-none border-none placeholder:text-gray-300 placeholder:font-proxima-nova  mmd:w-full"
                  placeholder="ndubuisi@afenoid.com"
                />
                <button className="text-white font-proxima-nova border-white border-2 py-3.5 px-[2.5rem] hover:bg-afenoid-lemon hover:border-afenoid-lemon">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export { Newsletter };
