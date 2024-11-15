import { Text, Button } from "../../../ui";
import { ProtectionImg, ReliabilityImg } from "../../../assets";
import { IoCheckmarkOutline } from "react-icons/io5";

const HeroDivs = () => {
  const listItems = [
    "Digital Strategy",
    "Performance Improvment",
    "Compliance Assurance",
    "Competence Development",
  ];
  return (
    <div className="flex flex-col gap-32 my-36">
      <div className="flex justify-between items-center gap-16">
        <div className="w-1/2 flex flex-col gap-4">
          <Text
            variant="h3"
            fontFamily="gambetta"
            align="left"
            fontWeight="medium"
          >
            Protect What Matters Most
          </Text>
          <Text>
            We strengthen your organization by implementing proven security
            frameworks and industry standards. Our comprehensive approach
            addresses risks across your practices, people, and technology.
          </Text>
          <div>
            <Button variant="primary" label="Contact Us" />
          </div>
        </div>
        <div className="w-1/2">
          <img src={ProtectionImg} alt="Accompanying Image" />
        </div>
      </div>
      <div className="flex flex-row-reverse justify-between items-center gap-16">
        <div className="w-1/2 flex flex-col gap-4">
          <Text
            variant="h3"
            fontFamily="gambetta"
            align="left"
            fontWeight="medium"
          >
            We prioritize the{" "}
            <span className="text-afenoid-lemon">security</span> and{" "}
            <span className="text-afenoid-lemon">reliability</span> of digital
            systems, services, and transactions.
          </Text>
          <ul>
            {listItems.map((listItem, index) => (
              <li className="flex justify-start items-center gap-4" key={index}>
                <IoCheckmarkOutline color="#76A62E" size={30}/>
                <Text
                  variant="h4"
                  fontFamily="gambetta"
                  fontWeight="semi-bold"
                  align="left"
                >
                  {listItem}
                </Text>
              </li>
            ))}
          </ul>
          <Text>
            We strengthen your organization by implementing proven security
            frameworks and industry standards. Our comprehensive approach
            addresses risks across your practices, people, and technology.
          </Text>
          <div>
            <Button variant="primary" label="Book a Consultation" />
          </div>
        </div>
        <div className="w-1/2">
          <img src={ReliabilityImg} alt="Accompanying IMage" />
        </div>
      </div>
    </div>
  );
};

export { HeroDivs };
