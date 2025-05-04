import React from "react";
import { HandShakeImg, HandShakeImgMbl } from "../assets";
import { Text, Button } from "../ui";
import { useMediaQuery } from "@uidotdev/usehooks";
import { Link } from "react-router-dom";

const ContactUs: React.FC = () => {
  const isSmallDevice = useMediaQuery("only screen and (max-width: 639px)");

  return (
    <div>
      {!isSmallDevice ? (
        <div className="w-full my-[8rem] px-[5rem] mmlg:px-[3rem] mmd:px-0 ">
          <div
            className=" w-full h-[500px] bg-cover bg-no-repeat bg-center flex justify-start items-center"
            style={{ backgroundImage: `url(${HandShakeImg})` }}
          >
            <div className="w-full px-[4rem]">
              <div className="flex flex-col w-[50%] mmlg:w-[60%] mmd:w-[70%]">
                <Text
                  variant="h2"
                  align="left"
                  color="af-white"
                  fontFamily="raleway"
                  fontWeight="bold"
                  customClassName="text-[40px] mlg:!text-[32px] mmd:!text-[28px]"
                >
                  Reach out to us?
                </Text>
                <Text
                  variant="h6"
                  align="left"
                  color="af-white"
                  fontFamily="proxima-nova"
                  fontWeight="regular"
                  customClassName="!text-[24px] mlg:!text-[20px] mmd:!text-[14px] my-4"
                >
                  Need to make an inquiry? Reach out to us today and let’s
                  discuss how we can support your organization.
                </Text>
                <div>
                  <Link className="block" to="/contact-us">
                    <Button
                      variant="secondary"
                      label="Contact Us"
                      // onClick={openConsultationModal}
                      customClassName="border-white text-white"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <MobileContactUs  />
      )}
    </div>
  );
};

export { ContactUs };

export const MobileContactUs: React.FC = () => {

  return (
    <div className="w-full">
      <div className="bg-afenoid-green p-[4rem] mxs:p-8">
        <Text
          variant="h2"
          align="left"
          color="af-white"
          fontFamily="raleway"
          fontWeight="semi-bold"
          customClassName="!text-[30px]"
        >
          How can we help you?
        </Text>
        <Text
          variant="h6"
          align="left"
          color="af-white"
          fontFamily="proxima-nova"
          fontWeight="regular"
          customClassName="!text-[16px] mxxss:text-[14px] my-4"
        >
          Need to make an inquiry? Reach out to us today and let’s discuss how
          we can support your organization.
        </Text>
        <Link className="block" to="/contact-us">
          <Button
            variant="secondary"
            label="Contact Us"
            // onClick={openConsultationModal}
            customClassName="border-white text-white"
          />
        </Link>
      </div>
      <div className="max-h-[300px] w-full overflow-hidden">
        <img src={HandShakeImgMbl} alt="Contact Us Image" />
      </div>
    </div>
  );
};
