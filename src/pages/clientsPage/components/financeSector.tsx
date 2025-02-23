import { Text } from "../../../ui";
import {
  StandardCharteredLogo,
  EcobankLogo,
  AXAInsurance,
  KeystoneBankLogo,
  PremiumTrust,
  PolarisBank,
  Fiducia,
  MicroAccess,
  Woven,
  GTCOLogo,
  WemaBank,
  FidelityBankLogo,
  Habari,
  FountainPay,
  CRDBBank,
  InvestmentOne,
  UnifiedPayment,
  EtranzactLogo,
  PayExpress,
  UnityBank,
  ArmPensions,
  Chaka,
  Innovare,
  DigitalSafe,
  EgolePay,
  SterlingBank,
  PremiumPensionLogo,
} from "../../../assets";

const publicImages = [
  StandardCharteredLogo,
  EcobankLogo,
  AXAInsurance,
  KeystoneBankLogo,
  PremiumTrust,
  PolarisBank,
  Fiducia,
  MicroAccess,
  Woven,
  GTCOLogo,
  WemaBank,
  FidelityBankLogo,
  Habari,
  FountainPay,
  CRDBBank,
  InvestmentOne,
  UnifiedPayment,
  EtranzactLogo,
  PayExpress,
  UnityBank,
  ArmPensions,
  Chaka,
  Innovare,
  DigitalSafe,
  EgolePay,
  SterlingBank,
  PremiumPensionLogo,
];

const FinanceSector = () => {
  return (
    <div className="mt-14">
      <Text
        variant="h3"
        color="af-dark-green"
        fontFamily="raleway"
        fontWeight="bold"
        align="center"
      >
        Financial Sector
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

export { FinanceSector };
