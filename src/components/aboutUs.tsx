import { AboutUsLinkBg } from "../assets";
import { Text, Button } from "../ui";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div className="w-full">
      <div
        className=" w-full h-[400px] bg-cover bg-no-repeat bg-center flex justify-between items-center px-[4rem]"
        style={{ backgroundImage: `url(${AboutUsLinkBg})` }}
      >
        <div className="w-[50%]">
          <Text
            variant="h2"
            align="left"
            color="af-white"
            fontFamily="raleway"
            fontWeight="semi-bold"
            customClassName="!text-[40px]"
          >
            Our Way
          </Text>
          <Text
            variant="h6"
            align="left"
            color="af-white"
            fontFamily="proxima-nova"
            fontWeight="regular"
            customClassName="!text-[24px]"
          >
            Here's why we are the best provider for your IT governance, risk,
            and compliance solutions.
          </Text>
        </div>
        <div className="w-[30%] flex justify-center items-center">
          <Link to= "/about-us">
            <Button
              variant="secondary"
              label="About Us"
              customClassName="border-white text-white"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export { AboutUs };
