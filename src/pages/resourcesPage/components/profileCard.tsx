import { ProfileCardBg, ProfileCardBgMbl } from "../../../assets";
import { Text, Button } from "../../../ui";
import { useMediaQuery } from "@uidotdev/usehooks";
import { Link } from "react-router-dom";

const ProfileCard = () => {
  const isSmallDevice = useMediaQuery("only screen and (max-width: 800px)");

  return (
    <section>
      {!isSmallDevice ? (
        <div className="w-full my-[8rem]">
            <div
              className="relative w-full h-[600px] bg-cover bg-no-repeat bg-center flex justify-between items-center mmlg:h-[400px] mmlg:justify-start after:bg-[#214D1E80] after:h-full after:w-full after:absolute"   
              style={{ backgroundImage: `url(${ProfileCardBg})` }}
            >
              <div className="w-[70%] px-[4rem] mmlg:w-[90%]">
                <Text
                  variant="h2"
                  align="left"
                  color="af-white"
                  fontFamily="raleway"
                  fontWeight="bold"
                  customClassName="!text-[40px]"
                >
                Let's Be Part of Your Journey Towards Resilience
                </Text>
                <Text
                  variant="h6"
                  align="left"
                  color="af-white"
                  fontFamily="proxima-nova"
                  fontWeight="regular"
                  customClassName="text-[24px] mmlg:!text-[20px] mb-10"
                >
                Discover our service offerings and our approach in addressing risks across people, processes, and technology.
                </Text>
                <div>
                  <Link to="/case-studies">
                    <Button
                      variant="secondary"
                      label="Download Profile"
                      customClassName="border-white text-white"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
      ) : (
        <MobileProfileCard />
      )}
    </section>
  );
};

export { ProfileCard };


export const MobileProfileCard = () => {
  return (
    <div className="w-full my-[8rem]">
      <div className="bg-afenoid-green p-[4rem] mxs:px-4 mxs:p-8">
        <Text
          variant="h2"
          align="left"
          color="af-white"
          fontFamily="raleway"
          fontWeight="semi-bold"
          customClassName="!text-[30px]"
        >
          Let's Be Part of Your Journey Towards Resilience
        </Text>
        <Text
          variant="h6"
          align="left"
          color="af-white"
          fontFamily="proxima-nova"
          fontWeight="regular"
          customClassName="!text-[16px] mxxss:text-[14px] my-4"
        >
          Discover our service offerings and our approach in addressing risks across people, processes, and technology.
        </Text>
        <div>
          <Link to="/case-studies">
            <Button
              variant="secondary"
              label="Case Studies"
              customClassName="border-white text-white"
            />
          </Link>
        </div>
      </div>
      <div className="max-h-[300px] w-full overflow-hidden">
        <img
          src={ProfileCardBgMbl}
          alt="Image for Success Stories"
          className="w-full h-auto object-contain"
        />
      </div>
    </div>
  );
};

    // <div className="w-full my-[8rem]">
    //   <div
    //     className="relative w-full h-[600px] bg-cover bg-no-repeat bg-center flex justify-between items-center after:bg-[#214D1E80] after:h-full after:w-full after:absolute"
    //     style={{ backgroundImage: `url(${ProfileCardBg})` }}
    //   >
    //     <div className="w-[70%] px-[4rem] z-30">
    //       <Text
    //         variant="h2"
    //         align="left"
    //         color="af-white"
    //         fontFamily="raleway"
    //         fontWeight="bold"
    //         customClassName="!text-[40px] w-3/4"
    //       >
    //         Let's Be Part of Your Journey Towards Resilience
    //       </Text>
    //       <Text
    //         variant="h6"
    //         align="left"
    //         color="af-white"
    //         fontFamily="proxima-nova"
    //         fontWeight="regular"
    //         customClassName="!text-[24px] my-4 w-[70%]"
    //       >
    //         Discover our service offerings and our approach in addressing risks across people, processes, and technology.
    //       </Text>
    //       <div className="my-6">
    //           <Button
    //             variant="secondary"
    //             label="Download Profile"
    //             customClassName="border-white text-white"
    //           />
    //       </div>
    //     </div>
    //   </div>
    // </div>