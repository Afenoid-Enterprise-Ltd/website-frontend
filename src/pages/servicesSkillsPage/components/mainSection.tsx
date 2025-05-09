import React from "react";
import { Text } from "../../../ui";
import { FaLocationDot } from "react-icons/fa6";
import { LuCalendarCheck2 } from "react-icons/lu";
import { RxSpeakerLoud } from "react-icons/rx";
import { GoPeople, GoVerified } from "react-icons/go";
import { TbMessage2Question } from "react-icons/tb";
import { RiFolderDownloadFill } from "react-icons/ri";
import { PiBank } from "react-icons/pi";

interface MainProps {
  title: string | undefined;
  image: string | undefined;
  description: string | undefined;
  subtitle: string | undefined;
  expectation: string | undefined ;
}

const MainSection: React.FC<MainProps> = (props) => {
  const { title, image, subtitle, description, expectation } = props;

  const expectations = [
    {
      icon: <FaLocationDot size={32} color="#0F261A" />,
      text: "Virtual/Physical Learning",
    },
    { icon: <LuCalendarCheck2 size={32} color="#0F261A" />, text: "5 Days" },
    { icon: <RxSpeakerLoud size={32} color="#0F261A" />, text: "English" },
    {
      icon: <GoPeople size={32} color="#0F261A" />,
      text: "Interactive Lessons",
    },
    { icon: <TbMessage2Question size={32} color="#0F261A" />, text: "Quizzes" },
    {
      icon: <RiFolderDownloadFill size={32} color="#0F261A" />,
      text: "Additional Resources",
    },
    { icon: <PiBank size={32} color="#0F261A" />, text: expectation },
    {
      icon: <GoVerified size={32} color="#0F261A" />,
      text: "Certificate of Completion",
    },
  ];

  return (
    <section>
      <div className="my-12">
        <Text
          variant="h3"
          align="center"
          fontFamily="gambetta"
          color="af-dark-green"
          fontWeight="medium"
        >
          
          {title?.split("*").map((part, index) => (
              <React.Fragment key={index}>
                {part}
                {index < title.split("*").length - 1 && (
                  <>
                    <br />
                  </>
                )}
              </React.Fragment>
            ))}
        </Text>
      </div>
      <div className="w-full h-[31.25rem] mb-8 msm:h-[234px]">
        <img
          src={image}
          alt="Services Skills Image"
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </div>

      <div className="w-full flex gap-6 mmd:flex-col">
        <div className="w-[60%] mmd:w-full">
          <Text
            variant="h3"
            align="left"
            fontFamily="gambetta"
            color="af-dark-green"
            fontWeight="medium"
            customClassName="mb-4"
          >
            {subtitle}
          </Text>
          <Text
            variant="h6"
            align="left"
            fontFamily="proxima-nova"
            color="af-dark-green"
            fontWeight="light"
            customClassName=""
          >
            {description?.split("*").map((part, index) => (
              <React.Fragment key={index}>
                {part}
                {index < description.split("*").length - 1 && (
                  <>
                    <br />
                    <br />
                  </>
                )}
              </React.Fragment>
            ))}
          </Text>
        </div>
        <div className="w-[40%] bg-afenoid-light-grey p-4 mmd:w-full">
          {expectations.map((expectationItem, index) => (
            <div key={index} className="p-4 flex items-center">
              <span className="text-2xl mr-6">{expectationItem.icon}</span>
              <span className="text-h5 text-afenoid-dark-green font-proxima-nova font-normal mxs:text-body-reg">
                {expectationItem.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { MainSection };
