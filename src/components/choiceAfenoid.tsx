import { Text } from "../ui";
import {
  VerifiedIcon,
  MoneyHandIcon,
  SmileyIcon,
  RecycleIcon,
} from "../assets";

const ChoiceAfenoid = () => {
  const solutionData = [
    {
      icon: VerifiedIcon,
      title: "Credible",
      description:
        "We are ethical, competent, proficient, professional, authentic, honest, trust-worthy and reliable.",
    },
    {
      icon: RecycleIcon,
      title: "Agile",
      description:
        "We are responsive, astute, enthusiastic, adaptable, dynamic, diligent and resilient.",
    },
    {
      icon: SmileyIcon,
      title: "Respectful",
      description:
        "We are relationship-centred, kind, compassionate, empathetic and friendly.",
    },
    {
      icon: MoneyHandIcon,
      title: "Enterprising",
      description:
        "We are profitable, resourceful, capable, creative and courageous.",
    },
  ];

  return (
    <div>
      <Text
        variant="h2"
        align="center"
        color="af-dark-green"
        fontWeight="medium"
        fontFamily="poppins"
        customClassName="mb-3 msm:text-h4"
      >
        Our Values
      </Text>
      <Text
        variant="h5"
        align="center"
        color="af-dark-green"
        fontWeight="light"
        fontFamily="proxima-nova"
      >
        Here's how we CARE for your security solutions
      </Text>

      <div className="flex justify-between items-center gap-12 my-12 mlg:grid mlg:grid-cols-2 mmd:flex mmd:flex-col ">
        {solutionData.map((solution, index) => (
          <Solution
            icon={solution.icon}
            title={solution.title}
            description={solution.description}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export { ChoiceAfenoid };

type SolutionProps = {
  icon: string;
  title: string;
  description: string;
};

export const Solution: React.FC<SolutionProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className="flex flex-col items-center gap-6 mt-[3rem] msm:gap-3">
      <div className="bg-[#9bc73c28] p-4 rounded-full">
        <img src={icon} alt="Icon Image" loading="lazy" />
      </div>
      <div>
        <Text
          variant="h5"
          color="af-green"
          fontFamily="raleway"
          fontWeight="bold"
          align="center"
          customClassName="uppercase text-[24px]"
        >
          {title}
        </Text>
      </div>
      <div>
        <Text
          variant="h5"
          fontFamily="proxima-nova"
          fontWeight="regular"
          align="center"
          customClassName="text-[20px]"
        >
          {description}
        </Text>
      </div>
    </div>
  );
};
