import { Text, Button } from "../../ui";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ErrorImg } from "../../assets";

const ErrorPage = () => {
  const swayVariants = {
    animate: {
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 4,
        ease: "easeInOut",
        repeat: Infinity,
        
      },
    },
  };

  return (
    <motion.section
      className="w-screen h-screen flex justify-center items-center p-[5rem] gap-10 mmd:flex-col mxs:p-[2rem]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="w-[40%] msm:w-[80%]"
        animate="animate"
        variants={swayVariants}
        style={{ transformOrigin: "bottom center" }}
        whileInView="animate"
        viewport={{ once: false }}
      >
        <img src={ErrorImg} alt="" className="h-auto w-full" loading="lazy"/>
      </motion.div>
      <div className="w-[60%] flex flex-col gap-4 mmd:w-full">
        <Text
          variant="h1"
          color="af-green"
          align="left"
          fontFamily="gambetta"
          fontWeight="bold"
          customClassName="leading-none !text-[10rem] mmd:text-[6rem] mxs:text-[3.5rem] "
        >
          404
        </Text>
        <Text
          variant="h1"
          color="af-green"
          fontFamily="gambetta"
          align="left"
          fontWeight="bold"
          customClassName="mxl:text-h4 mxs:text-h5"
        >
          Oops! Page not compliant
        </Text>
        <Text
          variant="h6"
          color="af-dark-green"
          fontFamily="proxima-nova"
          align="left"
          fontWeight="regular"
          customClassName="mmlg:text-body-reg msm:text-caption-reg"
        >
          It seems you've taken a wrong turn. But don’t worry, we’re here to
          guide you back! Whether you're looking for compliance solutions,
          professional training, or just exploring Afenoid's services, let’s get
          you back on track.
        </Text>
        <Link to="/">
          <Button label="Return to Homepage" variant="primary" />
        </Link>
      </div>
    </motion.section>
  );
};

export { ErrorPage };
