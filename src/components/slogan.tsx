import { SkylineImg } from "../assets";
import { Text } from "../ui";


const Slogan = () => {
  return ( 
    <div className="w-screen">
        <img src={SkylineImg} alt="Skyline Pattern" />
        <div className="w-full h-auto bg-afenoid-light-grey p-[2rem]">
          <Text
            variant="body-reg"
            color="af-green"
            fontFamily="proxima-nova"
            customClassName="uppercase"
          >
            At Afenoid
          </Text>
          <Text
            variant="h2"
            color="af-green"
            fontFamily="gambetta"
            customClassName="text-[3rem]"
            fontWeight="light"
          >
            We <span className="font-bold">strengthen</span> organizations and{" "}
            <span className="font-bold">equip</span> professionals.
          </Text>
        </div>
      </div>
  );
}
 
export { Slogan };