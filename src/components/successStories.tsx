import { ForwardImg } from "../assets";
import { Text, Button } from "../ui";
import { Link } from "react-router-dom";
import { useMediaQuery } from "@uidotdev/usehooks";

const SuccessStories = () => {
  const isSmallDevice = useMediaQuery("only screen and (max-width : 976px)");

  return (
    <section>
      {!isSmallDevice ? (
        <div className="w-full my-[8rem]">
          <div
            className=" w-full h-[600px] bg-cover bg-no-repeat bg-center flex justify-between items-center"
            style={{ backgroundImage: `url(${ForwardImg})` }}
          >
            <div className="w-[70%] px-[4rem]">
              <Text
                variant="h2"
                align="left"
                color="af-white"
                fontFamily="raleway"
                fontWeight="bold"
                customClassName="!text-[40px]"
              >
                Security Success Stories
              </Text>
              <Text
                variant="h6"
                align="left"
                color="af-white"
                fontFamily="proxima-nova"
                fontWeight="regular"
                customClassName="!text-[24px] my-4"
              >
                Discover how organisations have transformed their security
                posture and achieved excellence with Afenoid's guidance.
              </Text>
              <div>
                <Link to="/case-studies">
                  <Button
                    variant="secondary"
                    label="Case Studies"
                    customClassName="border-white text-white"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <MobileSuccessStories />
      )}
    </section>
  );
};

export { SuccessStories };

export const MobileSuccessStories = () => {
  return (
    <div className="w-full my-[8rem]">
      <div className="bg-afenoid-green p-[4rem] mxs:px-4 mxs:p-8">
        <Text
          variant="h2"
          align="left"
          color="af-white"
          fontFamily="raleway"
          fontWeight="semi-bold"
          customClassName="!text-[30px]"
        >
          Security Success Stories
        </Text>
        <Text
          variant="h6"
          align="left"
          color="af-white"
          fontFamily="proxima-nova"
          fontWeight="regular"
          customClassName="!text-[16px] my-4"
        >
          Discover how organisations have transformed their security posture and
          achieved excellence with Afenoid's guidance.
        </Text>
      </div>
      <div></div>
    </div>
  );
};
