import React from "react";
import { HandShakeImg } from "../assets";
import { Text, Button } from "../ui";

interface CompProps {
  openConsultationModal: () => void;
}

const ContactUs: React.FC<CompProps> = (props) => {
  const { openConsultationModal } = props;

  return (
    <div className="w-full my-[10rem] px-[5rem]">
      <div
        className=" w-full h-[500px] bg-cover bg-no-repeat bg-center flex justify-start items-center"
        style={{ backgroundImage: `url(${HandShakeImg})` }}
      >
        <div className="w-full px-[4rem]">
          <div className="flex flex-col w-[50%]">
            <Text
              variant="h2"
              align="left"
              color="af-white"
              fontFamily="raleway"
              fontWeight="bold"
              customClassName="!text-[40px]"
            >
              How can we help you?
            </Text>
            <Text
              variant="h6"
              align="left"
              color="af-white"
              fontFamily="proxima-nova"
              fontWeight="regular"
              customClassName="!text-[24px] my-4"
            >
              Need to make an inquiry? Reach out to us today and let’s discuss
              how we can support your organization.
            </Text>
            <div>
              <Button
                variant="secondary"
                label="Contact Us"
                onClick={openConsultationModal}
                customClassName="border-white text-white"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { ContactUs };
