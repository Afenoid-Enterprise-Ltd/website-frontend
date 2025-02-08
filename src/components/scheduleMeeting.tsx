import React from "react";
import { Text, Button } from "../ui";
import { ScheduleMeetingImg } from "../assets";

interface ScheduleMeetingProps {
  openModal: () => void;
}

const ScheduleMeeting:React.FC<ScheduleMeetingProps> = (props) => {
  const {openModal} = props

  return (
    <div className="w-full">
      <div
        className="w-full h-[540px] bg-cover bg-no-repeat bg-center flex justify-between items-center px-[4rem] mmd:h-auto mmd:flex-col mmd:justify-start mmd:gap-10 mmd:py-16 msm:px-8 mxs:px-4 mxs:py-10"
        style={{ backgroundImage: `url(${ScheduleMeetingImg})` }}
      >
        <div className="w-[60%] mmd:w-full">
          <Text
            variant="h2"
            align="left"
            color="af-white"
            fontFamily="raleway"
            fontWeight="semi-bold"
            customClassName="text-[40px] mxs:text-[30px]"
          >
            Ready to have a conversation with us?
          </Text>
          <Text
            variant="h6"
            align="left"
            color="af-white"
            fontFamily="proxima-nova"
            fontWeight="regular"
            customClassName="text-[24px] !mxs:text-[16px]"
          >
            Schedule a meeting with a consultant right away.
          </Text>
          <Button
            variant="secondary"
            label="Schedule a Meeting"
            customClassName="mt-[2rem] border-white text-white"
            onClick={openModal}
          />
        </div>
      </div>
    </div>
  );
};

export { ScheduleMeeting };
