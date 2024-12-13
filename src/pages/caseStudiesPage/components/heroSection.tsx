import { Text } from "../../../ui"

const HeroSection = () =>{
    return(
        <section className="h-[90vh] max-h-[1600px] bg-case-study bg-no-repeat bg-contain bg-bottom flex items-center justify-center flex-col">
          <Text
            variant="h1"
            align="center"
            fontWeight="medium"
            fontFamily="gambetta"
            color="af-dark-green"
          >
            Security Success Stories
          </Text>
          <Text
            variant="h4"
            align="center"
            fontWeight="light"
            fontFamily="proxima-nova"
            customClassName="text-center w-[53%] mt-2 w-full msm:px-4 px-[7rem]"
            color="af-dark-green"
          >
            Discover how organisations have transformed their security posture
            and achieved excellence with Afenoid's guidance.
          </Text>
        </section>
    )
}

export {HeroSection}