import { Text } from "../../../ui";
import {
  NNPC,
  ICPCIcon,
  FIRSLogo,
  NIBSS,
  NSPM,
  GalaxyBackboneLogo,
  CenBankLogo,
  BankOfBotswana,
  NCBA,
  SECLogo,
  NCAA,
  BankOfTanzania,
  BankOfBotswanawhite,
  NDIC,
  BankOfAmericaLogo,
  NITDA,
  NIRSAL,
  ECOWAS,
  NationalBank,
  BankOfKigali,
  BankOfIndustry
} from "../../../assets";

const publicImages = [
  NNPC,
  ICPCIcon,
  FIRSLogo,
  NIBSS,
  NSPM,
  GalaxyBackboneLogo,
  CenBankLogo,
  BankOfBotswana,
  NCBA,
  SECLogo,
  NCAA,
  BankOfTanzania,
  BankOfBotswanawhite,
  NDIC,
  BankOfAmericaLogo,
  NITDA,
  NIRSAL,
  ECOWAS,
  NationalBank,
  BankOfKigali,
  BankOfIndustry
];

const PublicSector = () => {
  return (
    <div className="mt-14">
      <Text
        variant="h3"
        color="af-dark-green"
        fontFamily="raleway"
        fontWeight="bold"
        align="center"
      >
        Public Sector
      </Text>
      <section className="my-20 grid grid-cols-7 place-items-center gap-x-10 gap-y-20 px-[4rem] mxxl:grid-cols-3 msm:grid-cols-1 mmd:px-[3rem] mlg:grid-cols-2 mxxl:px-[3rem]">
        {publicImages.map((image) => (
          <div className="items-center flex justify-center">
            <img src={image} alt="" />
          </div>
        ))}
      </section>
    </div>
  );
};

export { PublicSector };
