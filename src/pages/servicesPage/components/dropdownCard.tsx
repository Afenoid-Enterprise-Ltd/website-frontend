// interface DropdownCardProps {
//   image?: string;
//   title: string;
//   description: string;
//   reverse: boolean;
// }

// import React, { useState } from "react";
// import { Text } from "../../../ui";

// const DropdownCard: React.FC<DropdownCardProps> = (props) => {
//   const { image, title, description, reverse } = props;

//   const [end, setEnd] = useState<number>(100);

//   const trimmedText =
//     end === description.length
//       ? description
//       : description.slice(0, description.lastIndexOf(" ", end));

//   const toggleEnd = () => {
//     if (end === 100) {
//       setEnd(description.length);
//     } else {
//       setEnd(100);
//     }
//   };

//   return (
//     <div className="w-[460px]">
//       <div>
//         <img src={image} alt={`${title} image`} />
//       </div>
//       <div className={`p-8 ${reverse ? "bg-[#224C1F]" : "bg-[#0A2B14]"}`}>
//         <div className="h-[5rem]">
//           <Text
//             variant="h5"
//             color="af-white"
//             fontFamily="raleway"
//             fontWeight="bold"
//             align="left"
//             customClassName="!text-[1rem]"
//           >
//             {title}
//           </Text>
//         </div>

//         <Text
//           variant="h5"
//           color="af-white"
//           fontFamily="proxima-nova"
//           fontWeight="regular"
//           align="justify"
//           customClassName="!text-[1rem]"
//         >
//           {trimmedText}
//           {end === 100 ? "..." : ""}
//         </Text>
//         <div className="w-full">
//           <button
//             className="w-full text-white font-proxima-nova font-bold text-base flex justify-start items-center py-4 transition-all duration-300 ease-in-out pb-0 hover:scale-105 hover:ml-2"
//             onClick={toggleEnd}
//           >
//             {end === 100 ? "Show More +" : "Show Less -"}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export { DropdownCard };

import React, { useState, useRef, useEffect } from "react";
import { Text } from "../../../ui";

interface DropdownCardProps {
  image?: string;
  title: string;
  description: string;
  reverse: boolean;
}

const DropdownCard: React.FC<DropdownCardProps> = (props) => {
  const { image, title, description, reverse } = props;

  const [expanded, setExpanded] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const [maxHeight, setMaxHeight] = useState("100px");

  useEffect(() => {
    if (contentRef.current) {
      setMaxHeight(expanded ? `${contentRef.current.scrollHeight}px` : "100px");
    }
  }, [expanded]);

  return (
    <div className="w-[460px]">
      <div>
        <img src={image} alt={`${title} image`} />
      </div>
      <div className={`p-8 ${reverse ? "bg-[#224C1F]" : "bg-[#0A2B14]"}`}>
        {/* Title */}
        <div className="h-[5rem]">
          <Text
            variant="h5"
            color="af-white"
            fontFamily="raleway"
            fontWeight="semi-bold"
            align="left"
            customClassName="!text-[1.2rem]"
          >
            {title}
          </Text>
        </div>

        {/* Description with smooth transition */}
        <div
          ref={contentRef}
          className="overflow-hidden transition-all duration-500 ease-in-out"
          style={{ maxHeight }}
        >
          <Text
            variant="h5"
            color="af-white"
            fontFamily="proxima-nova"
            fontWeight="regular"
            align="justify"
            customClassName="!text-[1rem]"
          >
            {description}
          </Text>
        </div>

        {/* Button */}
        <div className="w-full">
          <button
            className="w-full text-white font-proxima-nova font-bold text-base flex justify-start items-center py-4 transition-all duration-300 ease-in-out pb-0 hover:scale-105 hover:ml-2"
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? "Show Less -" : "Show More +"}
          </button>
        </div>
      </div>
    </div>
  );
};

export { DropdownCard };
