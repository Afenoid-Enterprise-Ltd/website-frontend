
import { Text, Button } from "../../../ui";
import {
  ServicesImg1,
  ServicesImg2,
  ServicesImg3,
  HomePageServicesImg,
  HomeServicesIconBg
} from "../../../assets";
import { CaseStudyCard, Slogan } from "../../../components";

const ServicesSection = () => {
  const currentScreenWidth = window.innerWidth;

  const caseStudyData = [
    {
      title: "DIGITAL SKILLS DEVELOPMENT",
      description:
        "We support skill development in IT governance, service management, risk management, information security, cybersecurity, data privacy, and auditing.",
      image: ServicesImg1,
    },
    {
      title: "DIGITAL TRUST SERVICES",
      description:
        "The lack of digital trust can lead to a lack of adoption of digital technology, decreased productivity, lost business opportunities and value leakages.",
      image: ServicesImg2,
    },
    {
      title: "TRANSFORMATION CONSULTING",
      description:
        "Our consultation services help organizations leverage effective digital capabilities to stabilize, optimize, and improve business operations. ",
      image: ServicesImg3,
    },
  ];

  return (
    <section>
      <div>
        <Text
          variant="h3"
          fontFamily="gambetta"
          fontWeight="semi-bold"
          align="center"
          customClassName="my-[5rem]"
        >
          Our Services
        </Text>
        <div className="flex justify-between items-start gap-10 px-[3rem] mb-[10rem] mmlg:grid mmlg:grid-cols-2 msm:grid-cols-1 msm:px-[3.5rem] mxs:px-[2.5rem]">
          {caseStudyData.map((caseStudy, index) => (
            <CaseStudyCard
              title={caseStudy.title}
              description={caseStudy.description}
              image={caseStudy.image}
              key={index}
            />
          ))}
        </div>
      </div>
      <Slogan>
        <div className="w-full h-auto bg-afenoid-light-grey p-[2rem]">
          <Text
            variant="body-reg"
            color="af-green"
            fontFamily="proxima-nova"
            customClassName="uppercase msm:text-[.8rem] mxs:text-[.5rem]"
          >
            At Afenoid
          </Text>
          <Text
            variant="h2"
            color="af-green"
            fontFamily="gambetta"
            customClassName="text-[3rem] msm:text-[1.5rem] mxs:text-[1rem]"
            fontWeight="medium"
          >
            We strengthen organizations and equip professionals.
          </Text>
        </div>
      </Slogan>
      <div className=" bg-afenoid-white px-[5rem] py-[5rem] mmd:px-[3rem] mxs:px-[2rem] mxxs:px-4">
        <div className="p-[5rem] pb-0 bg-afenoid-green w-full flex flex-col justify-between items-stretch relative msm:p-[3rem] msm:pb-0 mxs:p-[1.5rem] mxs:pb-0">
          <div className="w-full relative">
            <div className="w-[60%] flex flex-col gap-8 pb-[10rem] mlg:w-full">
              <Text
                variant="h2"
                fontFamily="gambetta"
                align="left"
                color="floral-white"
                fontWeight="medium"
              >
                Ready to equip your professionals with skills and competencies?
              </Text>
              <Text
                variant="h5"
                fontFamily="proxima-nova"
                align="left"
                color="floral-white"
                fontWeight="light"
              >
                Our courses are designed to build expertise in IT governance,
                service management, risk management, cybersecurity, data
                privacy, and audit.
              </Text>
              <div>
                <Button
                  variant="secondary"
                  label=" Learn More"
                  customClassName="font-light border-white text-white"
                />
              </div>
            </div>
          </div>

          <div className="hidden w-full relative mlg:flex mlg:justify-center">
            <div className="absolute bottom-[5rem] animate-pulse">
              <img
                src={HomeServicesIconBg}
                alt="Image"
                className="mr-4"
                width={250}
                height={500}
              />
            </div>
            <div className="">
              <img
                src={HomePageServicesImg}
                alt="Image"
                className="mr-4"
                width={200}
                height={500}
              />
            </div>
          </div>
          <div className="w-full relative mlg:hidden">
          <div className="absolute z-10 bottom-[8rem] -right-8 animate-pulse">
              <img
                src={HomeServicesIconBg}
                alt="Image"
                className="mr-4"
                width={currentScreenWidth >= 1029 && currentScreenWidth <= 1329 ? 270 : 350}
                height={500}
              />
            </div>
            <div className={`absolute bottom-0 ${currentScreenWidth >= 1029 && currentScreenWidth <= 1329 ? "-right-8" : "right-0"} `}>
              <img
                src={HomePageServicesImg}
                alt="Image"
                className="mr-4"
                width={currentScreenWidth >= 1029 && currentScreenWidth <= 1329 ? 250 : 300}
                height={currentScreenWidth >= 1029 && currentScreenWidth <= 1329 ? 300 : 500}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { ServicesSection };
