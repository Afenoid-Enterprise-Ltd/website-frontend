import React from "react";
import { Text } from "../../../ui";
import { GoShieldCheck, GoOrganization, GoPeople } from "react-icons/go";
import { IoWarningOutline } from "react-icons/io5";
import { FaTasks } from "react-icons/fa";
import { AiOutlineFileSearch } from "react-icons/ai";
import { VscTools, VscNotebook, VscChecklist, VscSync } from "react-icons/vsc";
import { MdOutlineGroups2 } from "react-icons/md";
import { BsPersonWorkspace } from "react-icons/bs";

const iconMapping: { [key: string]: React.ComponentType<{ size?: number }> } = {
  GoShieldCheck,
  GoOrganization,
  FaTasks,
  IoWarningOutline,
  AiOutlineFileSearch,
  VscTools,
  MdOutlineGroups2,
  GoPeople,
  VscNotebook,
  VscChecklist,
  VscSync,
  BsPersonWorkspace
};

interface TableProps {
  gains: { icon: any; benefit: string }[] | undefined;
  attendees: { icon: any; benefit: string }[] | undefined;
}

const TableSection: React.FC<TableProps> = ({ gains, attendees }) => {
  const changeToComponent = (iconName: string, size: number = 32) => {
    const IconComponent = iconMapping[iconName]; // Find component by name
    return IconComponent ? <IconComponent size={size} /> : null;
  };

  return (
    <section>
       <Text
        variant="h3"
        align="center"
        fontFamily="proxima-nova"
        color="af-dark-green"
        fontWeight="regular"
        customClassName="my-[5rem] uppercase"
      >
        Key Benefits
      </Text>

      <div className="grid grid-cols-2 border-y msm:grid-cols-1">
        {gains?.map((item, index) => {
          const realIndex = index + 1;

          return (
            <div
              className={`flex items-center justify-start p-8 ${
                index % 2 === 0 ? "border-r msm:border-r-0" : ""
              } ${
                gains.length === realIndex || gains.length - 1 === realIndex
                  ? "msm:border-b"
                  : "border-b"
              } `}
              key={index}
            >
              <span className="mr-4">{changeToComponent(item.icon)}</span>
              <Text
                variant="h5"
                align="left"
                fontFamily="proxima-nova"
                fontWeight="light"
              >
                {item.benefit}
              </Text>
            </div>
          );
        })}
      </div>

      <Text
        variant="h3"
        align="center"
        fontFamily="proxima-nova"
        color="af-dark-green"
        fontWeight="regular"
        customClassName="my-[5rem] uppercase"
      >
        Who Should Attend?
      </Text>

      <div className="grid grid-cols-2 border-y msm:grid-cols-1">
        {attendees?.map((item, index) => {
          const realIndex = index + 1;

          return (
            <div
              className={`flex items-center justify-start p-8 ${
                index % 2 === 0 ? "border-r msm:border-r-0" : ""
              } ${
                attendees.length === realIndex || attendees.length - 1 === realIndex
                  ? "msm:border-b"
                  : "border-b"
              }`}
              key={index}
            >
              <span className="mr-4">{changeToComponent(item.icon)}</span>
              <Text
                variant="h5"
                align="left"
                fontFamily="proxima-nova"
                fontWeight="light"
              >
                {item.benefit}
              </Text>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export { TableSection };
