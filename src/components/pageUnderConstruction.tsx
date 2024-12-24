import { Text, Button } from "../ui";
import { Link } from "react-router-dom";
import { FixMain, } from "../assets";

const PageUnderConstruction = () => {
  return (
    <section className="w-screen h-screen flex justify-center items-center p-[5rem] gap-10 mmd:flex-col mxs:p-[2rem]">
      <div className="w-[40%] relative msm:w-[80%]">
        <img src={FixMain} alt="Page under construction illustration"  className="h-auto w-full "/>
      </div>
      <div className="w-[60%] flex flex-col gap-4 mmd:w-full">
        <Text
          variant="h1"
          color="af-green"
          fontFamily="gambetta"
          align="left"
          fontWeight="bold"
          customClassName="mxl:text-h4 mxs:text-h5"
        >
          Something New Is Coming!
        </Text>
        <Text
          variant="h6"
          color="af-dark-green"
          fontFamily="proxima-nova"
          align="left"
          fontWeight="regular"
          customClassName="mmlg:text-body-reg msm:text-caption-reg"
        >
          We’re crafting something amazing for you! This page is currently under
          development as we work to enhance your experience with Afenoid. In the
          meantime, feel free to explore other sections of our website or get in
          touch with us for any assistance you need.
        </Text>
        <Link to="/">
          <Button label="Contact Support" variant="primary" />
        </Link>
      </div>
    </section>
  );
};

export { PageUnderConstruction };
