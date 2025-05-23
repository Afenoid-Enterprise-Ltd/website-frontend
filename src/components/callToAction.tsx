import React from "react";
import { Text } from "../ui";

type CallToActionProps = {
  title: string;
  explanation: string;
  button: React.ReactNode;
};

const CallToAction: React.FC<CallToActionProps> = ({
  title,
  explanation,
  button,
}) => {
  return (
    <div className="w-full flex justify-center items-center my-[10rem] px-[3rem] mmd:px-[2.5rem] msm:px-[2rem] msm:my-24">
      <div className="w-[60%] flex flex-col justify-center items-center gap-3 mmd:w-[70%] msm:w-[80%] mxs:w-full">
        <Text
          variant="h3"
          align="center"
          color="af-dark-green"
          fontWeight="medium"
        >
          {title}
        </Text>
        <Text
          variant="h5"
          color="af-dark-green"
          align="center"
          fontWeight="light"
          fontFamily="proxima-nova"
        >
          {explanation}
        </Text>
        {button}
      </div>
    </div>
  );
};

export { CallToAction };
