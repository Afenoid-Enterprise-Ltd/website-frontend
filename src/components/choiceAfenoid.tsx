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
        fontFamily="gambetta"
        customClassName="mb-3"
      >
        Why choose Afenoid?
      </Text>
      <Text
        variant="h5"
        align="center"
        color="af-dark-green"
        fontWeight="light"
        fontFamily="proxima-nova"
      >
        Here's why we are the best provider for your security solutions
      </Text>

      <div className="flex gap-12 my-12 mlg:grid mlg:grid-cols-2 mmd:flex mmd:flex-col ">
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
    <div className="flex flex-col items-center gap-6 mt-[3rem] ">
      <div className="bg-[#9bc73c28] p-4 rounded-full">
        <img src={icon} alt="Icon Image" loading="lazy" />
      </div>
      <div>
        <Text
          variant="h5"
          color="af-green"
          fontFamily="gambetta"
          fontWeight="bold"
          align="center"
          customClassName="uppercase"
        >
          {title}
        </Text>
      </div>
      <div>
        <Text
          variant="h5"
          fontFamily="proxima-nova"
          fontWeight="light"
          align="center"
          customClassName=""
        >
          {description}
        </Text>
      </div>
    </div>
  );
};
