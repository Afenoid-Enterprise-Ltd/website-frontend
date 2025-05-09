import { Text } from "../../../ui";
import {
  AEDC,
  AllianzBridge,
  CCSI,
  ComercioPartners,
  DataBridge,
  DiamondSecurity,
  DataConnect,
  EHealthAfrica,
  Mainstream,
  Opex,
  PanoramicSynergy,
  ProcessConsulting,
  QuomodoSystems,
  RealInformatics,
  RackCenter,
  Wragby,
  ShellLogo,
  MTNLogo,
  IsacaLogo
} from "../../../assets";

const otherSectorImages = [
  AEDC,
  AllianzBridge,
  CCSI,
  ComercioPartners,
  DataBridge,
  DiamondSecurity,
  DataConnect,
  EHealthAfrica,
  Mainstream,
  Opex,
  PanoramicSynergy,
  ProcessConsulting,
  QuomodoSystems,
  RealInformatics,
  RackCenter,
  Wragby,
  ShellLogo,
  MTNLogo,
  IsacaLogo
];

const Others = () => {
  return (
    <div className="mt-14">
      <Text
        variant="h3"
        color="af-dark-green"
        fontFamily="raleway"
        fontWeight="bold"
        align="center"
      >
        Others
      </Text>
      <section className="my-20 grid grid-cols-7 place-items-center gap-x-10 gap-y-20 px-[4rem] mxxl:grid-cols-3 msm:grid-cols-1 mmd:px-[3rem] mlg:grid-cols-2 mxxl:px-[3rem]">
        {otherSectorImages.map((image) => (
          <div className="items-center flex justify-center">
            <img src={image} alt="" />
          </div>
        ))}
      </section>
    </div>
  );
};

export { Others };
